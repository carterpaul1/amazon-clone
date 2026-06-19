import { useTranslation } from "react-i18next";
import { categories, products } from "../data/products";
import AmazonMusicSection from "../components/AmazonMusicSection";
import ProductCard from "../components/ProductCard";
import SignInBanner from "../components/SignInBanner";
import { getCategoryLabel } from "../data/products";

function ProductSection({ title, subtitle, items, onAddToCart, onViewProduct }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({
  category,
  filteredProducts,
  onAddToCart,
  onCategoryChange,
  onOpenOrders,
  onOpenSignIn,
  onViewProduct,
  searchQuery,
}) {
  const { t } = useTranslation();
  const hasSearch = searchQuery.trim().length > 0 || category !== "All";
  const trending = products.filter((product) => product.section === "Trending");
  const essentials = products.filter((product) => product.section === "Essentials");
  const giftCards = products.filter((product) => product.section === "Gift Cards");

  return (
    <main className="bg-gray-100">
      <section className="border-b border-[#f3a847] bg-[#e3e6e6]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c45500]">
              {t("home.eyebrow")}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              {t("home.title")}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
              {t("home.description")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => onCategoryChange(item)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                    category === item
                      ? "border-[#232f3e] bg-[#232f3e] text-white"
                      : "border-gray-300 bg-white text-gray-800 hover:border-[#f90]"
                  }`}
                >
                  {getCategoryLabel(t, item)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {trending.slice(0, 4).map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => onViewProduct(product)}
                className="flex min-h-40 items-center justify-center bg-white p-4 shadow-sm hover:shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-32 max-w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {hasSearch ? (
        <ProductSection
          title={t("home.resultCount", { count: filteredProducts.length })}
          subtitle={t("home.resultSubtitle")}
          items={filteredProducts}
          onAddToCart={onAddToCart}
          onViewProduct={onViewProduct}
        />
      ) : (
        <>
          <ProductSection
            title={t("home.trendingTitle")}
            subtitle={t("home.trendingSubtitle")}
            items={trending}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
          />
          <ProductSection
            title={t("home.essentialsTitle")}
            subtitle={t("home.essentialsSubtitle")}
            items={essentials}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
          />
          <ProductSection
            title={t("home.giftCardsTitle")}
            subtitle={t("home.giftCardsSubtitle")}
            items={giftCards}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
          />
        </>
      )}

      <SignInBanner onOpenOrders={onOpenOrders} onOpenSignIn={onOpenSignIn} />
      <AmazonMusicSection />
    </main>
  );
}
