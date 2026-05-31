// src/data/items.ts
// TODO: Maybe 100 characters for brief description?

import type { Item } from "./item.ts";

import saladImg from "../assets/starters/salad.svg";
import soupImg from "../assets/items/soup.jpg";
import cheeseImg from "../assets/starters/cheese.svg";

import onigiriImg from "../assets/main_courses/onigiri.svg";
import chickenLegImg from "../assets/main_courses/chicken_leg.svg";
import roastedHamImg from "../assets/main_courses/roasted_ham.svg";

import cakeImg from "../assets/desserts/cake.svg";
import pieImg from "../assets/desserts/pie.svg";
import cookieImg from "../assets/desserts/cookie.svg";

import beerImg from "../assets/drinks/beer.svg";
import orangeJuiceImg from "../assets/drinks/orange_juice.svg";
import coffeeImg from "../assets/drinks/coffee.svg";

export const starters: Item[] = [
  {
    name: "Salad",
    path: saladImg,
    description: "Fresh mix of greens, vegetables, and light dressing.",
    price: 10,
  },
  {
    name: "Soup",
    path: soupImg,
    description: "A soup.",
    price: 5,
  },
  {
    name: "Cheese",
    path: cheeseImg,
    description: "Assorted cheeses served with fresh bread.",
    price: 20,
  },
];

export const mainCourses: Item[] = [
  {
    name: "Onigiri",
    path: onigiriImg,
    description: "Simple rice ball.",
    price: 50,
  },
  {
    name: "Chicken leg (3 pieces)",
    path: chickenLegImg,
    description: "Juicy roasted chicken leg.",
    price: 55,
  },
  {
    name: "Roasted ham",
    path: roastedHamImg,
    description: "Savory roasted ham.",
    price: 40,
  },
];

export const desserts: Item[] = [
  {
    name: "Strawberry Cake",
    path: cakeImg,
    description: "Sweet strawberry cake.",
    price: 70,
  },
  {
    name: "Pie",
    path: pieImg,
    description: "Sweet baked pastry with a flavorful filling.",
    price: 65,
  },
  {
    name: "Cookie",
    path: cookieImg,
    description: "Small, sweet baked treat.",
    price: 20,
  },
];

export const drinks: Item[] = [
  {
    name: "Beer",
    path: beerImg,
    description:
      "Fermented drink made from grains, with hops for bitternes and aroma.",
    price: 20,
  },
  {
    name: "Orange Juice",
    path: orangeJuiceImg,
    description: "Fresh citrus drink, sweet and tangy.",
    price: 10,
  },
  {
    name: "Coffee",
    path: coffeeImg,
    description:
      "Brewed drink from roasted beans, rich, aromatic, and energizing.",
    price: 2,
  },
];
