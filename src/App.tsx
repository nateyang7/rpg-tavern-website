import "./App.css";
import NavBar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
