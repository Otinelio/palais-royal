export interface RestaurantInfo {
  name: string;
  tagline: string;
  whatsapp: string;
  address: string;
  hours: string;
  instagram: string;
  currency: string;
  tiktok?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  available: boolean;
  popular: boolean;
  image: string;
}

export interface RestaurantData {
  restaurant: RestaurantInfo;
  categories: string[];
  items: MenuItem[];
}

export const DEFAULT_DATA: RestaurantData = {
  restaurant: {
    name: "Palais Royal des Saveurs",
    tagline: "Le goût qui fait la différence",
    whatsapp: "+22800000000",
    address: "Face au Collège Saint Michel, Djifa Kpota, Lomé",
    hours: "10h00 – 00h00",
    instagram: "@palaisroyaldessaveurs",
    currency: "FCFA"
  },
  categories: [
    "Entrées", "Plats Africains", "Plats Européens",
    "Pizzas & Grillades", "Desserts", "Boissons"
  ],
  items: [
    { id: 1, name: "Salade du Palais", category: "Entrées", price: 3500, description: "Salade fraîche, tomates, avocat, vinaigrette maison", available: true, popular: false, image: "" },
    { id: 2, name: "Fufu & Gboma Dessi", category: "Plats Africains", price: 5500, description: "Fufu de manioc, sauce épinards au poisson fumé", available: true, popular: true, image: "https://images.unsplash.com/photo-1558237748-0c681287c881?auto=format&fit=crop&q=80&w=800" }, // Placeholder for 'west african fufu soup stew elegant presentation close up' (approximate)
    { id: 3, name: "Yassa Poulet", category: "Plats Africains", price: 6000, description: "Poulet mariné aux oignons et citron, riz parfumé", available: true, popular: true, image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "Grillades Royales", category: "Pizzas & Grillades", price: 8500, description: "Assortiment de viandes grillées, sauce pimentée, plantains", available: true, popular: true, image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Pizza Reine", category: "Pizzas & Grillades", price: 7000, description: "Jambon, champignons, mozzarella, sauce tomate maison", available: true, popular: false, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Poulet Bicyclette Grillé", category: "Plats Africains", price: 7500, description: "Poulet local grillé, épices du terroir, sauce arachide", available: true, popular: true, image: "" },
    { id: 7, name: "Tilapia Braisé", category: "Plats Africains", price: 6500, description: "Tilapia du lac, marinade citron-piment, attiéké maison", available: true, popular: false, image: "" },
    { id: 8, name: "Entrecôte Palais", category: "Plats Européens", price: 12000, description: "Entrecôte grillée, sauce poivre, frites dorées", available: true, popular: false, image: "" },
    { id: 9, name: "Jus de Bissap", category: "Boissons", price: 1500, description: "Hibiscus frais, sucré léger, servi glacé", available: true, popular: true, image: "" },
    { id: 10, name: "Bière locale", category: "Boissons", price: 1500, description: "Bière pression ou en bouteille", available: true, popular: false, image: "" }
  ]
};

export function getRestaurantData(): RestaurantData {
  const stored = localStorage.getItem("restaurantData");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing stored restaurant data", e);
    }
  }
  return DEFAULT_DATA;
}

export function saveRestaurantData(data: RestaurantData) {
  localStorage.setItem("restaurantData", JSON.stringify(data));
}
