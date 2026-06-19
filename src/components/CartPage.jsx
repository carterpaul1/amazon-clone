import { FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { formatCurrency, getProductCopy } from "../data/products";

export default function CartPage({
  cartItems,
  onBack,
  onClearCart,
  onCheckout,
  onRemoveItem,
  onUpdateQuantity,
}) {
  const { t } = useTranslation();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const estimatedTax = subtotal * 0.06;
  const shipping = subtotal > 35 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + estimatedTax + shipping;

  return (
    <section className="min-h-screen bg-gray-100 py-8">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[1fr_360px]">
        <div className="bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <button
                type="button"
                onClick={onBack}
                className="text-sm font-semibold text-[#007185] hover:text-[#c45500] hover:underline"
              >
                {t("cart.continueShopping")}
              </button>
              <h1 className="mt-3 text-3xl font-semibold text-gray-900">
                {t("cart.title")}
              </h1>
            </div>
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={onClearCart}
                className="text-sm font-semibold text-[#007185] hover:text-[#c45500] hover:underline"
              >
                {t("cart.clear")}
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            <div className="py-14 text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {t("cart.emptyTitle")}
              </h2>
              <p className="mt-2 text-gray-600">
                {t("cart.emptyCopy")}
              </p>
              <button
                type="button"
                onClick={onBack}
                className="mt-6 rounded-full bg-[#ffd814] px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
              >
                {t("cart.shopProducts")}
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {cartItems.map((item) => {
                const copy = getProductCopy(item, t);

                return (
                <article
                  key={item.id}
                  className="grid gap-4 py-5 sm:grid-cols-[140px_1fr_auto]"
                >
                  <div className="flex h-32 items-center justify-center bg-gray-50 p-3">
                    <img
                      src={item.image}
                      alt={copy.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {copy.title}
                    </h2>
                    <p className="mt-1 text-sm text-green-700">{t("cart.inStock")}</p>
                    <p className="mt-1 text-sm text-gray-600">{copy.delivery}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <label className="text-sm font-semibold text-gray-700">
                        {t("cart.quantity")}
                        <select
                          value={item.quantity}
                          onChange={(event) =>
                            onUpdateQuantity(item.id, Number(event.target.value))
                          }
                          className="ml-2 rounded border border-gray-300 bg-white px-2 py-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((quantity) => (
                            <option key={quantity} value={quantity}>
                              {quantity}
                            </option>
                          ))}
                        </select>
                      </label>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#007185] hover:text-[#c45500] hover:underline"
                      >
                        <FaTrash className="text-xs" />
                        {t("cart.remove")}
                      </button>
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-gray-900">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </article>
                );
              })}
            </div>
          )}
        </div>

        <aside className="h-fit bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            {t("cart.summary")}
          </h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt>{t("cart.items", { count: itemCount })}</dt>
              <dd>{formatCurrency(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("cart.shipping")}</dt>
              <dd>{shipping === 0 ? t("cart.free") : formatCurrency(shipping)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>{t("cart.tax")}</dt>
              <dd>{formatCurrency(estimatedTax)}</dd>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-4 text-lg font-semibold text-[#b12704]">
              <dt>{t("cart.total")}</dt>
              <dd>{formatCurrency(total)}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => onCheckout({ subtotal, shipping, estimatedTax, total })}
            disabled={cartItems.length === 0}
            className="mt-5 w-full rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00] disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {t("cart.checkout")}
          </button>
        </aside>
      </div>
    </section>
  );
}
