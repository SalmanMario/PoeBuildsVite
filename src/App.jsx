import { Button } from "react-bootstrap";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Legion from "./leagues/Legion";
import Metamorph from "./leagues/Metamorph";
import Delirium from "./leagues/Delirium";
import Harvest from "./leagues/Harvest";
import Echoes from "./leagues/Echoes";
import Ultimatum from "./leagues/Ultimatum";
import Expedition from "./leagues/Expedition";
import Siege from "./leagues/Siege";
import Sentinel from "./leagues/Sentinel";
import Lake from "./leagues/Lake";

import Footer from "./Components/Footer";
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Legion" element={<Legion />} />
        <Route path="/Metamorph" element={<Metamorph />} />
        <Route path="/Delirium" element={<Delirium />} />
        <Route path="/Harvest" element={<Harvest />} />
        <Route path="/Echoes" element={<Echoes />} />
        <Route path="/Ultimatum" element={<Ultimatum />} />
        <Route path="/Expedition" element={<Expedition />} />
        <Route path="/Siege" element={<Siege />} />
        <Route path="/Sentinel" element={<Sentinel />} />
        <Route path="/Lake" element={<Lake />} />
      </Routes>
      <Footer />
    </div>
  );
}
