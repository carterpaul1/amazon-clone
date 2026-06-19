import { useTranslation } from "react-i18next";
import amazonLogo from "../assets/amazon-logo.png";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const columns = [
    {
      title: t("footer.getToKnowUs"),
      links: [
        t("footer.careers"),
        t("footer.newsletter"),
        t("footer.about"),
        t("footer.accessibility"),
      ],
    },
    {
      title: t("footer.makeMoney"),
      links: [
        t("footer.sell"),
        t("footer.brand"),
        t("footer.affiliate"),
        t("footer.advertise"),
      ],
    },
    {
      title: t("footer.paymentProducts"),
      links: [
        t("footer.visa"),
        t("footer.storeCard"),
        t("footer.points"),
        t("footer.giftCards"),
      ],
    },
    {
      title: t("footer.help"),
      links: [
        t("footer.account"),
        t("footer.orders"),
        t("footer.shipping"),
        t("footer.returns"),
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#232f3e] text-gray-300">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full bg-[#37475a] py-3 text-center text-sm hover:bg-[#485769]"
      >
        {t("footer.backToTop")}
      </button>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 text-sm md:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-3 font-bold text-white">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <button type="button" className="text-left hover:underline">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-600 px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img src={amazonLogo} alt="Amazon logo" className="w-24 object-contain" />
            <select
              onChange={(event) => i18n.changeLanguage(event.target.value)}
              className="rounded border border-gray-500 bg-[#232f3e] px-3 py-1 text-sm text-gray-200"
            aria-label="Footer language"
          >
              <option value="en">{t("footer.english")}</option>
              <option value="es">{t("footer.spanish")}</option>
            </select>
            <select className="rounded border border-gray-500 bg-[#232f3e] px-3 py-1 text-sm text-gray-200">
              <option value="us">{t("footer.unitedStates")}</option>
              <option value="mx">{t("footer.mexico")}</option>
              <option value="ca">{t("footer.canada")}</option>
            </select>
          </div>

          <p className="max-w-3xl text-xs leading-5 text-gray-400">
            {t("footer.disclaimer")}
          </p>
        </div>
      </div>

      <div className="bg-[#131921] px-4 py-4 text-center text-xs text-gray-400">
        2026 CommerceHub demo - {t("footer.builtWith")}
      </div>
    </footer>
  );
}
