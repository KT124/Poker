const ethers = require("ethers");
const Web3 = require("web3");

const ABI = require("./Poker.json");
// const provider = new ethers.providers.Web3Provider(window.Ethereum);

const web3 = new Web3("https://mainnet.infura.io/v3/f3699a0b08fd4f56a8dd94ab9d43138b");

// const provider = new ethers.providers.JsonRpcProvider(
//     "https://mainnet.infura.io/v3/f3699a0b08fd4f56a8dd94ab9d43138b"
// );

// const wallet = new ethers.Wallet(
//     "0x4c46503725daed367ccfe86463eb9f8bdf470972b8a625cf30cf0c16565e8240",
//     provider
// );

// const signer = wallet.provider;

const init = async () => {


    const poker = new web3.eth.Contract(
        ABI,
        "0x5EeAA2DCb23056F4E8654a349E57eBE5e76b5e6e",
    );

    // const poker = new ethers.Contract(
    //     "0x5EeAA2DCb23056F4E8654a349E57eBE5e76b5e6e",
    //     ABI,
    //     wallet
    // );



    const _name = await poker.methods.name().call();
    const _symbol = await poker.methods.symbol().call();
    const _decimals = await poker.methods.decimals().call();
    const _totalSupply = await poker.methods.totalSupply().call();
    const _owner = await poker.methods.owner().call();


    console.log(_name)
    console.log(_symbol)
    console.log(_decimals)
    console.log(_totalSupply / 1000000000000000000)
    console.log(_owner)

    // await nftcontract.grantRole(minterRole, contract.address);





    // await contract.createEthMarket(1, 10, 100, "https://www.youtube.com",1667040269, 1767040269, "0x9Ce41aA80FA526d6a281C815477456D564F42Dcf" )


    // const res = await nftcontract.tokenByIndex(1)
    // const uri = await nftcontract.tokenURI(2)
    //      console.log(uri.toString());
};

// const connectwalletHandler = async () => {
//   if (window.ethereum) {
//     provider.send("eth_requestAccounts", []).then(async () => {
//       await accountChangedHandler(provider.getSigner());
//     });
//   } else {
//     setErrorMessage("Please Install MetaMask!!!");
//   }
// };

init();

module.exports = {
    init,
};
