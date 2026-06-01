// src/components/NavBar.tsx

import { Link } from "react-router-dom";

export default function NavBar() {
  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Menu", path: "/menu" },
  ];

  return (
    <nav id="navbar">
      {navigationLinks.map((link) => (
        <Link to={link.path} key={link.label}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
