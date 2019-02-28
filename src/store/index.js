import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    networkList: [{
      blockchain: 'eos',
      httpEndpoint: 'https://api-kylin.eosasia.one:443',
      protocol: 'https',
      host: 'api-kylin.eosasia.one',
      port: 443,
      chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
    }],
    account: {}, // 用户账号信息
    eosBalance: '', // eos余额
    biz: {}, // 商家信息
    precision: { // 精度
      eos: 4,
      cny: 2
    },
    dynamicPrice: 25, // 实时浮动价格
    setting: 10000, // 固定值
    source: '',
    lang: 'zh-CN'
  },
  mutations: {
    setNetworkList (state, networkList) {
      state.networkList = networkList
    },
    setAccount (state, account) {
      state.account = account
    },
    setEosBalance (state, balance) {
      state.eosBalance = balance
    },
    setBiz (state, biz) {
      state.biz = biz
    },
    setDynamicPrice (state, price) {
      state.dynamicPrice = price
    },
    setSource (state, source) {
      state.source = source
      sessionStorage.setItem('source', source)
    }
  },
  actions: {
    // getNetworkList ({ commit }) {
    //   const networkList = []
    //   return https.get(getChainConfig).then(res => {
    //     const data = res.data.data
    //     const configList = data.list ? data.list : []
    //     const config = configList.find(x => x.symbol === SYMBOL)
    //
    //     config.wallet_host.map((item, index) => {
    //       networkList.push({
    //         blockchain: 'eos',
    //         protocol: config.wallet_host_path[index],
    //         host: config.wallet_host[index],
    //         port: config.wallet_host_port[index],
    //         chainId: config.chain_id
    //       })
    //     })
    //
    //     commit('setNetworkList', networkList)
    //   })
    // }
  }
})
