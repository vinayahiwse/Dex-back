import { ethers } from "ethers";
import CustomTokenAbi from "../abi/CustomToken.json";
import UniswapAbi from "../abi/Uniswap.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      address,
      CustomTokenAbi.abi,
      signer
    );
    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;
  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      `0x8dA78e6D47870911bE47A711d24c7946d055b8Cc`,
      UniswapAbi.abi,
      signer
    );
    return contractReader;
  }
};
