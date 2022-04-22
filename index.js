import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import dotenv from "dotenv"
dotenv.config()

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.TN_PRIVATE_KEY,
    ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io")
  )
);

const nft = sdk.getNFTModule(process.env.TN_NFT_ADDRESS);

async function mint() {
  console.log(
    await nft.mint({
      name: "Infinity Door",
      Description: "My first nft project",
      image:
        "https://ik.imagekit.io/wsosjkbekkj/default-image.jpg?updatedAt=1608657111795",
      properties: {},
    })
  );
}

mint();
