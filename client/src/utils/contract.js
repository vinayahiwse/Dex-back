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
      `0xe0BC862364d91EDB074041c98B8Df99DC6A1558C`,
      UniswapAbi.abi,
      signer
    );
    return contractReader;
  }
};
