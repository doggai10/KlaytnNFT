const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = `https://api.baobab.klaytn.net:8651`
const PRIVATE_KEY = '0x712c38c7497651356ea40eae516a3e09f5a0a0abb551e89e9281614d2d3a08c8'

module.exports = {
  networks: {  
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id 
    },

    klaytn: {
      provider: new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    }  
  }
}