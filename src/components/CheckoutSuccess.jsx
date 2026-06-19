import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "../data/products";

export default function CheckoutSuccess({ order, onShopAgain }) {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl bg-white p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <FaCheckCircle className="mt-1 text-4xl text-green-600" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
              {t("checkout.placed")}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900">
              {t("checkout.title")}
            </h1>
            <p className="mt-3 text-gray-700">
              {t("checkout.copy")}
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-900">
            {t("checkout.details")}
          </h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-gray-500">{t("checkout.orderId")}</dt>
              <dd className="font-semibold text-gray-900">{order.id}</dd>
            </div>
            <div>
              <dt className="text-gray-500">{t("checkout.items")}</dt>
              <dd className="font-semibold text-gray-900">{order.itemCount}</dd>
            </div>
            <div>
              <dt className="text-gray-500">{t("checkout.shipping")}</dt>
              <dd className="font-semibold text-gray-900">
                {order.shipping === 0 ? t("cart.free") : formatCurrency(order.shipping)}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">{t("checkout.total")}</dt>
              <dd className="font-semibold text-[#b12704]">
                {formatCurrency(order.total)}
              </dd>
            </div>
          </dl>
        </div>

        <button
          type="button"
          onClick={onShopAgain}
          className="mt-8 rounded-full bg-[#ffd814] px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
        >
          {t("checkout.shopAgain")}
        </button>
      </div>
    </section>
  );
}
