import bounty from "../assets/Bounty-Select-A-Size.png";
import dove from "../assets/Dove-Bodywash.png";
import colgate from "../assets/Colgate-Cavity-Protection.png";
import tide from "../assets/Tide-Power-Pods.png";

export default function EssentialsSection() {
  const essentials = [
    {
      id: 1,
      title: "Bounty Select A Size Paper Towels",
      price: "$15.99",
      image: bounty,
    },
    {
      id: 2,
      title: "Dove Body Wash",
      price: "$9.49",
      image: dove,
    },
    {
      id: 3,
      title: "Colgate Cavity Protection Toothpaste Pack",
      price: "$12.99",
      image: colgate,
    },
    {
      id: 4,
      title: "Tide Power Pods Laundry Detergent",
      price: "$19.99",
      image: tide,
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">
          🧼 Discover Everyday Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {essentials.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 p-4 rounded hover:shadow-lg transition"
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="text-blue-600 font-semibold mt-1">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}