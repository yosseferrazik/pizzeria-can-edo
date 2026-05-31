import { Salad, Pizza, Utensils, CakeSlice, Wine, Beer, Martini, CupSoda, Coffee } from "lucide-react";
import type { ReactNode } from "react";

export const CATEGORIES = [
  { id: "entrantes", label: "Entrantes", icon: <Salad size={16} /> },
  { id: "pizzas", label: "Pizzas", icon: <Pizza size={16} /> },
  { id: "pastas", label: "Pastas", icon: <Utensils size={16} /> },
  { id: "postres", label: "Postres", icon: <CakeSlice size={16} /> },
  { id: "bebidas", label: "Bebidas", icon: <Wine size={16} /> },
];

export interface MenuItem {
  name: string;
  price: string;
  desc?: string;
  badge?: string;
}

export interface DrinkCategory {
  label: string;
  icon: ReactNode;
  items: [string, string][];
}

export const STARTERS: MenuItem[] = [
  { name: "Burrata + Focaccia", price: "14€", desc: "Rúcula, amarena macerada con vinagre balsámico de Módena y almendras laminadas" },
  { name: "Porquetta de Ariccia + Focaccia", price: "15€", desc: "Mostaza de manzana y rúcula" },
  { name: "Camembert + Focaccia", price: "11€", desc: "Mostaza de pera y nueces pecanas" },
  { name: "Steak Tartar + Focaccia", price: "16,5€", desc: "Pepinillo encurtido, salsa brava, mayonesa, alcaparras y albahaca" },
  { name: "Parmigiana de Berenjena + Focaccia", price: "12€", desc: "Salsa de tomate, mozzarella, parmesano y albahaca" },
  { name: "Albóndigas de carne + Focaccia", price: "13€", desc: "Salsa de tomate y parmesano" },
  { name: "Focaccia Romero", price: "2,5€", desc: "Crujiente y aromática" },
  { name: "Suppli", price: "3€", desc: "Con mayonesa casera" },
  { name: "Olive All'Ascalona", price: "5€", desc: "Con salsa cacio e pepe" },
  { name: "Patatas Fritas", price: "5€", desc: "Salsa a elección: brava, mayonesa o mostaza de manzana" },
];

export const SALADS_STR = `Ensalada de la Casa 10€ · mix 7 hojas, tomate, frutos rojos, frutos secos, zanahoria | Ensalada de Tomate 10€ · mix de tomates, cebolla, albahaca, aceite de arbequina`;

export const PIZZAS: MenuItem[] = [
  { name: "Margherita", price: "10€", desc: "Tomate San Marzano D.O.P, mozzarella, parmesano y albahaca", badge: "Clásica" },
  { name: "Diavola", price: "12€", desc: "Tomate San Marzano D.O.P., mozzarella, chorizo artesanal picante, piparras y orégano fresco", badge: "Picante" },
  { name: "Marinara Can Edo", price: "16,5€", desc: "Tomates cherrys locales asados, ajo tierno, stracciatella de burrata, alcaparra frita, anchoas del cantábrico y polvo de aceitunas", badge: "Casa" },
  { name: "4 Quesos", price: "15,5€", desc: "Mozzarella, queso de cabra curado, tou de tilleur y gamoneo", badge: "Cremosa" },
  { name: "Escalivada Vegana", price: "14,5€", desc: "Crema de calabacín, verduras grilladas, queso vegano y nueces pecana", badge: "Vegana" },
  { name: "Piña", price: "17€", desc: "Mozzarella, gorgonzola, jamón dulce artesanal y piña caramelizada al ron", badge: "Gourmet" },
  { name: "Calzone Trufado", price: "18€", desc: "Calzone abierto con stracciatella trufada y mortadella de jabalí", badge: "Premium" },
  { name: "Calzone de Toda la Vida", price: "16€", desc: "Mozzarella, setas, jamón dulce artesanal, huevo frito", badge: "Tradición" },
  { name: "Carbonara", price: "16€", desc: "Mozzarella, guanciale y crema carbonara", badge: "Italiana" },
  { name: "Atún", price: "18€", desc: "Crema de cebolla, mozzarella, atún ahumado, tomates cherrys confitados, cebollas caramelizadas", badge: "Ahumado" },
  { name: "Espinaca", price: "18€", desc: "Crema de espinacas, salmón ahumado, pistacho, espinaca baby fresca, ricotta de cabra", badge: "Elegante" },
  { name: "Bufalina", price: "18€", desc: "Tomate cherry amarillo del piennolo, mozzarella de búfala, pesto de albahaca y chips de parmesano", badge: "Bufala" },
  { name: "Barbacoa", price: "14€", desc: "Cebolla estofada, bacon, stracciatella ahumada y salsa barbacoa artesanal", badge: "Ahumada" },
  { name: "Ibérica", price: "16,50€", desc: "Tomate San Marzano D.O.P, jamón ibérico, rúcula y pecorino moliterno", badge: "Premium" },
];

