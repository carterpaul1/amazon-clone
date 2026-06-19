import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export default function LocationModal({ currentLocation, onClose, onSave }) {
  const { t } = useTranslation();
  const [city, setCity] = useState(currentLocation.city);
  const [zipCode, setZipCode] = useState(currentLocation.zipCode);

  function handleSubmit(event) {
    event.preventDefault();
    onSave({
      city: city.trim() || currentLocation.city,
      zipCode: zipCode.trim() || currentLocation.zipCode,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <section className="w-full max-w-md rounded-sm bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c45500]">
              {t("location.eyebrow")}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-gray-900">
              {t("location.title")}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
            aria-label={t("location.close")}
          >
            <FaTimes />
          </button>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-600">{t("location.copy")}</p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <label className="block text-sm font-semibold text-gray-700">
            {t("location.city")}
            <input
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="mt-1 w-full rounded-sm border border-gray-300 px-3 py-2"
              placeholder="Newport News"
            />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            {t("location.zip")}
            <input
              value={zipCode}
              onChange={(event) => setZipCode(event.target.value)}
              className="mt-1 w-full rounded-sm border border-gray-300 px-3 py-2"
              placeholder="23606"
            />
          </label>

          <div className="rounded-sm bg-gray-50 p-3 text-sm text-gray-700">
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <FaMapMarkerAlt className="text-[#007185]" />
              <span>{t("location.preview")}</span>
            </div>
            <p className="mt-1">
              {city || currentLocation.city} {zipCode || currentLocation.zipCode}
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#ffd814] px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-[#f7ca00]"
          >
            {t("location.save")}
          </button>
        </form>
      </section>
    </div>
  );
}
