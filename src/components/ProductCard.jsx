import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { formatCurrency, getProductCopy } from "../data/products";

export default function ProductCard({ product, onAddToCart, onViewProduct }) {
  const { t } = useTranslation();
  const copy = getProductCopy(product, t);

  return (
    <article className="flex h-full flex-col rounded-sm border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <button
        type="button"
        onClick={() => onViewProduct(product)}
        className="flex h-44 w-full items-center justify-center bg-gray-50 p-3"
        aria-label={t("productCard.view", { title: copy.title })}
      >
        <img
          src={product.image}
          alt={copy.title}
          className="max-h-full max-w-full object-contain"
        />
      </button>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="rounded-sm bg-[#fef3c7] px-2 py-1 text-xs font-semibold text-[#92400e]">
            {copy.badge}
          </span>
          <span className="text-xs text-gray-500">{copy.category}</span>
        </div>

        <button
          type="button"
          onClick={() => onViewProduct(product)}
          className="text-left text-sm font-semibold leading-5 text-gray-900 hover:text-[#c45500] hover:underline"
        >
          {copy.title}
        </button>

        <div className="mt-2 flex items-center gap-1 text-sm">
          <span
            className="flex text-[#ffa41c]"
            aria-label={t("productCard.stars", { rating: product.rating })}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={star <= Math.round(product.rating) ? "" : "text-gray-300"}
              />
            ))}
          </span>
          <span className="text-[#007185]">{product.reviews.toLocaleString()}</span>
        </div>

        <p className="mt-3 text-2xl font-semibold text-gray-900">
          {formatCurrency(product.price)}
        </p>
        <p className="mt-1 text-sm text-gray-600">{copy.delivery}</p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="w-full rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#f7ca00] focus:outline-none focus:ring-2 focus:ring-[#f90]"
          >
            {t("productCard.addToCart")}
          </button>
        </div>
      </div>
    </article>
  );
}
