// src/App.tsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

// Pages
import Home from "./pages/Home.tsx";
import Menu from "./pages/Menu.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
