// src/components/Menu.tsx

import Course from "./Course.tsx";
import { starters } from "../data/items.ts";

export default function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>

      <section id="starters">
        <h3>Starters</h3>
        <div className="items-container">
          {starters.map((starter) => (
            <Course
              name={starter.name}
              path={starter.path}
              description={starter.description}
              price={starter.price}
              key={starter.name}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
