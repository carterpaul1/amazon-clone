import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import amazonLogo from "../assets/amazon-logo.png";
import { categories, getCategoryLabel } from "../data/products";

export default function Header({
  cartCount,
  category,
  deliveryLocation,
  onCategoryChange,
  onLogoClick,
  onOpenCart,
  onOpenLocation,
  onOpenOrders,
  onOpenSignIn,
  onSearchChange,
  searchQuery,
  user,
}) {
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full bg-[#131921] text-white">
      <div className="flex flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center">
        <button
          type="button"
          onClick={onLogoClick}
          className="mr-2 flex w-fit items-center"
          aria-label="Go to homepage"
        >
          <img src={amazonLogo} alt="Amazon logo" className="w-28 object-contain" />
        </button>

        <button
          type="button"
          onClick={onOpenLocation}
          className="hidden min-w-36 flex-col text-left xl:flex"
        >
          <span className="text-xs text-gray-300">{t("header.deliveringTo")}</span>
          <span className="text-sm font-bold">
            {deliveryLocation.city} {deliveryLocation.zipCode}
          </span>
          <span className="text-xs text-yellow-400">{t("header.updateLocation")}</span>
        </button>

        <form
          className="flex min-w-0 flex-1 items-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <select
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="h-11 w-24 rounded-l-md border-r border-gray-300 bg-gray-100 px-2 text-sm text-black sm:w-36"
            aria-label="Search category"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {getCategoryLabel(t, item)}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            className="h-11 min-w-0 flex-1 p-3 text-black outline-none"
            placeholder={t("header.searchAmazon")}
          />
          <button
            type="submit"
            className="flex h-11 items-center justify-center rounded-r-md bg-[#febd69] px-4 hover:bg-[#f3a847]"
            aria-label="Search"
          >
            <FaSearch className="text-black" />
          </button>
        </form>

        <div className="flex flex-wrap items-center gap-4 text-sm lg:ml-4 lg:flex-nowrap">
          <select
            onChange={(event) => i18n.changeLanguage(event.target.value)}
            className="rounded border border-gray-500 bg-[#131921] px-2 py-1 text-sm text-white"
            aria-label="Language"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>

          <button
            type="button"
            onClick={onOpenSignIn}
            className="hidden text-left md:block"
          >
            <p className="text-xs">
              {user ? t("header.helloUser", { name: user.name }) : t("header.helloSignIn")}
            </p>
            <p className="font-bold">{t("header.accountLists")}</p>
          </button>

          <button
            type="button"
            onClick={onOpenOrders}
            className="hidden text-left md:block"
          >
            <p className="text-xs">{t("header.returns")}</p>
            <p className="font-bold">{t("header.orders")}</p>
          </button>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center"
            aria-label={t("cart.items", { count: cartCount })}
          >
            <FaShoppingCart className="text-2xl" />
            <span className="absolute -top-3 left-4 rounded-full bg-yellow-400 px-1.5 text-xs font-bold text-black">
              {cartCount}
            </span>
            <span className="ml-2 font-bold">{t("header.cart")}</span>
          </button>
        </div>
      </div>

      <nav className="flex w-full items-center gap-5 overflow-x-auto bg-[#232f3e] px-4 py-2 text-sm">
        <button type="button" className="flex shrink-0 items-center font-bold">
          <FaBars className="mr-1" /> {t("header.all")}
        </button>
        {[
          t("header.bestSellers"),
          t("header.amazonBasics"),
          t("header.newReleases"),
          t("header.groceries"),
          t("header.prime"),
          t("header.todaysDeals"),
          t("header.registry"),
          t("header.customerService"),
          t("header.giftCards"),
          t("header.smartHome"),
          t("header.music"),
        ].map((item) => (
          <button key={item} type="button" className="shrink-0 hover:underline">
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
