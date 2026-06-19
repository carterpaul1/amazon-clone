import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLock, FaUserCircle } from "react-icons/fa";

export default function SignInPage({ onBack, onSignIn, user }) {
  const { t } = useTranslation();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  function handleSubmit(event) {
    event.preventDefault();
    onSignIn({
      name: name.trim() || "Demo Shopper",
      email: email.trim() || "demo@commercehub.test",
    });
  }

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_420px]">
        <div className="bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c45500]">
            {t("signIn.eyebrow")}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-900">
            {t("signIn.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-gray-700">{t("signIn.copy")}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              t("signIn.featureOrders"),
              t("signIn.featureAddress"),
              t("signIn.featureSafe"),
            ].map((feature) => (
              <div key={feature} className="rounded-sm bg-gray-50 p-4 text-sm">
                <FaLock className="text-[#007185]" />
                <p className="mt-3 font-semibold text-gray-900">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl text-[#232f3e]" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {t("signIn.formTitle")}
              </h2>
              <p className="text-sm text-gray-600">{t("signIn.formCopy")}</p>
            </div>
          </div>

          <label className="mt-6 block text-sm font-semibold text-gray-700">
            {t("signIn.name")}
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-sm border border-gray-300 px-3 py-2"
              placeholder="Demo Shopper"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-gray-700">
            {t("signIn.email")}
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded-sm border border-gray-300 px-3 py-2"
              placeholder="demo@commercehub.test"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
          >
            {user ? t("signIn.update") : t("signIn.submit")}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="mt-3 w-full rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            {t("signIn.back")}
          </button>
        </form>
      </section>
    </main>
  );
}
