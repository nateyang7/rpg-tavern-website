// src/data/items.ts

import type { Item } from "./item.ts";

import saladImg from "../assets/items/salad.jpg";
import soupImg from "../assets/items/soup.jpg";
import charcuterieImg from "../assets/items/charcuterie.jpg";

import steakImg from "../assets/items/steak.jpg";
import roastChickenImg from "../assets/items/roast_chicken.jpg";
import fishSteakImg from "../assets/items/fish_steak.jpg";

import cakeImg from "../assets/items/cake.jpg";
import pieImg from "../assets/items/pie.jpg";
import cookieImg from "../assets/items/cookie.jpg";

import beerImg from "../assets/items/beer.jpg";
import teaImg from "../assets/items/tea.jpg";
import coffeeImg from "../assets/items/coffee.jpg";

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
  {
    name: "Roast chicken",
    path: roastChickenImg,
    description: "A roast chicken taken from the farm.",
    price: 55,
  },
  {
    name: "Fish steak",
    path: fishSteakImg,
    description: "Fish steak taken from the sea.",
    price: 40,
  },
];

export const desserts: Item[] = [
  {
    name: "Cake",
    path: cakeImg,
    description: "A chocolate cake.",
    price: 70,
  },
  {
    name: "Pie",
    path: pieImg,
    description: "A delicious pie.",
    price: 65,
  },
  {
    name: "Cookie",
    path: cookieImg,
    description: "Cooked cookie.",
    price: 20,
  },
];

export const drinks: Item[] = [
  {
    name: "Beer",
    path: beerImg,
    description: "A refreshing beer.",
    price: 20,
  },
  {
    name: "Tea",
    path: teaImg,
    description: "A tea from the east.",
    price: 10,
  },
  {
    name: "Coffee",
    path: coffeeImg,
    description: "A coffee to wake you up.",
    price: 2,
  },
];
