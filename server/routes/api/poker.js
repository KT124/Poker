const express = require('express');
const router = express.Router();

const Web3 = require("web3");

const ABI = require("../../../Poker.json");
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


// const init = async () => {

//    let name;
//     const poker = new web3.eth.Contract(
//         ABI,
//         "0x5EeAA2DCb23056F4E8654a349E57eBE5e76b5e6e",
//     );



//       // const _name = await poker.methods.name().call();
//       // const _symbol = await poker.methods.symbol().call();
//       // const _decimals = await poker.methods.decimals().call();
//       // const _totalSupply = await poker.methods.totalSupply().call();
//       const _owner = await poker.methods.owner().call();


//       // console.log(_name)
//       // console.log(_symbol)
//       // console.log(_decimals)
//       // console.log(_totalSupply / 1000000000000000000)
//       console.log(_owner)


//       return _owner;


// };

const poker = new web3.eth.Contract(
    ABI,
    "0x5EeAA2DCb23056F4E8654a349E57eBE5e76b5e6e",
);

const getName = async (req, res) => {

    const _name = await poker.methods.name().call();
    console.log(_name)
    return res.json({ msg: _name });

};

const getSymbol = async (req, res) => {

    const _symbol = await poker.methods.symbol().call();
    console.log(_symbol)

    return res.json({ msg: _symbol });


}
const getTotalSupp = async (req, res) => {

    const _totalSupply = (await poker.methods.totalSupply().call()) / 1000000000000000000;

    console.log(_totalSupply)

    return res.json({ msg: _totalSupply });


}
const getDecimal = async (req, res) => {

    const _decimals = await poker.methods.decimals().call();

    console.log(_decimals)

    return res.json({ msg: _decimals });


}
const getOwner = async (req, res) => {

    const _owner = await poker.methods.owner().call();
    console.log(_owner)
    return res.json({ msg: _owner });


}




router.get('/name', getName);
router.get('/symbol', getSymbol);
router.get('/owner', getOwner);
router.get('/decimal', getDecimal);
router.get('/supply', getTotalSupp);


module.exports = router;
