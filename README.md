# Safle Blockchain Controller

Safle Blockchain Controller is used to manage and set the environments of different chains and their networks. This SDK supports both EVM and non-EVM chains.

## Installation

Install the package by running the command,

```sh
npm install --save @getsafle/blockchain-controller
```

## Import

Import the package into your project using,

```js
const safleBlockchainController = require('@getsafle/blockchain-controller');
```

> Get Networks

<br>

Get the list & details of all the chains supported by the Safle controllers.

```js
const networks = await safleBlockchainController.getNetworks();
```

<br>

> Get Chain Details

<br>

Get all the network details of a specific chain

```js
const networkDetails = await safleBlockchainController.getChainDetails(chain);
```

* `chain` - Chain name
