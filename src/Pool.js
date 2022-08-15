import "./styles/App.css";
import "./styles/Pool.css";
import PoolHeader from "./components/PoolHeader";
import PoolOption from "./components/PoolOption";
import PoolActions from "./components/PoolActions";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Pool = () => {
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
    "function batchNumberRepaid(uint64) external view returns (bool)"
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

    // Get the native token and balance
    const nativeToken = await contract.nativeToken();
    const borrowToken = await contract.borrowToken();

    const nativeContract = new ethers.Contract(nativeToken, erc20Abi, provider);
    const borrowContract = new ethers.Contract(borrowToken, erc20Abi, provider);
    const nativeBalance = await nativeContract.balanceOf(wallet);
    const borrowBalance = await borrowContract.balanceOf(wallet);
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
    };
    setContractInfo(contractInfo);
    setBorrowBalance(ethers.utils.formatUnits(borrowBalance, borrowDecimals));
    setNativeBalance(ethers.utils.formatUnits(nativeBalance, nativeDecimals));
    setNativeContract(nativeContract);
    setBorrowContract(borrowContract);
    setBorrowAddress(borrowToken);
    setnativeAddress(nativeToken);
    console.log("Got contract Info");
  };

  // Helper for numbers
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Lending funds to the pool
  const lendFunds = async (amount) => {
    if (!nativeContract || !borrowContract) return;
    const allowance = await borrowContract.allowance(wallet, id.toString());
    let allowanceBig = BigNumber.from(allowance);
    let checkBalance = BigNumber.from("1000000000000000000");
    console.log("Got here")
    if (!allowanceBig.gt(checkBalance)) {
      console.log("Here");
      const writeBorrow = new ethers.Contract(
        borrowAddress.toString(),
        erc20Abi,
        signer
      );
      const txAllow = await writeBorrow.approve(
        id.toString(),
        ethers.constants.MaxUint256.toString()
      );
      alert("Sent approval transaction. Pending...");
      await txAllow.wait();
    }
    const contract = new ethers.Contract(id.toString(), contractsAbi, signer);
    const tx = await contract.depositLiquidity(ethers.utils.parseEther(amount));
    alert("Sent lend funds transaction. Pending...");
    await tx.wait();
    alert("Completed!")
  };

  const getWithdrawalStatus = async () => {
    if (!provider) return;
    const contract = new ethers.Contract(id.toString(), contractsAbi, signer);
    const pendingBalance = await contract.addressDepositsToBatch(
      wallet,
      contractInfo.Batches
    );
    setPendingBalance(pendingBalance.toString());
    console.log("Got pending balance");
  };

  const getBatchDeposits = async () => {
    if (!provider) return;
    const contract = new ethers.Contract(id.toString(), contractsAbi, signer);
    let batchDeposits = []
    let batchRepaid = []
    if (contractInfo.Batches.toString() !== "0") {
      console.log("Going to first");
      for (let i = 0; i < contractInfo.Batches; i++) {
        const depositAmount = await contract.addressDepositsToBatch(wallet, i);
        const batchNumberRepaid = await contract.batchNumberRepaid(i)
        console.log("Deposit amount: " + depositAmount);
        batchDeposits.push(depositAmount)
        batchRepaid.push(batchNumberRepaid)
        if (depositAmount !== 0) {
          console.log("Not zero");
        }
      }
    } else {
      console.log("Going to second");
      const depositAmount = await contract.addressDepositsToBatch(wallet, 0);
      const batchNumberRepaid = await contract.batchNumberRepaid(0)
      batchDeposits.push(depositAmount)
      batchRepaid.push(batchNumberRepaid)
      console.log("Deposit amount: " + depositAmount);
      console.log(batchNumberRepaid)
    }
    setBatchDeposits(batchDeposits)
    setBatchRepaid(batchRepaid)
  };

  // May overflow!!!!!!!
  const getAvailableBalance = async () => {
    let sum = BigNumber.from(0);
    for(let i = 0; i < batchDeposits; i ++) {
      if(batchRepaid[i] === true) {
        sum.add(batchRepaid[i])
      }  
    }
    console.log(contractInfo.APR)
    if(sum.toString() !== "0") {
      const interestRate = 1 + (Number(contractInfo.APR) / 100);
      console.log(interestRate)
      // May overflow!!!!!!!
      const netGain = Number(sum) * interestRate
      console.log(netGain)
      setUnlockedFunds(sum)
      setInterestGained(netGain - Number(sum))
    } else {
      setUnlockedFunds("0")
    }
    console.log("set unlocked")
  }

  const withdrawFunds = async (amount) => {
    if (!provider) return;
    const contract = new ethers.Contract(id.toString(), contractsAbi, signer);
    const tx = await contract.withdrawLiquidity(contractInfo.Batches);
    alert("Withdrawal transaction sent!")
    await tx.wait();
    alert("Withdrawal completed")
  };

  useEffect(() => {
    connectWallet()
  }, [])

  // Loading data on page load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await getContractData();
      setLoading(false);
    };
    loadData();
  }, [provider]);

  useEffect(() => {
    getWithdrawalStatus();
    getBatchDeposits();
  }, [contractInfo]);

  useEffect(() => {
    getAvailableBalance()
  }, [batchRepaid])

  return (
    <div className="Pool">
      <Header connectWallet={connectWallet} wallet={wallet}/>
      {!loading ? 
        <>
          <PoolHeader
            RequestedLoan={contractInfo ? contractInfo.RequestedLoan : 0}
            FundingRate={contractInfo ? contractInfo.FundingRate : 0}
            APR={contractInfo ? contractInfo.APR : "0%"}
          />
          <PoolOption
            LockedCollateral={contractInfo ? contractInfo.LockedCollateral : 0}
            CollateralisationRatio={
              contractInfo ? contractInfo.CollateralisationRatio : 0
            }
            MaxBorrowAmount={contractInfo ? contractInfo.MaxBorrowAmount : 0}
            APR={contractInfo ? contractInfo.APR : "0%"}
            Outstanding={contractInfo ? contractInfo.Outstanding : 0}
            Batches={contractInfo ? contractInfo.Batches : 0}
          />
          <PoolActions
            APR={contractInfo ? contractInfo.APR : "0%"}
            borrowBalance={borrowBalance ? borrowBalance : 0}
            nativeBalance={nativeBalance ? nativeBalance : 0}
            lendFunds={lendFunds}
            withdrawFunds={withdrawFunds}
            unlockedFunds={unlockedFunds}
            interestGained={interestGained}
          />
        </>
        :
        <>
        <ClipLoader color={"red"} size={100}/>
        </>
      }
    </div>
  );
};

export default Pool;
