import React from "react";
import { Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Achievements from "./routes/Achievements";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </>
  );
}
