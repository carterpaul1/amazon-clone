import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import amazonLogo from "../assets/amazon-logo.png"; 
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-[#131921] text-white w-full">
      {/* Top Nav */}
      <div className="flex items-center px-4 py-2 w-full">
        {/* Logo */}
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className="w-28 object-contain cursor-pointer mr-4"
        />

        {/* Location */}
        <div className="hidden md:flex flex-col mr-4 cursor-pointer">
          <span className="text-xs text-gray-300">{t("header.deliveringTo")}</span>
          <span className="font-bold text-sm">{t("header.location")}</span>
          <span className="text-xs text-yellow-400">{t("header.updateLocation")}</span>
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow items-center max-w-3xl">
          <select className="h-10 px-2 bg-gray-100 text-black rounded-l-md border-r">
            <option>{t("header.all")}</option>
            <option>{t("header.electronics")}</option>
            <option>{t("header.books")}</option>
            <option>{t("header.clothing")}</option>
          </select>
          <input
            type="text"
            className="flex-grow h-10 p-2 outline-none text-black"
            placeholder={t("header.searchAmazon")}
          />
          <button className="bg-[#febd69] h-10 px-4 rounded-r-md">
            <FaSearch className="text-black" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6 ml-6 text-sm">
          {/* Language */}
          <div className="flex items-center cursor-pointer">
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-[#131921] text-white text-sm border border-gray-500 rounded px-2 py-1"
            >
              <option value="en">🌐 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>

          {/* Sign in */}
          <div className="cursor-pointer">
            <p className="text-xs">{t("header.helloSignIn")}</p>
            <p className="font-bold">{t("header.accountLists")}</p>
          </div>

          {/* Returns */}
          <div className="cursor-pointer">
            <p className="text-xs">{t("header.returns")}</p>
            <p className="font-bold">{t("header.orders")}</p>
          </div>

          {/* Cart */}
          <div className="relative flex items-center cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-2 left-4 bg-yellow-400 text-black rounded-full px-1 text-xs font-bold">
              0
            </span>
            <p className="font-bold ml-2">{t("header.cart")}</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="bg-[#232f3e] flex items-center space-x-6 px-4 py-2 text-sm w-full">
        <div className="flex items-center cursor-pointer font-bold">
          <FaBars className="mr-1" /> {t("header.all")}
        </div>
        <p className="cursor-pointer">{t("header.amazonHaul")}</p>
        <p className="cursor-pointer">{t("header.medicalCare")}</p>
        <p className="cursor-pointer">{t("header.luxuryStores")}</p>
        <p className="cursor-pointer">{t("header.bestSellers")}</p>
        <p className="cursor-pointer">{t("header.amazonBasics")}</p>
        <p className="cursor-pointer">{t("header.newReleases")}</p>
        <p className="cursor-pointer">{t("header.groceries")}</p>
        <p className="cursor-pointer">{t("header.prime")}</p>
        <p className="cursor-pointer">{t("header.todaysDeals")}</p>
        <p className="cursor-pointer">{t("header.registry")}</p>
        <p className="cursor-pointer">{t("header.customerService")}</p>
        <p className="cursor-pointer">{t("header.giftCards")}</p>
        <p className="cursor-pointer">{t("header.smartHome")}</p>
        <p className="cursor-pointer">{t("header.music")}</p>
        <p className="cursor-pointer">{t("header.sportsOutdoors")}</p>
        <p className="cursor-pointer">{t("header.pharmacy")}</p>
      </div>
    </header>
  );
}

