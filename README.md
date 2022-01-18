# **Safle Blockchain Controller**

Safle Blockchain Controller is used to manage and set the environments of different chains and their networks. This SDK supports both EVM and non-EVM chains.


## **Installation and Usage**

> Installation

Install the package by running the command,

`npm install @getsafle/blockchain-controller`

Import the package into your project using,

`const safleBlockchainController = require('@getsafle/blockchain-controller');`

> Methods

Get Networks

`const networks = await safleBlockchainController.getNetworks();`


Get all the network details of a specific chain

`const networkDetails = await safleBlockchainController.getChainDetails(chain);`

* `chain` - Chain name
