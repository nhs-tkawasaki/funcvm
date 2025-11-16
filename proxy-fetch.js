const fetch = require('node-fetch');
const { ProxyAgent } = require('proxy-agent');

function fetchWithProxy(url) {
    return fetch(url, { agent: new ProxyAgent() });
}

module.exports = fetchWithProxy;
