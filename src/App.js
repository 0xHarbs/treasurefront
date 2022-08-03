import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home.js";
import Choose from "./Choose.js"
import Lend from "./Lend.js";
import Pool from "./Pool.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/choose" element={<Choose/>} />
          <Route path="/lend" element={<Lend/>} />
          <Route path="/pool" element={<Pool/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
