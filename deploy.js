const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');
const fs = require('fs');

const ABI = JSON.parse(
  fs.readFileSync('./contracts/Voting_sol_Voting.abi').toString(),
);
const BYTECODE = JSON.parse(
  fs.readFileSync('./contracts/Voting_sol_Voting.bin').toString(),
);

const deployContract = new Web3.eth.Contract(ABI);

deployContract
  .deploy({
    data: BYTECODE,
    arguments: [
      ['kim', 'hee', 'yeon'].map((name) => web3.utils.asciiToHex(name)),
    ],
  })
  .send({
    from: '0x6D33F2aE593Ccd4F551f730f3aBbc8793124D5B4',
    gas: 1500000,
    gasPrice: web3.utils.toWei('0.0003', 'ether'),
  })
  .then((newContract) => {
    deployContract.option.address = newContract.options.address;
    // console.log(newContract.options.address);
  });
