const axios = require('axios');

async function getRequest(url, params) {
    try {
        const response = await axios({
            url: `${url}`,
            params,
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
            },
        });

        return { response: response.data };
    } catch (error) {
        return { error };
    }
};

module.exports = { getRequest }