// src/data/items.ts

import type { Item } from "./item.ts";

import saladImg from "../assets/items/salad.jpeg";
import soupImg from "../assets/items/soup.jpg";
import charcuterieImg from "../assets/items/charcuterie.png";

export const starters: Item[] = [
  // Starters
  {
    name: "Salad",
    path: saladImg,
    description: "A salad.",
    price: 10,
  },
  {
    name: "Soup",
    path: soupImg,
    description: "A soup.",
    price: 5,
  },
  {
    name: "Charcuterie",
    path: charcuterieImg,
    description: "A plate of meat.",
    price: 20,
  },
];
