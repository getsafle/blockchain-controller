# **Safle Blockchain Controller**

Safle Blockchain Controller SDK


## **Installation and Usage**

> Installation

Install the package by running the command,

`npm install @getsafle/blockchain-controller`

Import the package into your project using,

`const safleBlockchainController = require('@getsafle/blockchain-controller');`

> Methods

Get Networks

`const networks = await safleBlockchainController.getNetworks();`


Get Network Details

`const networkDetails = await safleBlockchainController.getChainDetails(chain, network);`

* `chain` - Chain name
* `network` - Network