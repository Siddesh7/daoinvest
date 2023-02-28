const fcl = require("@onflow/fcl");

fcl.config({
  "app.detail.title": "Dao Invest", // this adds a custom name to our wallet
  "accessNode.api": "https://rest-testnet.onflow.org", // this is for the local emulator
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // this is for the local dev wallet
});
