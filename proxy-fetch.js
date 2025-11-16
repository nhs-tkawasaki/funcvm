const fetch = require('node-fetch');
const { ProxyAgent } = require('proxy-agent');

function fetchWithProxy(url, options = {}) {
    if (options.agent) {
        return fetch(url, options);
    }

    const proxiedOptions = {
        ...options,
        agent: new ProxyAgent(),
    };

    return fetch(url, proxiedOptions);
}

module.exports = fetchWithProxy;
