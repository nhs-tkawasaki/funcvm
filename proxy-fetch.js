const fetch = require('node-fetch');
const { getProxyForUrl } = require('proxy-from-env');
const { HttpsProxyAgent } = require('https-proxy-agent');

function fetchWithProxy(url, options = {}) {
    const proxyUrl = getProxyForUrl(url);
    if (options.agent || !proxyUrl) {
        return fetch(url, options);
    }

    const proxiedOptions = {
        ...options,
        agent: new HttpsProxyAgent(proxyUrl),
    };

    return fetch(url, proxiedOptions);
}

module.exports = fetchWithProxy;
