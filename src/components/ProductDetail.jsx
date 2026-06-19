import { FaStar, FaTruck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { formatCurrency, getProductCopy } from "../data/products";

export default function ProductDetail({ product, onAddToCart, onBack }) {
  const { t } = useTranslation();

  if (!product) {
    return null;
  }

  const copy = getProductCopy(product, t);
  const features = [
    t("productDetail.secureCheckout"),
    t("productDetail.easyReturns"),
    t("productDetail.orderTracking"),
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-[1fr_1.1fr_360px]">
        <div className="flex min-h-80 items-center justify-center bg-gray-50 p-8">
          <img
            src={product.image}
            alt={copy.title}
            className="max-h-[28rem] max-w-full object-contain"
          />
        </div>

        <div>
          <button
            type="button"
            onClick={onBack}
            className="mb-4 text-sm font-semibold text-[#007185] hover:text-[#c45500] hover:underline"
          >
            {t("productDetail.back")}
          </button>
          <p className="text-sm text-[#007185]">{copy.category}</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-gray-900">
            {copy.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 border-b border-gray-200 pb-4">
            <span className="flex text-[#ffa41c]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={star <= Math.round(product.rating) ? "" : "text-gray-300"}
                />
              ))}
            </span>
            <span className="text-sm text-[#007185]">
              {t("productDetail.ratings", {
                rating: product.rating,
                count: product.reviews.toLocaleString(),
              })}
            </span>
          </div>
          <p className="mt-5 text-3xl font-semibold text-gray-900">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
            {copy.description}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-sm border border-gray-200 p-3 text-sm">
                <p className="font-semibold text-gray-900">{feature}</p>
                <p className="mt-1 text-gray-600">{t("productDetail.included")}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-sm border border-gray-200 p-5 shadow-sm">
          <p className="text-3xl font-semibold text-gray-900">
            {formatCurrency(product.price)}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
            <FaTruck className="text-[#007185]" />
            <span>{copy.delivery}</span>
          </div>
          <p className="mt-4 text-lg font-semibold text-green-700">
            {t("productDetail.inStock")}
          </p>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="mt-5 w-full rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00] focus:outline-none focus:ring-2 focus:ring-[#f90]"
          >
            {t("productDetail.addToCart")}
          </button>
          <button
            type="button"
            onClick={() => {
              onAddToCart(product);
              onBack();
            }}
            className="mt-3 w-full rounded-full bg-[#ffa41c] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#fa8900] focus:outline-none focus:ring-2 focus:ring-[#f90]"
          >
            {t("productDetail.buyNow")}
          </button>
        </aside>
      </div>
    </section>
  );
}
