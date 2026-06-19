import { useTranslation } from "react-i18next";
import { FaBoxOpen, FaRedoAlt, FaTruck } from "react-icons/fa";
import { formatCurrency } from "../data/products";

const mockOrders = [
  {
    id: "CH-104928",
    date: "June 12, 2026",
    statusKey: "delivered",
    total: 89.98,
    items: ["Echo Dot (5th Gen)", "Fire TV Stick 4K"],
  },
  {
    id: "CH-104113",
    date: "June 4, 2026",
    statusKey: "returnWindow",
    total: 25,
    items: ["Amazon US Gift Card - $25"],
  },
];

export default function OrdersPage({ onBack, onShopDeals, user }) {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 bg-white p-6 shadow-sm md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c45500]">
              {t("orders.eyebrow")}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900">
              {t("orders.title")}
            </h1>
            <p className="mt-2 text-gray-700">
              {user
                ? t("orders.signedInCopy", { name: user.name })
                : t("orders.guestCopy")}
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            {t("orders.back")}
          </button>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <article key={order.id} className="bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{t("orders.orderPlaced")}</p>
                    <p className="font-semibold text-gray-900">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("orders.orderId")}</p>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("orders.total")}</p>
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(order.total)}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <div className="flex items-center gap-2 text-green-700">
                      <FaTruck />
                      <p className="font-semibold">
                        {t(`orders.${order.statusKey}`)}
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">
                      {order.items.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={onShopDeals}
                      className="rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
                    >
                      {t("orders.buyAgain")}
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      {t("orders.returnItem")}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit bg-white p-5 shadow-sm">
            <FaRedoAlt className="text-2xl text-[#007185]" />
            <h2 className="mt-3 text-xl font-semibold text-gray-900">
              {t("orders.returnTitle")}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {t("orders.returnCopy")}
            </p>
            <div className="mt-5 rounded-sm bg-gray-50 p-4">
              <FaBoxOpen className="text-[#007185]" />
              <p className="mt-2 text-sm font-semibold text-gray-900">
                {t("orders.supportTitle")}
              </p>
              <p className="mt-1 text-sm text-gray-600">{t("orders.supportCopy")}</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
