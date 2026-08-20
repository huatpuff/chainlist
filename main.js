const chainlistURL = "https://chainlist.org/rpcs.json";
const list = ["blxrbdn", "publicnode", "1rpc", "cloudflare", "drpc", "blockrazor", "blocknative", "blastapi"];
async function getChain(chainID) {
    try {
        let data = await fetch(chainlistURL);
        let response = await data.json();
        let chainData = response.find(x => x.chainId == chainID);
        const rpcList = [];
        chainData = chainData.rpc;
        for (let i in chainData) {
            if (list.some(x => chainData[i].url.includes(x))) {
                rpcList.push(chainData[i].url)
            }
        }
        console.dir(rpcList, { depth: null, colors: true });
        return rpcList;
    } catch (err) {
        console.log(err)
        return false;
    }

}

module.exports = { getChain }