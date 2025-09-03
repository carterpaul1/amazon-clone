export default function AmazonMusicSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">🎧 Amazon Music</h2>
          <p className="text-lg mb-6">
            Stream millions of songs ad-free. Discover new releases, curated playlists, and exclusive content.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
            Explore Amazon Music
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71zY5ZzZzZL._AC_SL1500_.jpg"
            alt="Amazon Music Promo"
            className="w-72 h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}