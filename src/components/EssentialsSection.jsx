export default function EssentialsSection() {
  const essentials = [
    {
      id: 1,
      title: "Bounty Paper Towels",
      price: "$15.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/81zLwAwZtXL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Dove Body Wash",
      price: "$9.49",
      image: "https://images-na.ssl-images-amazon.com/images/I/71gVZ5XKJmL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      title: "Colgate Toothpaste Pack",
      price: "$12.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/71uZQkRZKXL._AC_SL1500_.jpg"
    },
    {
      id: 4,
      title: "Tide Pods Laundry Detergent",
      price: "$19.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/81xWZ5Z2JjL._AC_SL1500_.jpg"
    }
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">🧼 Discover Everyday Essentials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {essentials.map((item) => (
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