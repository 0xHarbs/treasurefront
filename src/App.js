import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home.js";
import Choose from "./Choose.js";
import Lend from "./Lend.js";
import Pool from "./Pool.js";
import Borrow from "./Borrow.js";
import { useState } from "react";
import { ethers } from "ethers";

function App() {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  // Core functionality
  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const network = await provider.getNetwork();
    if (network.chainId !== 5) {
      alert("Please switch to the Goerli test network");
    } else {
      setWallet(address);
      setProvider(provider);
      setSigner(signer);
    }
  };

  return (
    <div className="App">
      <Router>
        <Header connectWallet={connectWallet} wallet={wallet} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            wallet={wallet}
            provider={provider}
            signer={signer}
            path="/choose"
            element={<Choose />}
          />
          <Route
            wallet={wallet}
            provider={provider}
            signer={signer}
            path="/lend"
            element={<Lend />}
          />
          <Route
            wallet={wallet}
            provider={provider}
            signer={signer}
            path="/pool"
            element={<Pool />}
          />
          <Route
            wallet={wallet}
            provider={provider}
            signer={signer}
            path="/borrow"
            element={<Borrow />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
