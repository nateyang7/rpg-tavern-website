// src/components/Menu.tsx

import Course from "./Course.tsx";
import { items } from "../data/items.ts";

export default function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>

      <section id="starters">
        <h3>Starters</h3>
        <div className="items-container">
          {items.map((item) => (
            <Course
              name={item.name}
              path={item.path}
              description={item.description}
              price={item.price}
              key={item.name}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
