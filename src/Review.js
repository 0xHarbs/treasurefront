import "./styles/App.css";
import "./styles/Review.css"
import "./styles/Pool.css";
import ReviewHeader from "./components/ReviewHeader";
import ReviewOption from "./components/ReviewOption";
import ReviewActions from "./components/ReviewActions";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useParams } from "react-router-dom";

const Review = () => {
  const { id } = useParams();
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contractInfo, setContractInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borrowBalance, setBorrowBalance] = useState("0");
  const [nativeBalance, setNativeBalance] = useState("0");
  const [nativeContract, setNativeContract] = useState(null);
  const [borrowContract, setBorrowContract] = useState(null);
  const [nativeAddress, setnativeAddress] = useState(null);
  const [borrowAddress, setBorrowAddress] = useState(null);
  const [pendingBalance, setPendingBalance] = useState("0");
  const [batchRepaid, setBatchRepaid] = useState([])
  const [batchDeposits, setBatchDeposits] = useState([])
  const [unlockedFunds, setUnlockedFunds] = useState("0")
  const [interestGained, setInterestGained] = useState("0")
  const [adminConfirmed, setAdminConfirmed] = useState(false)

  const adminAddress = "0xC59b3779A592B620028c77Ab1742c9960e038e4C"
  const contracts = ["0x227E5A7926Ba6d445a4d3bFF62EDF476A375945d"];
  const contractsAbi = [
    "function requestedBorrowAmount() external view returns (uint256)",
    "function interestRate() external view returns (uint48)",
    "function totalBorrowedDeposits() external view returns (uint256)",
    "function maxBorrowAmount() external view returns (uint256)",
    "function collateralisationRatio() external view returns(uint256)",
    "function lockedTokenValue() external view returns (uint256)",
    "function nativeToken() external view returns (address)",
    "function borrowToken() external view returns (address)",
    "function batchNumber() external view returns (uint64)",
    "function depositLiquidity(uint256) external",
    "function batchToDeposits(uint54) external view returns (uint256)",
    "function addressDepositsToBatch(address, uint256) external view returns (uint256)",
    "function batchNumberRepaid(uint64) external view returns (bool)",
    "function initialiseVault() external",
    "function managerAddress() external view returns (address)"
  ];

  const erc20Abi = [
    "function balanceOf(address) external view returns (uint256)",
    "function allowance(address, address) external view returns (uint256)",
    "function approve(address, uint256) external",
    "function decimals() external view returns (uint8)",
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
    }
    console.log("Updated Wallet");
  };

  // Getting info for all contracts
  const getContractData = async () => {
    if (!provider) {
      return;
    }
    const contract = new ethers.Contract(id.toString(), contractsAbi, provider);
    const requestedLoan = await contract.requestedBorrowAmount();
    const APR = await contract.interestRate();
    const investedFunds = await contract.totalBorrowedDeposits();
    const maxBorrowAmount = await contract.maxBorrowAmount();
    const lockedValue = await contract.lockedTokenValue();
    const collateralisationRatio = await contract.collateralisationRatio();
    const batches = await contract.batchNumber();
    const managerAddress = await contract.managerAddress()

    // Get the native token and balance
    const nativeToken = await contract.nativeToken();
    const borrowToken = await contract.borrowToken();

    const nativeContract = new ethers.Contract(nativeToken, erc20Abi, provider);
    const borrowContract = new ethers.Contract(borrowToken, erc20Abi, provider);
    const nativeDecimals = await nativeContract.decimals();
    const borrowDecimals = await borrowContract.decimals();

    const contractInfo = {
      RequestedLoan: numberWithCommas(requestedLoan.toString()),
      APR: (APR / 100).toString(),
      FundsRaised: investedFunds.toString(),
      MaxBorrowAmount: numberWithCommas(maxBorrowAmount.toString()),
      FundingRate: numberWithCommas((investedFunds / requestedLoan).toString()),
      Contract: id.toString(),
      Outstanding: numberWithCommas(
        (maxBorrowAmount - investedFunds).toString()
      ),
      LockedCollateral: numberWithCommas(lockedValue.toString()),
      CollateralisationRatio: collateralisationRatio.toString(),
      Batches: batches.toString(),
      Manager: managerAddress.substring(0,6),
    };
    setContractInfo(contractInfo);
    setBorrowBalance(ethers.utils.formatUnits(borrowBalance, borrowDecimals));
    setNativeBalance(ethers.utils.formatUnits(nativeBalance, nativeDecimals));
    setNativeContract(nativeContract);
    setBorrowContract(borrowContract);
    setBorrowAddress(borrowToken);
    setnativeAddress(nativeToken);
    console.log(contractInfo)
    console.log("Got contract Info");
  };

  // Helper for numbers
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const checkAdmin = async () => {
    if(!signer) alert("Connect wallet first!")
    const message = "Signing to verify admins status"
    const signature = await signer.signMessage(message)
    console.log(signature)
    const address = ethers.utils.verifyMessage(message, signature)
    if(address.toLowerCase() === adminAddress.toLowerCase()) {
      setAdminConfirmed(true)
      setLoading(false)
    } else {
      alert("Not an admin! Area off limits")
    }
  }

  const confirmSubmission = async (checked) => {
    if(!checked) return;
    const contract = new ethers.Contract(id.toString(), contractsAbi, signer);
    const tx = await contract.initialiseVault();
    alert("Sending confirmation. Pending...")
    tx.wait()
    alert("Sent");
  }

  // Loading data on page load
  useEffect(() => {
    const loadData = async () => {
      await getContractData();
      setLoading(false)
    };
    loadData();
  }, [provider]);

  useEffect(() => {
    connectWallet();
    console.log("Got wallet")
  },[])

  return (
    <div className="Review">
      <Header connectWallet={connectWallet} wallet={wallet}/>
      {!loading && (
        <>
          <ReviewHeader
            RequestedLoan={contractInfo ? contractInfo.RequestedLoan : 0}
            Collateral={contractInfo ? contractInfo.LockedCollateral : 0}
            APR={contractInfo ? contractInfo.APR : "0%"}
          />
          <ReviewOption
            LockedCollateral={contractInfo ? contractInfo.LockedCollateral : 0}
            CollateralisationRatio={
              contractInfo ? contractInfo.CollateralisationRatio : 0
            }
            MaxAmount={contractInfo ? contractInfo.MaxBorrowAmount : 0}
            APR={contractInfo ? contractInfo.APR : "0%"}
            Outstanding={contractInfo ? contractInfo.Outstanding : 0}
            Batches={contractInfo ? contractInfo.Batches : 0}
            Manager={contractInfo ? contractInfo.Manager : "0x0"}
          />
          <ReviewActions
            confirmSubmission={confirmSubmission}
          />
        </>
      )}
    </div>
  );
};

export default Review;