export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  rating: number
  prepTime: number
  dietary: string[]
  image: string
  featured?: boolean
}

export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  date: string
  avatar: string
}

export interface Feature {
  id: string
  title: string
  subtitle: string
  image: string
  href: string
}

export const categories = [
  "All",
  "Starters",
  "Steaks",
  "Chops",
  "Seafood",
  "Sides",
  "Desserts",
]

// Verified Unsplash photo IDs only
const IMAGES = {
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  restaurantWide: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
  steakPlate: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
  meatGrill: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
  chocolate: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
  chef: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&w=800&q=80",
  dining: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
  salad: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
  salmon: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
  sushi: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
  vegetables: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
  dessertCake: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
  soup: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
  breakfast: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
  pancakes: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
  shrimp: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
  foodSpread: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80",
}

export const features: Feature[] = [
  {
    id: "1",
    title: "Prime Rib Sundays",
    subtitle: "Every Sunday, 4pm – 9pm",
    image: IMAGES.meatGrill,
    href: "/menu",
  },
  {
    id: "2",
    title: "Wine & Dine Wednesdays",
    subtitle: "Half-price bottles of wine",
    image: IMAGES.wine,
    href: "/menu",
  },
  {
    id: "3",
    title: "Chef's Table Experience",
    subtitle: "An intimate 7-course journey",
    image: IMAGES.restaurant,
    href: "/reserve",
  },
  {
    id: "4",
    title: "Lobster Season",
    subtitle: "Live Maine lobster specials",
    image: IMAGES.shrimp,
    href: "/menu",
  },
  {
    id: "5",
    title: "Private Events",
    subtitle: "Host your celebration with us",
    image: IMAGES.dining,
    href: "/contact",
  },
]

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Jumbo Shrimp Cocktail",
    description: "Five jumbo shrimp served chilled with our signature cocktail sauce and lemon",
    price: 24,
    category: "Starters",
    rating: 4.8,
    prepTime: 10,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.shrimp,
    featured: true,
  },
  {
    id: "2",
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata with vine-ripened tomatoes, basil oil, and aged balsamic",
    price: 19,
    category: "Starters",
    rating: 4.9,
    prepTime: 12,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: IMAGES.salad,
    featured: true,
  },
  {
    id: "3",
    name: "Wagyu Beef Carpaccio",
    description: "Hand-cut A5 wagyu with shallots, capers, truffle oil, and parmesan shavings",
    price: 28,
    category: "Starters",
    rating: 4.7,
    prepTime: 15,
    dietary: ["Gluten-Free"],
    image: IMAGES.meatGrill,
  },
  {
    id: "4",
    name: "Filet Mignon",
    description: "Center-cut, 8 oz. The most tender cut, broiled to perfection",
    price: 52,
    category: "Steaks",
    rating: 4.9,
    prepTime: 28,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.steakPlate,
    featured: true,
  },
  {
    id: "5",
    name: "New York Strip",
    description: "14 oz of bold flavor, well-marbled and broiled at 1500 degrees",
    price: 58,
    category: "Steaks",
    rating: 4.8,
    prepTime: 30,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.burger,
  },
  {
    id: "6",
    name: "Bone-In Ribeye",
    description: "22 oz dry-aged prime ribeye with rich marbling and intense flavor",
    price: 68,
    category: "Steaks",
    rating: 4.9,
    prepTime: 32,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.meatGrill,
    featured: true,
  },
  {
    id: "7",
    name: "Double-Cut Lamb Chops",
    description: "Four thick-cut Colorado lamb chops with rosemary jus and mint chimichurri",
    price: 54,
    category: "Chops",
    rating: 4.8,
    prepTime: 28,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.steakPlate,
  },
  {
    id: "8",
    name: "Veal Chop",
    description: "16 oz milk-fed veal chop, char-grilled and finished with sage butter",
    price: 56,
    category: "Chops",
    rating: 4.7,
    prepTime: 30,
    dietary: ["Gluten-Free"],
    image: IMAGES.meatGrill,
  },
  {
    id: "9",
    name: "Whole Lobster",
    description: "2.5 lb live Maine lobster steamed and served with drawn butter",
    price: 72,
    category: "Seafood",
    rating: 4.9,
    prepTime: 25,
    dietary: ["Gluten-Free", "Dairy-Free"],
    image: IMAGES.salmon,
    featured: true,
  },
  {
    id: "10",
    name: "Pan-Seared Scallops",
    description: "Jumbo diver scallops with cauliflower puree, crispy pancetta, and brown butter",
    price: 44,
    category: "Seafood",
    rating: 4.7,
    prepTime: 22,
    dietary: ["Gluten-Free"],
    image: IMAGES.sushi,
  },
  {
    id: "11",
    name: "Creamed Spinach",
    description: "Fresh spinach slow-simmered in a rich parmesan cream sauce",
    price: 14,
    category: "Sides",
    rating: 4.6,
    prepTime: 15,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: IMAGES.vegetables,
  },
  {
    id: "12",
    name: "Truffle Mashed Potatoes",
    description: "Yukon golds whipped with black truffle butter and roasted garlic",
    price: 16,
    category: "Sides",
    rating: 4.8,
    prepTime: 15,
    dietary: ["Vegetarian", "Gluten-Free"],
    image: IMAGES.soup,
  },
  {
    id: "13",
    name: "Key Lime Pie",
    description: "Tangy key lime custard in a graham cracker crust with toasted meringue",
    price: 14,
    category: "Desserts",
    rating: 4.7,
    prepTime: 10,
    dietary: ["Vegetarian"],
    image: IMAGES.breakfast,
  },
  {
    id: "14",
    name: "Chocolate Lava Cake",
    description: "Warm molten center with salted caramel ice cream and hazelnut praline",
    price: 16,
    category: "Desserts",
    rating: 4.9,
    prepTime: 18,
    dietary: ["Vegetarian"],
    image: IMAGES.chocolate,
    featured: true,
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    rating: 5,
    comment: "Absolutely stunning experience. The ribeye was cooked to perfection and the service was impeccable. Will definitely be returning!",
    date: "2026-05-15",
    avatar: "SM",
  },
  {
    id: "2",
    name: "James Chen",
    rating: 5,
    comment: "Best steakhouse in the city. The bone-in ribeye is a must-try. The ambiance is perfect for business dinners and celebrations alike.",
    date: "2026-05-10",
    avatar: "JC",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    rating: 4,
    comment: "Beautiful presentation and flavors. The chocolate lava cake was heavenly. Slightly long wait times but worth it.",
    date: "2026-04-28",
    avatar: "ER",
  },
  {
    id: "4",
    name: "David Park",
    rating: 5,
    comment: "The sommelier's wine pairing elevated the entire meal. Every course was a revelation. A true gem in the dining scene.",
    date: "2026-04-20",
    avatar: "DP",
  },
  {
    id: "5",
    name: "Olivia Thompson",
    rating: 4,
    comment: "Great vegetarian options which is rare for upscale steakhouses. The truffle mash was rich and earthy.",
    date: "2026-04-12",
    avatar: "OT",
  },
  {
    id: "6",
    name: "Michael Brown",
    rating: 5,
    comment: "Took my parents here for their anniversary and they were blown away. The staff made it truly special.",
    date: "2026-03-30",
    avatar: "MB",
  },
]

export const averageRating =
  reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

export const heroImage = IMAGES.restaurantWide
export const chefImage = IMAGES.chef
export const diningRoomImage = IMAGES.restaurant
