const config = require('./config');
const helper = require('./utils/helper');

async function getNetworks() {
    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        return { error };
    }

    let networks = [];

    return { response };
}

async function getChainDetails(chain) {
    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        return { error };
    }

    let chainData = response[chain];

    if (chainData === undefined) {
        return { error: 'This chain or network doesn\'t exist' };
    }

    return { response: chainData };
}

module.exports = {
    getNetworks, getChainDetails,
}