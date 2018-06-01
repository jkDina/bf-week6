require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
	  from: "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1"
    },

    rinkeby: {  // testnet
      host: "localhost",
      port: 8547,
      network_id: 4,
	  from: "0xffe55ac97aa46decfa0e5ecad172ed4d0ae00d98",
	  gas: 6500000,
	  gasPrice: 10 * 1e9
    },

    mainnet: {
      host: "localhost",
      port: 8549,
      network_id: 1,
      gasPrice: 10 * 1e9
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};