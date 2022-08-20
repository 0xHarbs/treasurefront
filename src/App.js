import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./Home.js";
import Choose from "./Choose.js";
import Lend from "./Lend.js";
import Pool from "./Pool.js";
import Borrow from "./Borrow.js";
import Admin from "./Admin.js";
import Review from "./Review.js"
import { useState, useEffect } from "react";
import { ethers } from "ethers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/pool/:id" element={<Pool />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/review/:id" element={<Review />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
