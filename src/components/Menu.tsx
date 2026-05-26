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

const menu = [
  { name: "Starters", courses: ["Soup", "Salad", "Charcuterie"] },
  { name: "Main courses", courses: ["Beef", "Chicken", "Pasta"] },
  { name: "Sides", courses: ["Rice", "Mashed potatoes", "Vegetables"] },
  { name: "Desserts", courses: ["Cake", "Cheesecake", "Ice cream"] },
  { name: "Drinks", courses: ["Tea", "Beer", "Water"] },
];

export default function Menu() {
  return (
    <section id="menu">
      <h2>Menu</h2>

      {menu.map((courseType) => (
        <Courses name={courseType.name} courses={courseType.courses} />
      ))}
    </section>
  );
}
