// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    // polygon network configuration
    // matic: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
    //   network_id: 80001,
    //   confirmations: 2,
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
  },
  
  // mocha: {
  //    timeout: 100000
  // },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15",    
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  },
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
