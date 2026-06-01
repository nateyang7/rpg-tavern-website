// src/components/Home.tsx

import backgroundImg from "../assets/tavern.png";

export default function Home() {
  return (
    <section
      id="home"
      className="page"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2>Welcome to the Tavern</h2>
    </section>
  );
}
