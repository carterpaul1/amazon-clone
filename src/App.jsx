import { Suspense, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import CheckoutSuccess from "./components/CheckoutSuccess";
import LocationModal from "./components/LocationModal";
import OrdersPage from "./components/OrdersPage";
import SignInPage from "./components/SignInPage";
import { getProductCopy, products } from "./data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CART_STORAGE_KEY = "commercehub-cart";
const LOCATION_STORAGE_KEY = "commercehub-location";
const USER_STORAGE_KEY = "commercehub-user";
const COUNTRY_STORAGE_KEY = "commercehub-country";

const defaultLocation = {
  city: "Newport News",
  zipCode: "23606",
};

const countryLocations = {
  us: defaultLocation,
  mx: {
    city: "Mexico City",
    zipCode: "01000",
  },
  ca: {
    city: "Toronto",
    zipCode: "M5H",
  },
};

function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

function loadJson(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallback;
  } catch {
    return fallback;
  }
}

function App() {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState(loadCart);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("home");
  const [country, setCountry] = useState(() =>
    loadJson(COUNTRY_STORAGE_KEY, "us")
  );
  const [deliveryLocation, setDeliveryLocation] = useState(() =>
    loadJson(LOCATION_STORAGE_KEY, defaultLocation)
  );
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(() => loadJson(USER_STORAGE_KEY, null));

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(deliveryLocation));
  }, [deliveryLocation]);

  useEffect(() => {
    localStorage.setItem(COUNTRY_STORAGE_KEY, JSON.stringify(country));
  }, [country]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return products.filter((product) => {
      const copy = getProductCopy(product, t);
      const matchesCategory = category === "All" || product.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        copy.title.toLowerCase().includes(normalizedQuery) ||
        copy.description.toLowerCase().includes(normalizedQuery) ||
        copy.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, searchQuery, t]);

  function addToCart(product) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 9) }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, quantity) {
    setCartItems((items) =>
      items.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  }

  function removeItem(productId) {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  }

  function goHome() {
    setCurrentPage("home");
    setSelectedProduct(null);
    setLastOrder(null);
  }

  function viewProduct(product) {
    setSelectedProduct(product);
    setCurrentPage("product");
  }

  function checkout(totals) {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setLastOrder({
      ...totals,
      id: `CH-${Date.now().toString().slice(-6)}`,
      itemCount,
    });
    setCartItems([]);
    setCurrentPage("success");
  }

  function saveLocation(location) {
    setDeliveryLocation(location);
    setIsLocationModalOpen(false);
  }

  function changeCountry(countryCode) {
    setCountry(countryCode);
    setDeliveryLocation(countryLocations[countryCode] || defaultLocation);
  }

  function signIn(mockUser) {
    setUser(mockUser);
    setCurrentPage("orders");
  }

  function renderPage() {
    if (currentPage === "product") {
      return (
        <ProductDetail
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={goHome}
        />
      );
    }

    if (currentPage === "cart") {
      return (
        <CartPage
          cartItems={cartItems}
          onBack={goHome}
          onCheckout={checkout}
          onClearCart={() => setCartItems([])}
          onRemoveItem={removeItem}
          onUpdateQuantity={updateQuantity}
        />
      );
    }

    if (currentPage === "success" && lastOrder) {
      return <CheckoutSuccess order={lastOrder} onShopAgain={goHome} />;
    }

    if (currentPage === "signin") {
      return <SignInPage onBack={goHome} onSignIn={signIn} user={user} />;
    }

    if (currentPage === "orders") {
      return (
        <OrdersPage
          onBack={goHome}
          onShopDeals={() => {
            setCategory("All");
            setSearchQuery("");
            setCurrentPage("home");
          }}
          user={user}
        />
      );
    }

    return (
      <HomePage
        category={category}
        filteredProducts={filteredProducts}
        onAddToCart={addToCart}
        onCategoryChange={setCategory}
        onOpenOrders={() => setCurrentPage("orders")}
        onOpenSignIn={() => setCurrentPage("signin")}
        onViewProduct={viewProduct}
        searchQuery={searchQuery}
      />
    );
  }

  return (
    <Suspense fallback={<div className="p-6 text-center">{t("app.loading")}</div>}>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Header
          cartCount={cartCount}
          category={category}
          deliveryLocation={deliveryLocation}
          onCategoryChange={setCategory}
          onOpenLocation={() => setIsLocationModalOpen(true)}
          onLogoClick={goHome}
          onOpenCart={() => setCurrentPage("cart")}
          onOpenOrders={() => setCurrentPage("orders")}
          onOpenSignIn={() => setCurrentPage("signin")}
          onSearchChange={(value) => {
            setSearchQuery(value);
            setCurrentPage("home");
          }}
          searchQuery={searchQuery}
          user={user}
        />
        {renderPage()}
        <Footer
          country={country}
          onCountryChange={changeCountry}
        />
        {isLocationModalOpen && (
          <LocationModal
            currentLocation={deliveryLocation}
            onClose={() => setIsLocationModalOpen(false)}
            onSave={saveLocation}
          />
        )}
      </div>
    </Suspense>
  );
}

export default App;
