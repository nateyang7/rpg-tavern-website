// src/components/Menu.tsx

import Course from "./Course.tsx";
import { starters, mainCourses, desserts } from "../data/items.ts";

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

      <section id="main-courses">
        <h3>Main courses</h3>

        <div className="items-container">
          {mainCourses.map((mainCourse) => (
            <Course
              name={mainCourse.name}
              path={mainCourse.path}
              description={mainCourse.description}
              price={mainCourse.price}
              key={mainCourse.name}
            />
          ))}
        </div>
      </section>

      <section id="desserts">
        <h3>Desserts</h3>
        <div className="items-container">
          {desserts.map((dessert) => (
            <Course
              name={dessert.name}
              path={dessert.path}
              description={dessert.description}
              price={dessert.price}
              key={dessert.name}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
