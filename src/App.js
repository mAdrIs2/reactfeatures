import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Api from "./components/Api";
import { Routes, Route } from "react-router-dom";
import Grid from "./components/GridLayout/Grid";
import BSGrid from "./components/BootStrapGrid/BSGrid";

function App() {
  const about = "Hello My name is Kaushalendra and This is about section";
  const text = ["Home", "About", "Api Fetching","Grid Layout","Bootstrap Grid"];

  return (
    <div className="App">
      <Navbar text={text} />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About about={about} /> />
        <Route path="/api" element=<Api /> />
        <Route path="/grid" element=<Grid /> />
        <Route path="/bsgrid" element=<BSGrid /> />
      </Routes>
    </div>
  );
}

export default App;
