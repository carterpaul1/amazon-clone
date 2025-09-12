import { useTranslation } from "react-i18next";
import amazonLogo from "../assets/amazon-logo.png";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="bg-[#232f3e] text-gray-300 w-full">
      {/* Back to top */}
      <div className="bg-[#37475a] text-center py-3 text-sm cursor-pointer hover:bg-[#485769]">
        {t("footer.backToTop")}
      </div>

      {/* Top Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-12 max-w-6xl mx-auto text-sm">
        <div>
          <h3 className="font-bold mb-2">{t("footer.getToKnowUs")}</h3>
          <ul className="space-y-1">
            <li>{t("footer.careers")}</li>
            <li>{t("footer.newsletter")}</li>
            <li>{t("footer.about")}</li>
            <li>{t("footer.accessibility")}</li>
            <li>{t("footer.sustainability")}</li>
            <li>{t("footer.press")}</li>
            <li>{t("footer.investors")}</li>
            <li>{t("footer.devices")}</li>
            <li>{t("footer.science")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">{t("footer.makeMoney")}</h3>
          <ul className="space-y-1">
            <li>{t("footer.sell")}</li>
            <li>{t("footer.sellApps")}</li>
            <li>{t("footer.supply")}</li>
            <li>{t("footer.brand")}</li>
            <li>{t("footer.affiliate")}</li>
            <li>{t("footer.driver")}</li>
            <li>{t("footer.deliveryBusiness")}</li>
            <li>{t("footer.advertise")}</li>
            <li>{t("footer.selfPublish")}</li>
            <li>{t("footer.hubPartner")}</li>
            <li className="text-blue-400">{t("footer.seeMore")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">{t("footer.paymentProducts")}</h3>
          <ul className="space-y-1">
            <li>{t("footer.visa")}</li>
            <li>{t("footer.storeCard")}</li>
            <li>{t("footer.securedCard")}</li>
            <li>{t("footer.businessCard")}</li>
            <li>{t("footer.points")}</li>
            <li>{t("footer.marketplace")}</li>
            <li>{t("footer.reload")}</li>
            <li>{t("footer.giftCards")}</li>
            <li>{t("footer.converter")}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">{t("footer.help")}</h3>
          <ul className="space-y-1">
            <li>{t("footer.account")}</li>
            <li>{t("footer.orders")}</li>
            <li>{t("footer.shipping")}</li>
            <li>{t("footer.prime")}</li>
            <li>{t("footer.returns")}</li>
            <li>{t("footer.manageContent")}</li>
            <li>{t("footer.recalls")}</li>
            <li>{t("footer.registry")}</li>
            <li>{t("footer.helpCenter")}</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Bottom Section */}
      <div className="flex flex-col items-center py-8 space-y-4">
        {/* Logo + language */}
        <div className="flex items-center space-x-6">
          <img
            src={amazonLogo}
            alt="Amazon Logo"
            className="w-24 object-contain"
          />
          <div className="flex items-center space-x-2">
            {/* Language Dropdown */}
            <select
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="border border-gray-500 px-3 py-1 rounded text-sm bg-[#232F3E] text-gray-200"
            >
              <option value="en">🌐 English</option>
              <option value="es">🇪🇸 Español</option>
            </select>

            {/* Country Dropdown */}
            <select className="border border-gray-500 px-3 py-1 rounded text-sm bg-[#232F3E] text-gray-200">
              <option value="us">🇺🇸 United States</option>
              <option value="mx">🇲🇽 Mexico</option>
              <option value="ca">🇨🇦 Canada</option>
            </select>
          </div>
        </div>

        {/* Extra Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-10 text-xs text-gray-400 max-w-6xl mx-auto text-center">
          <p>
            {t("footer.music")}
            <br />
            {t("footer.musicDesc")}
          </p>
          <p>
            {t("footer.ads")}
            <br />
            {t("footer.adsDesc")}
          </p>
          <p>
            {t("footer.business")}
            <br />
            {t("footer.businessDesc")}
          </p>
          <p>
            {t("footer.fresh")}
            <br />
            {t("footer.freshDesc")}
          </p>
          <p>
            {t("footer.global")}
            <br />
            {t("footer.globalDesc")}
          </p>
          <p>
            {t("footer.aws")}
            <br />
            {t("footer.awsDesc")}
          </p>
          <p>
            {t("footer.audible")}
            <br />
            {t("footer.audibleDesc")}
          </p>
          <p>
            {t("footer.boxOffice")}
            <br />
            {t("footer.boxOfficeDesc")}
          </p>
          <p>
            {t("footer.goodreads")}
            <br />
            {t("footer.goodreadsDesc")}
          </p>
          <p>
            {t("footer.imdb")}
            <br />
            {t("footer.imdbDesc")}
          </p>
          <p>
            {t("footer.kdp")}
            <br />
            {t("footer.kdpDesc")}
          </p>
          <p>
            {t("footer.primeVideo")}
            <br />
            {t("footer.primeVideoDesc")}
          </p>
        </div>
      </div>

      {/* Bottom-most */}
      <div className="bg-[#131921] text-center text-xs text-gray-400 py-4">
        © 2025 Amazon Clone — {t("footer.builtWith")}
      </div>
    </footer>
  );
}
