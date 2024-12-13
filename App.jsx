import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Albums from "./pages/Albums.jsx";
import Discover from "./pages/Discover.jsx";
import Artists from "./pages/Artists.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/Artists" element={<Artists />} />
      </Routes>
    </Router>
  );
};

export default App;
