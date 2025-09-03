import Slider from "react-slick";

export default function ComputersCarousel() {
  const products = [
    {
      id: 1,
      title: "Logitech MX Master 3 Mouse",
      price: "$99.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/61jNs4ZL0GL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Apple MacBook Air M2",
      price: "$1,099.00",
      image: "https://images-na.ssl-images-amazon.com/images/I/71vZypjNkPS._AC_SL1500_.jpg"
    },
    {
      id: 3,
      title: "Samsung 32\" 4K Monitor",
      price: "$379.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/81zK5e2U5-L._AC_SL1500_.jpg"
    },
    {
      id: 4,
      title: "WD 2TB External SSD",
      price: "$189.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/71kWymZLw-L._AC_SL1500_.jpg"
    },
    {
      id: 5,
      title: "Razer BlackWidow V3 Keyboard",
      price: "$129.99",
      image: "https://images-na.ssl-images-amazon.com/images/I/81ZzZzZzZzL._AC_SL1500_.jpg"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">💻 Best Sellers in Computers & Accessories</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-gray-100 p-4 rounded hover:shadow-lg transition h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 w-full object-contain mb-4"
                />
                <h3 className="text-sm font-medium">{product.title}</h3>
                <p className="text-blue-600 font-semibold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}