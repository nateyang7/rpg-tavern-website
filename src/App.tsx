import "./App.css";
import NavBar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";
import Menu from "./components/Menu.tsx";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Home />
        <Menu />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;
