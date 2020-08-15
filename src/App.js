import React, { useState } from 'react';
import Web3 from 'web3';
import { MobiTokenAbi } from './abi.js';
import './App.css';
import LoadingOverlay from 'react-loading-overlay';
const web3 = new Web3(Web3.givenProvider);

const contractAddr = 'Your deployed contract address';
const TokenContract = new web3.eth.Contract(MobiTokenAbi, contractAddr);




function App() {
  
  const [balance, setGetBalance] = useState('');
  const  [isActive,setIsActive] = useState(false)
  

  const handleBalance = async () => {
    const result = await TokenContract.methods.balanceOf("your metamask wallet address").call();
    setGetBalance(result);
  }

  const handleSet = async (wallet, value) => {
    setIsActive(true);
    const accounts = await window.ethereum.enable();
    const account = accounts[0];

    const result = await TokenContract.methods.transfer(wallet,value).send({
      from: account,
    }).then(function() {
      setIsActive(false);
      handleBalance();
     }, function() {
      setIsActive(false);
      handleBalance();
   });
      
    console.log(result);
    
  }

  let public_wallet = "public institution wallet address"
  // Here you can choose the prices for each service
  let price_bus = 250; 
  let price_subway = 400
  let price_train = 500
  let price_bike = 125
  handleBalance(); // This will fail until you connect metamask to the app

  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <h1 class="title">Your's MobiToken Menu</h1><button class="refresh" onClick={handleBalance}><i class="fa fa-refresh"></i></button>
        <h2 class="balance"> Balance MBT$: {balance/100}</h2> 
        <LoadingOverlay
          active={isActive}
          spinner
          text='Loading transaction...'
          >
        </LoadingOverlay>
        <button class="button subway" onClick={()=>handleSet(public_wallet,price_subway)}><i class="fa fa-subway"></i> Subway | MBT$ 4</button>
        <button class="button bus" onClick={()=>handleSet(public_wallet,price_bus)}><i class="fa fa-bus"></i> Bus | MBT$ 2,50</button>
        <button class="button train" onClick={()=>handleSet(public_wallet,price_train)}><i class="fa fa-train"></i> Train | MBT$ 5</button>
        <button class="button escooter" onClick={()=>handleSet(public_wallet,price_bike)}><i class="fa fa-bicycle"></i> Bicycle | MBT$ 1,25</button>
        <button class="button p2p"><i class="fa fa-user-circle"></i> P2P | MBT$ ?</button>
        
      </header>
    </div>  
);
  }
export default App;
