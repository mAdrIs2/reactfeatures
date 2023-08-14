import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  const about = "Hello My name is Kaushalendra and This is about section";
  const text = ["Home", "About"];

  return (
    <div className="App">
      <Navbar text={text} />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About about={about} /> />
      </Routes>
    </div>
  );
}

export default App;
