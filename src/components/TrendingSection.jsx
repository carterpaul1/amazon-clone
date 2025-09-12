import echoDot from "../assets/2022-Echo-Dot-5th-Ge.png";
import fireTv from "../assets/Amazon-Fire-TV-Stick.png";
import kindle from "../assets/Kindle-Paperwhite-16.png";
import ringDoorbell from "../assets/Ring-Battery-Doorbell.png";

function ProductImage({ src, alt }) {
  return (
    <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

export default function TrendingSection() {
  const trendingItems = [
    {
      id: 1,
      title: "Echo Dot (5th Gen)",
      price: "$49.99",
      image: echoDot,
    },
    {
      id: 2,
      title: "Fire TV Stick 4K",
      price: "$39.99",
      image: fireTv,
    },
    {
      id: 3,
      title: "Kindle Paperwhite",
      price: "$129.99",
      image: kindle,
    },
    {
      id: 4,
      title: "Ring Video Doorbell",
      price: "$99.99",
      image: ringDoorbell,
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">🔥 Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-4 rounded hover:shadow-lg transition"
            >
              <ProductImage src={item.image} alt={item.title} />
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}