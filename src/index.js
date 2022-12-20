const config = require('./config');
const helper = require('./utils/helper');

async function getNetworks() {
    let output;

    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        const { response } = await helper.getRequest({ url: config.FALLBACK_EVM_NETWORKS_API });

        output = response;
    } else {
        output = response;
    }

    return { output };
}

async function getChainDetails(chain) {
    let output;

    const { response, error } = await helper.getRequest(config.EVM_NETWORKS_API);

    if (error) {
        const { response } = await helper.getRequest({ url: config.FALLBACK_EVM_NETWORKS_API });

        output = response;
    } else {
        output = response;
    }

    let chainData = output[chain];

    if (chainData === undefined) {
        return { error: 'This chain or network doesn\'t exist' };
    }

    return { response: chainData };
}

module.exports = {
    getNetworks, getChainDetails,
}