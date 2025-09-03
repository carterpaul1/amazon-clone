export default function GiftCardSection() {
  const giftCards = [
    {
      id: 1,
      title: "Amazon Gift Card - $25",
      price: "$25.00",
      image: "https://images-na.ssl-images-amazon.com/images/I/71f3c3ZzP-L._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Amazon Gift Card - $50",
      price: "$50.00",
      image: "https://images-na.ssl-images-amazon.com/images/I/71QzU7z7zXL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      title: "Amazon eGift Card - Birthday",
      price: "$20.00",
      image: "https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg"
    },
    {
      id: 4,
      title: "Amazon eGift Card - Thank You",
      price: "$15.00",
      image: "https://images-na.ssl-images-amazon.com/images/I/81z7ZzZzZzL._AC_SL1500_.jpg"
    }
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">🎁 Shop Gift Cards Under $50</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {giftCards.map((card) => (
            <div key={card.id} className="bg-gray-100 p-4 rounded hover:shadow-lg transition">
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-sm font-medium">{card.title}</h3>
              <p className="text-blue-600 font-semibold mt-1">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}