export const EXTRAS_PIZZA = [
  "Rúcula 3€", "Jamón Dulce 3€", "Jamón Ibérico 4,50€", "Parmesano 2€",
  "Setas 1,5€", "Trufa 6€", "Atún 5€", "Salmón 6€", "Huevo 1,5€", "Aceitunas 2€",
];

export const PASTAS: MenuItem[] = [
  { name: "Rigatoni Alla Carbonara", price: "13€", desc: "Crema de huevo, pecorino, guanciale y pimienta" },
  { name: "Pappardelle al Ragú de Jabalí", price: "16€", desc: "Con pecorino, al mirto" },
  { name: "Tagliatelle Alla Boloñesa", price: "14€", desc: "Ragú clásico con parmesano" },
  { name: "Spaghetti Aglio Olio y Peperoncino", price: "11€", desc: "Aceite, ajo y pimiento picante" },
  { name: "Spaghetti con Calabacín", price: "15€", desc: "Crema de calabacín, tomates cherrys confitados, stracciatella, menta y lima" },
  { name: "Tallarines Cacio e Pepe", price: "13€", desc: "Crema de pecorino, pimienta, limón rallado y menta" },
  { name: "Penne a la Putanesca", price: "15€", desc: "Ajo, alcaparras, anchoas, tomates cherrys y albahaca" },
];

export const DESSERTS: MenuItem[] = [
  { name: "Tiramisú", price: "5€", desc: "Nuestra receta casera tradicional" },
  { name: "Mil Hojas con Crema de Limón y Frutos Rojos", price: "5€", desc: "Fresca y crujiente" },
  { name: "Tarta de Queso con Chocolate Blanco y Frambuesas", price: "5€", desc: "Suave e irresistible" },
  { name: "Cannolo Al Pistacho", price: "5€", desc: "Crema de ricotta con pistacho y glasa de chocolate" },
];

export const DRINKS: DrinkCategory[] = [
  { label: "Cerveza", icon: <Beer size={20} />, items: [
    ["Caña Birra Moretti", "3€"], ["Caña Radler", "3€"], ["Jarra Birra Moretti", "4,5€"],
    ["Jarra Radler", "4,5€"], ["Amstel Oro Tostada", "3,2€"], ["Amstel Oro Tostada 0%", "3,2€"],
    ["Cruz Campo sin gluten", "2,8€"], ["1870", "3,2€"], ["Montseny IPA", "3,5€"], ["Ichnusa sin filtrar", "3,5€"],
  ]},
  { label: "Cócteles", icon: <Martini size={20} />, items: [
    ["Mojito", "7€"], ["Aperol Spritz", "5€"], ["Gin Tonic", "7€"], ["Chupito", "3€"],
  ]},
  { label: "Sin Alcohol", icon: <CupSoda size={20} />, items: [
    ["Coca Cola / Zero", "2,8€"], ["Fuzetea Limón", "2,8€"], ["Aquarius Limón", "2,8€"],
    ["Fanta Naranja", "2,8€"], ["Zumo de Manzana / Naranja", "2,5€"], ["Agua Can Edo", "2€"],
    ["Agua Embotellada", "2,5€"], ["Limonada de la Casa", "4€"], ["Tinto de Verano", "3€"],
    ["Zumo de Naranja Natural", "3,8€"],
  ]},
  { label: "Café", icon: <Coffee size={20} />, items: [
    ["Café", "1,4€"], ["Café con Leche", "1,8€"], ["Cortado", "1,6€"], ["Carajillo", "2,5€"], ["Infusión", "2,5€"],
  ]},
];

export const ASSETS = {
  logoWhite: "/images/logo-white.png",
  hero: "/images/tomatoes.jpg",
  pizza: "/images/pizza.png",
};
