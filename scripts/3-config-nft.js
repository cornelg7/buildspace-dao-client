import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { BUNDLE_MODULE_ADDRESS } from './config.js';

const bundleDrop = sdk.getBundleDropModule(
  BUNDLE_MODULE_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Puffcap",
        description: "This NFT will give you access to LeagueDAO!",
        image: readFileSync("scripts/assets/puffcap.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()