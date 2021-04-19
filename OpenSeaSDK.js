const Web3 = require('web3');
const opensea = require('opensea-js');
const OpenSeaPort = opensea.OpenSeaPort;
const Network = opensea.Network;


const provider = new Web3.providers.HttpProvider('https://ethereum.gomusiclive.com/');

const seaport = new OpenSeaPort(provider, {
    networkName: Network.Main
});

const asset = await seaport.api.getAsset({
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    tokenId: "1"
});


console.log(asset);
