import echoDot from "../assets/2022-Echo-Dot-5th-Ge.png";
import fireTv from "../assets/Amazon-Fire-TV-Stick.png";
import kindle from "../assets/Kindle-Paperwhite-16.png";
import ringDoorbell from "../assets/Ring-Battery-Doorbell.png";
import bounty from "../assets/Bounty-Select-A-Size.png";
import dove from "../assets/Dove-Bodywash.png";
import colgate from "../assets/Colgate-Cavity-Protection.png";
import tide from "../assets/Tide-Power-Pods.png";
import amazon25 from "../assets/Amazon-US-$25.png";
import amazon50 from "../assets/AMAZON-$50.png";
import amazonBirthday from "../assets/E-Gift-Birthday.png";
import amazonThankYou from "../assets/EGift-Thanks.png";

export const products = [
  {
    id: "echo-dot-5",
    title: "Echo Dot (5th Gen)",
    category: "Electronics",
    section: "Trending",
    price: 49.99,
    rating: 4.7,
    reviews: 18642,
    badge: "Best seller",
    delivery: "Arrives tomorrow",
    image: echoDot,
    description:
      "Compact smart speaker with Alexa, crisp vocals, and smart-home control for everyday rooms.",
  },
  {
    id: "fire-tv-stick-4k",
    title: "Fire TV Stick 4K",
    category: "Electronics",
    section: "Trending",
    price: 39.99,
    rating: 4.6,
    reviews: 22810,
    badge: "Limited deal",
    delivery: "Arrives Saturday",
    image: fireTv,
    description:
      "Stream movies, shows, and live TV in 4K with a simple remote and app shortcuts.",
  },
  {
    id: "kindle-paperwhite-16",
    title: "Kindle Paperwhite 16 GB",
    category: "Books",
    section: "Trending",
    price: 129.99,
    rating: 4.8,
    reviews: 11329,
    badge: "Reader favorite",
    delivery: "Free delivery",
    image: kindle,
    description:
      "Water-resistant e-reader with a glare-free display, adjustable warm light, and weeks of battery life.",
  },
  {
    id: "ring-battery-doorbell",
    title: "Ring Battery Doorbell",
    category: "Smart Home",
    section: "Trending",
    price: 99.99,
    rating: 4.5,
    reviews: 7614,
    badge: "Smart home pick",
    delivery: "Arrives tomorrow",
    image: ringDoorbell,
    description:
      "Battery-powered video doorbell with motion alerts, two-way talk, and easy installation.",
  },
  {
    id: "bounty-select-a-size",
    title: "Bounty Select-A-Size Paper Towels",
    category: "Household",
    section: "Essentials",
    price: 15.99,
    rating: 4.8,
    reviews: 18408,
    badge: "Subscribe & save",
    delivery: "Arrives tomorrow",
    image: bounty,
    description:
      "Absorbent household paper towels with convenient select-a-size sheets for everyday messes.",
  },
  {
    id: "dove-body-wash",
    title: "Dove Body Wash",
    category: "Household",
    section: "Essentials",
    price: 9.49,
    rating: 4.6,
    reviews: 6532,
    badge: "Top rated",
    delivery: "Free delivery",
    image: dove,
    description:
      "Moisturizing body wash made for daily skin care with a gentle, refreshing formula.",
  },
  {
    id: "colgate-cavity-protection",
    title: "Colgate Cavity Protection Toothpaste Pack",
    category: "Household",
    section: "Essentials",
    price: 12.99,
    rating: 4.7,
    reviews: 8247,
    badge: "Everyday value",
    delivery: "Arrives Saturday",
    image: colgate,
    description:
      "Family-size toothpaste pack with fluoride protection for everyday oral care.",
  },
  {
    id: "tide-power-pods",
    title: "Tide Power Pods Laundry Detergent",
    category: "Household",
    section: "Essentials",
    price: 19.99,
    rating: 4.7,
    reviews: 10118,
    badge: "Customer favorite",
    delivery: "Arrives tomorrow",
    image: tide,
    description:
      "Concentrated laundry pods designed for bright, clean clothes and large household loads.",
  },
  {
    id: "amazon-gift-card-25",
    title: "Amazon US Gift Card - $25",
    category: "Gift Cards",
    section: "Gift Cards",
    price: 25,
    rating: 4.9,
    reviews: 36211,
    badge: "Instant delivery",
    delivery: "Email delivery",
    image: amazon25,
    description:
      "Digital gift card for quick gifting, birthdays, thank-yous, and everyday surprises.",
  },
  {
    id: "amazon-gift-card-50",
    title: "Amazon Gift Card - $50",
    category: "Gift Cards",
    section: "Gift Cards",
    price: 50,
    rating: 4.9,
    reviews: 34109,
    badge: "Most gifted",
    delivery: "Email delivery",
    image: amazon50,
    description:
      "Flexible digital gift card with a polished gift-ready design and fast delivery.",
  },
  {
    id: "birthday-egift-card",
    title: "Amazon eGift Card - Birthday",
    category: "Gift Cards",
    section: "Gift Cards",
    price: 20,
    rating: 4.8,
    reviews: 9720,
    badge: "Birthday pick",
    delivery: "Email delivery",
    image: amazonBirthday,
    description:
      "Birthday-themed eGift card that can be delivered instantly with a personal message.",
  },
  {
    id: "thank-you-egift-card",
    title: "Amazon eGift Card - Thank You",
    category: "Gift Cards",
    section: "Gift Cards",
    price: 15,
    rating: 4.8,
    reviews: 8051,
    badge: "Thoughtful gift",
    delivery: "Email delivery",
    image: amazonThankYou,
    description:
      "Simple thank-you eGift card for appreciation, recognition, or small celebrations.",
  },
];

export const categories = ["All", ...new Set(products.map((product) => product.category))];

const categoryKeys = {
  All: "all",
  Electronics: "electronics",
  Books: "books",
  "Smart Home": "smartHome",
  Household: "household",
  "Gift Cards": "giftCards",
};

export function getCategoryLabel(t, category) {
  return t(`catalog.categories.${categoryKeys[category] || "all"}`, {
    defaultValue: category,
  });
}

export function getProductCopy(product, t) {
  return {
    title: t(`catalog.products.${product.id}.title`, {
      defaultValue: product.title,
    }),
    badge: t(`catalog.products.${product.id}.badge`, {
      defaultValue: product.badge,
    }),
    category: getCategoryLabel(t, product.category),
    delivery: t(`catalog.products.${product.id}.delivery`, {
      defaultValue: product.delivery,
    }),
    description: t(`catalog.products.${product.id}.description`, {
      defaultValue: product.description,
    }),
  };
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
