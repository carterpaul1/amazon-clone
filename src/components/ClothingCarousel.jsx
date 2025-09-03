import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClothingCarousel() {
  const items = [/* array of clothing items */];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <section className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Best Sellers in Clothing, Shoes & Jewelry</h2>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <div key={idx} className="px-2">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <p className="text-sm mt-2">{item.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}