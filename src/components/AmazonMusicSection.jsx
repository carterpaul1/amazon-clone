import { FaHeadphones, FaPlay, FaShieldAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AmazonMusicSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#111827] px-4 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#ffd814]">
            {t("musicStrip.eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold">{t("musicStrip.title")}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
            {t("musicStrip.copy")}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              icon: <FaHeadphones className="text-2xl text-[#ffd814]" />,
              title: t("musicStrip.musicTitle"),
              copy: t("musicStrip.musicCopy"),
            },
            {
              icon: <FaPlay className="text-2xl text-[#ffd814]" />,
              title: t("musicStrip.playlistTitle"),
              copy: t("musicStrip.playlistCopy"),
            },
            {
              icon: <FaShieldAlt className="text-2xl text-[#ffd814]" />,
              title: t("musicStrip.checkoutTitle"),
              copy: t("musicStrip.checkoutCopy"),
            },
          ].map(({ icon, title, copy }) => (
            <div key={title} className="rounded-sm border border-white/10 bg-white/5 p-4">
              {icon}
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-300">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
