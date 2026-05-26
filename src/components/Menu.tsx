// src/components/Menu.tsx

function Courses(props: { name: string; courses: string[] }) {
  return (
    <section id={props.name.toLowerCase()}>
      <h3>{props.name}</h3>
      <ul>
        {props.courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </section>
  );
}

const starters = {
  name: "Starters",
  courses: ["Soup", "Salad", "Charcuterie"],
};

export default function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>

      <Courses name={starters.name} courses={starters.courses} />

      <section id="main-courses">
        <h3>Main Courses</h3>
        <ul>
          <li>Beef</li>
          <li>Chicken</li>
          <li>Pasta</li>
        </ul>
      </section>

      <section id="sides">
        <h3>Sides</h3>
        <ul>
          <li>Rice</li>
          <li>Mashed potatoes</li>
          <li>Vegetables</li>
        </ul>
      </section>

      <section id="desserts">
        <h3>Desserts</h3>
        <ul>
          <li>Cake</li>
          <li>Cheesecake</li>
          <li>Ice cream</li>
        </ul>
      </section>

      <section id="drinks">
        <h3>Drinks</h3>
        <ul>
          <li>Tea</li>
          <li>Beer</li>
          <li>Water</li>
        </ul>
      </section>
    </section>
  );
}
