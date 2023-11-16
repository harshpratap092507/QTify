import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/HeroSection/Hero.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>qtify</title>
      </header>
      <nav className="container">
        <Navbar />
      </nav>
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default App;
