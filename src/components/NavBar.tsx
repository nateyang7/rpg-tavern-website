// src/components/NavBar.tsx

export default function NavBar() {
  const navigationLinks = [
    { label: "Home", path: "#home" },
    { label: "Menu", path: "#menu" },
    { label: "About", path: "#about" },
  ];

  return (
    <nav>
      {navigationLinks.map((link) => (
        <a href={link.path} key={link.label}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
