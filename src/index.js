const config = require('./config');
const helper = require('./utils/helper');

async function getNetworks() {
    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        return { error };
    }

    let networks = [];

    response.forEach((data) => { networks.push({ chainName: data.name, network: data.network }) })

    return { response: networks };
}

async function getChainDetails(chain, network) {
    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        return { error };
    }

    let chainData = response.filter((data) => { return (data.name == chain && data.network == network) });

    if (chainData.length == 0) {
        return { error: 'This chain or network doesn\'t exist' };
    }

    return { response: { chain, network, chainId: chainData[0].chainId, rpc: chainData[0].rpc, nativeCurrency: chainData[0].nativeCurrency.name, currencySymbol: chainData[0].nativeCurrency.symbol, decimals: chainData[0].nativeCurrency.decimals } };
}

module.exports = {
    getNetworks, getChainDetails,
}