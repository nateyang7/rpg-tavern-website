// src/components/Menu.tsx

import backgroundImg from "../assets/tavern.png";
import Course from "../components/Course.tsx";
import { starters, mainCourses, desserts, drinks } from "../data/items.ts";

export default function Menu() {
  return (
    <section
      id="menu"
      className="page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
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

      <section id="drinks">
        <h3>Drinks</h3>
        <div className="items-container">
          {drinks.map((drink) => (
            <Course
              name={drink.name}
              path={drink.path}
              description={drink.description}
              price={drink.price}
              key={drink.name}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
