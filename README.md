# MobiToken

## What is this project about?

This project approachs the standard ERC20 Token implementation in the urban mobility scenario. Here you can deploy the smart contract on Ethereum Ropsten testnet to create your tokens and use this app to simulate paying transportations services with MobiTokens.

## How it works?

As soon as you deploy the smart contract with Remix IDE and your Metamask wallet on Ropsten testnet, there will be 10k of MobiTokens attached to your wallet's address. After that, everything is set so you can use your MobiToken Menu to pay for transportation services. The MobiToken Menu was developed in React.js and it communicates to Ropsten testnet using Web3 API.

## How can I reproduce this?

#### Contract Deployment

1. Go to [Remix IDE](https://remix.ethereum.org/) and create [MobiToken.sol](https://github.com/gabriellm1/MobiToken/blob/master/ERC20_Contract/MobiToken.sol) file. After that go to the Compile tab and click on Compile MobiToken.sol .

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/compile.png)

2. Setup Metamask extension in your Chrome or Firefox navigator. Now in Remix, change to the Deploy & Run tab and select `Injected Web3`. Select which wallet will receive the tokens and click on deploy.

Obs: You should get Ether to your wallet so you can pay the gas fees for the deployment. To do so, checkout [Ropsten Ethereum Faucet](https://faucet.ropsten.be/) to receive some Ether on your Ropsten testnet wallet.

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/deploy.png)

3. Check Remix console to see if everything went as planned. You can also check in your Metamask if the transaction was executed. Now you need to save your contracts address(in red at the image below) for the next part.

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/deployed.png)

Obs: You can check your contract deployment at [Etherscan.io](https://ropsten.etherscan.io/)

#### Setting up the App

1. Input the contract address at line 8 in App.js

2. Input your main wallet address at line 21 in App.js

3. Input the other wallet address that will represent the public transportation provider in line 44 in App.js

#### Running the app

1. On terminal, first you need to run `yarn install` to install all node packages and then run `yarn start` to run the app on localhost. If your app fails to launch, try to comment line 50 in App.js for now.

    **Maybe necessary:** If you commented line 50, try clicking in any transportation option so the app will connect to your Metamask wallet. After that you can  uncomment line 50 in App.js and save the file.

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/connect_metamask.png)

2. Now the Menu is ready to go! You can pay what transportation you want to take. Peer to peer transaction are yet to be implemented.

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/menu.png)

3. After clicking what transportation you will pay, your metamask will open so you can confirm the payment and also pay the gas fees.

![alt text](https://github.com/gabriellm1/MobiToken/blob/master/imgs/metamask.png)

## Suggestion and doubts

Feel free to open an issue for suggesting or implementing new features or maybe asking something for me, I'll be happy to answer :)

`Gabriel Monteiro 2020`
