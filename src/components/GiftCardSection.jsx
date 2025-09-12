import amazon25 from "../assets/Amazon-US-$25.png";
import amazon50 from "../assets/AMAZON-$50.png";
import amazonBirthday from "../assets/E-Gift-Birthday.png";
import amazonThankYou from "../assets/EGift-Thanks.png";

export default function GiftCardSection() {
  const giftCards = [
    {
      id: 1,
      title: "Amazon US Gift Card - $25",
      price: "$25.00",
      image: amazon25,
    },
    {
      id: 2,
      title: "Amazon Gift Card - $50",
      price: "$50.00",
      image: amazon50,
    },
    {
      id: 3,
      title: "Amazon eGift Card - Birthday",
      price: "$20.00",
      image: amazonBirthday,
    },
    {
      id: 4,
      title: "Amazon eGift Card - Thank You",
      price: "$15.00",
      image: amazonThankYou,
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">
          🎁 Shop Gift Cards Under $50
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {giftCards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 p-4 rounded hover:shadow-lg transition"
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium">{card.title}</h3>
              <p className="text-blue-600 font-semibold mt-1">{card.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}