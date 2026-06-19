import { Suspense, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import CartPage from "./components/CartPage";
import CheckoutSuccess from "./components/CheckoutSuccess";
import { getProductCopy, products } from "./data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CART_STORAGE_KEY = "commercehub-cart";

function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

function App() {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState(loadCart);
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState("home");
  const [lastOrder, setLastOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

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

    return (
      <HomePage
        category={category}
        filteredProducts={filteredProducts}
        onAddToCart={addToCart}
        onCategoryChange={setCategory}
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
          onCategoryChange={setCategory}
          onLogoClick={goHome}
          onOpenCart={() => setCurrentPage("cart")}
          onSearchChange={(value) => {
            setSearchQuery(value);
            setCurrentPage("home");
          }}
          searchQuery={searchQuery}
        />
        {renderPage()}
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
