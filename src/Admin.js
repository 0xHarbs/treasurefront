import "./styles/App.css";
import "./styles/Admin.css";
import AdminCover from "./components/AdminCover";
import AdminSummary from "./components/AdminSummary";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Admin = (params) => {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contractInfo, setContractInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminConfirmed, setAdminConfirmed] = useState(false);
  const [contractList, setContractList] = useState([]);

  const factory = "0x52feeDf457C2a5132fc28949D2c97E00985D5227";
  const factoryAbi = ["function pools(uint256) public view returns (address)"];
  const contracts = ["0x227E5A7926Ba6d445a4d3bFF62EDF476A375945d"];
  const contractsAbi = [
    "function requestedBorrowAmount() external view returns (uint256)",
    "function interestRate() external view returns (uint48)",
    "function totalBorrowedDeposits() external view returns (uint256)",
    "function maxBorrowAmount() external view returns (uint256)",
    "function lockedTokenSupply() external view returns (uint256)",
    "function nativeToken() external view returns (address)",
    "function borrowToken() external view returns (address)",
    "function vaultUnlocked() external view returns (bool)"
  ];
  const erc20Abi = ["function decimals() public view returns (uint8)"];
  const adminAddress = "0xC59b3779A592B620028c77Ab1742c9960e038e4C";

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
    console.log("Updated Wallet");
  };

  const getFactoryContracts = async () => {
    const factoryContract = new ethers.Contract(factory, factoryAbi, provider);
    let pools = [];
    for (let i = 0; i < 100; i++) {
      try {
      const poolAddress = await factoryContract.pools(i);
      console.log(poolAddress);
      pools.push(poolAddress);
    } catch (error) {
      break;
    }
  }
    console.log("pools: ", pools)
    setContractList(pools);
  };

  // Getting info for all contracts
  const getContractData = async () => {
    if (!provider) {
      return;
    }
    let contractInfoList = [];
    console.log("contract list: ", contractList);
    for (let i = 0; i < contractList.length; i++) {
      console.log(contractList[i])
      const contract = new ethers.Contract(
        contractList[i],
        contractsAbi,
        provider
      );
      const nativeAddress = await contract.nativeToken();
      const borrowAddress = await contract.borrowToken()
      const nativeToken = new ethers.Contract(nativeAddress, erc20Abi, provider);
      const borrowToken = new ethers.Contract(borrowAddress, erc20Abi, provider);
      const nativeDecimals = await nativeToken.decimals();
      const borrowDecimals = await borrowToken.decimals();
      const requestedLoan = ethers.utils.formatUnits(await contract.requestedBorrowAmount(), borrowDecimals);
      const APR = await contract.interestRate();
      const unlocked = await contract.vaultUnlocked();
      const maxBorrowAmount = ethers.utils.formatUnits(await contract.maxBorrowAmount(), borrowDecimals);
      const lockedSupply = ethers.utils.formatUnits(await contract.lockedTokenSupply(), nativeDecimals);
      const contractInfo = {
        RequestedLoan: numberWithCommas(requestedLoan.toString()),
        APR: (APR / 100).toString(),
        MaxBorrowAmount: numberWithCommas(maxBorrowAmount.toString()),
        lockedSupply: numberWithCommas(lockedSupply.toString()),
        Contract: contracts[i],
        unlocked: unlocked
      };
      contractInfoList.push(contractInfo);
      console.log(contractInfo);
    }
    setContractInfo(contractInfoList);
  };

  const checkAdmin = async () => {
    if (!signer) alert("Connect wallet first!");
    const message = "Signing to verify admins status";
    const signature = await signer.signMessage(message);
    console.log(signature);
    const address = ethers.utils.verifyMessage(message, signature);
    if (address.toLowerCase() === adminAddress.toLowerCase()) {
      setAdminConfirmed(true);
      setLoading(false);
    } else {
      alert("Not an admin! Area off limits");
    }
  };

  // Helper for numbers
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Loading factory data
  useEffect(() => {
    const loadFactoryData = async () => {
      await getFactoryContracts();
    };
    loadFactoryData();
  }, [provider]);

  useEffect(() => {
    const loadContractData = async () => {
      await getContractData();
    };
    loadContractData();
  }, [contractList]);

  return (
    <div className="Admin">
      <Header connectWallet={connectWallet} wallet={wallet} />
      {loading ? (
        <>
          <h3 className="admin__signText">
            Sign a transaction to verify admin status.
          </h3>
          <button className="button" onClick={checkAdmin}>
            Sign-in via Ethereum
          </button>
        </>
      ) : (
        <AdminCover />
      )}
      {!loading && (
        <div className="admin__openProjects">
          {/* {contractInfo &&  contractInfo.map(index => {
            if(!index.unlocked) {
            return (
            <AdminSummary 
            index={index} 
            loanRequested={index.RequestedLoan}
            APR={index.APR}
            maxBorrowAmount={index.MaxBorrowAmount}
            lockedSupply={index.lockedSupply}
            contract={index.Contract}
            />
            )
            }})} */}
          <AdminSummary
            name={"Siacoin"}
            logo={"https://cryptologos.cc/logos/siacoin-sc-logo.png"}
            loanRequest={"$4,000,000"}
            collateral={"$12,000,000"}
            APR={contractInfo ? `${contractInfo[0].APR}%` : "10%"}
            price={"$0.01"}
            contract={contractInfo ? `${contractInfo[0].Contract}` : "0"}
            description={"Decentralised file hosting"}
            lockedSupply={"2,000,000"}
          />
          <AdminSummary
            name={"Synthetix"}
            logo={
              "https://www.coinopsy.com/media/img/quality_logo/Synthetix_Network.png"
            }
            loanRequest={"$7,000,000"}
            collateral={"$21,000,000"}
            APR={"10%"}
            price={"$0.5"}
            description={"Decentralised exchange"}
            lockedSupply={"1,000,000"}
          />
          <AdminSummary
            name={"Binance"}
            logo={
              "https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png"
            }
            loanRequest={"$1,400,000"}
            collateral={"$4,100,000"}
            APR={"10%"}
            price={"$1.3"}
            description={"Centralised exchange"}
            lockedSupply={"1,000,000"}
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
