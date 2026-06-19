import { FaBoxOpen, FaRegCreditCard, FaUserShield } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function SignInBanner({ onOpenOrders, onOpenSignIn }) {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-4 py-8">
      <div className="mx-auto grid max-w-7xl gap-4 border-y border-gray-200 py-6 md:grid-cols-[1fr_2fr] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            {t("accountStrip.title")}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t("accountStrip.copy")}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onOpenSignIn}
              className="rounded-full bg-[#ffd814] px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
            >
              {t("accountStrip.signInButton")}
            </button>
            <button
              type="button"
              onClick={onOpenOrders}
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              {t("accountStrip.ordersButton")}
            </button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: <FaUserShield className="text-xl text-[#007185]" />,
              title: t("accountStrip.mockAccountTitle"),
              copy: t("accountStrip.mockAccountCopy"),
            },
            {
              icon: <FaBoxOpen className="text-xl text-[#007185]" />,
              title: t("accountStrip.orderFlowTitle"),
              copy: t("accountStrip.orderFlowCopy"),
            },
            {
              icon: <FaRegCreditCard className="text-xl text-[#007185]" />,
              title: t("accountStrip.safeCheckoutTitle"),
              copy: t("accountStrip.safeCheckoutCopy"),
            },
          ].map(({ icon, title, copy }) => (
            <div key={title} className="rounded-sm bg-gray-50 p-4">
              {icon}
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
