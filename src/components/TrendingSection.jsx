export default function TrendingSection() {
  const trendingItems = [
    {
      id: 1,
      title: "Echo Dot (5th Gen)",
      price: "$49.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/61u48FEs3eL._AC_SL1000_.jpg"
    },
    {
      id: 2,
      title: "Fire TV Stick 4K",
      price: "$39.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/51Da2Z+FTBL._AC_SL1000_.jpg"
    },
    {
      id: 3,
      title: "Kindle Paperwhite",
      price: "$129.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/61f5fVYgGqL._AC_SL1000_.jpg"
    },
    {
      id: 4,
      title: "Ring Video Doorbell",
      price: "$99.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/71pWzhdJNwL._AC_SL1000_.jpg"
    }
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">🔥 Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingItems.map((item) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}