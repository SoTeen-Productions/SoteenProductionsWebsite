import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Navbar from "./components/Navbar"; // Import Navbar component
import Home from "./components/Home"; // Import Home component
import Achievements from "./components/Achievements"; // Import Achievements component

export default function App() {
  return (
    <Router>
      <Navbar /> {/* Render Navbar outside of Routes to appear on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </Router>
  );
}
