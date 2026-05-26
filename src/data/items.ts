// src/data/items.ts

import type { Item } from "./item.ts";

import saladImg from "../assets/items/salad.jpeg";
import soupImg from "../assets/items/soup.jpg";
import charcuterieImg from "../assets/items/charcuterie.png";

import steakImg from "../assets/items/steak.jpg";

import cakeImg from "../assets/items/cake.jpg";

import beerImg from "../assets/items/beer.jpg";

export const starters: Item[] = [
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

export const mainCourses: Item[] = [
  {
    name: "Steak with rice",
    path: steakImg,
    description: "A large steak served with rice.",
    price: 50,
  },
];

export const desserts: Item[] = [
  {
    name: "Cake",
    path: cakeImg,
    description: "A chocolate cake.",
    price: 70,
  },
];

export const drinks: Item[] = [
  {
    name: "Beer",
    path: beerImg,
    description: "A refreshing beer.",
    price: 20,
  },
];
