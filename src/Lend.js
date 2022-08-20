import "./styles/App.css";
import "./styles/Lend.css";
import LendCover from "./components/LendCover";
import LendSummary from "./components/LendSummary";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Lend = (params) => {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contractInfo, setContractInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [walletConnected, setWalletConnected] = useState(false)

  const contracts = ["0x227E5A7926Ba6d445a4d3bFF62EDF476A375945d"];
  const contractsAbi = [
    "function requestedBorrowAmount() external view returns (uint256)",
    "function interestRate() external view returns (uint48)",
    "function totalBorrowedDeposits() external view returns (uint256)",
    "function maxBorrowAmount() external view returns (uint256)",
  ];

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
      setWalletConnected(true)
    }
    console.log("Updated Wallet")
  };

  // Getting info for all contracts
  const getContractData = async () => {
    if (!provider) {
      return;
    }
    let contractInfoList = [];
    for (let i = 0; i < contracts.length; i++) {
      const contract = new ethers.Contract(
        contracts[i],
        contractsAbi,
        provider
      );
      const requestedLoan = await contract.requestedBorrowAmount();
      const APR = await contract.interestRate();
      const investedFunds = await contract.totalBorrowedDeposits();
      const maxBorrowAmount = await contract.maxBorrowAmount();
      const contractInfo = {
        RequestedLoan: numberWithCommas(requestedLoan.toString()),
        APR: (APR/100).toString(),
        FundsRaised: investedFunds.toString(),
        MaxBorrowAmount: numberWithCommas(maxBorrowAmount.toString()),
        FundingRate: numberWithCommas((investedFunds/requestedLoan).toString()),
        Contract: contracts[i]
      };
      contractInfoList.push(contractInfo);
      console.log(contractInfo)
      console.log(contractInfo.RequestedLoan)
    }
    setContractInfo(contractInfoList)
  };

  // Helper for numbers
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  // Loading data on page load
  useEffect(() => {
    const loadData = async () => {
      await getContractData();
    };
    if(!wallet) {
      alert("Connect Wallet to continue")
    }
    loadData();
  }, []);

  // Loading data on wallet connect
  useEffect(() => {
    console.log("Connecting")
    const loadData = async () => {
      await getContractData();
      setLoading(false)
    };
    loadData();
  }, [walletConnected]);

  return (
    <div className="Lend">
      <Header connectWallet={connectWallet} wallet={wallet} />
      <LendCover />
      {!loading && walletConnected && 
      <div className="lend__openProjects">
        <LendSummary
          name={"Aave"}
          logo={"https://cryptologos.cc/logos/aave-aave-logo.png"}
          loanRequest={contractInfo ? `$${contractInfo[0].RequestedLoan}` : "10"}
          FundingRate={contractInfo ? `${contractInfo[0].FundingRate}%` : "80%"}
          APR={contractInfo ? `${contractInfo[0].APR}%` : "10%"}
          Backers={1200}
          Contract={contractInfo ? `${contractInfo[0].Contract}` : "0" }
          description={"Liquidity Protocol"}
        />
        <LendSummary
          name={"Uniswap"}
          logo={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/2051px-Uniswap_Logo.svg.png"
          }
          loanRequest={"$7,000,000"}
          fundingRate={"89%"}
          APR={"10%"}
          Backers={2350}
          description={"Decentralised Exchange"}
        />
        <LendSummary
          name={"Lido"}
          logo={
            "https://thegivingblock.com/wp-content/uploads/2022/04/Lido-LDO-logo.png"
          }
          loanRequest={"$1,400,000"}
          fundingRate={"68%"}
          APR={"10%"}
          Backers={780}
          description={"Staking protocol"}
        />
        <LendSummary
          name={"Yearn"}
          logo={"https://cryptologos.cc/logos/yearn-finance-yfi-logo.png"}
          loanRequest={"$2,000,000"}
          fundingRate={"40%"}
          APR={"14%"}
          Backers={650}
          description={"Yield generating protocol"}
        />
        <LendSummary
          name={"DyDx"}
          logo={"https://getcrypto.info/images/logos/dydx.png"}
          loanRequest={"$4,000,000"}
          fundingRate={"89%"}
          APR={"15%"}
          Backers={1743}
          description={"Decentralised Exchange"}
        />
        <LendSummary
          name={"Maple Finance"}
          logo={
            "https://thegivingblock.com/wp-content/uploads/2022/04/Maple-MPL-logo-.png"
          }
          loanRequest={"$800,000"}
          fundingRate={"68%"}
          APR={"7%"}
          Backers={450}
          description={"Lending protocol"}
        />
      </div>
      }
    </div>
  );
};

export default Lend;
