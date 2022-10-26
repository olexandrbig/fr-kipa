const AVAILABLE_OPERATIONS = require('../static/json/operations.json').operations
const PACKAGE_VERSION = require('../package.json').version

export const state = () => ({
  languages: [
    { title: 'English', code: 'en' }
  ],
  locale: 'en',
  appVersion: PACKAGE_VERSION,
  appOperations: [],
  availableOperations: AVAILABLE_OPERATIONS,
  appData: [{
    link: '/',
    code: 'm1',
    name: 'Designer',
    icon: 'boxes-stacked',
    views: [
      {
        code: 'OVERVIEW',
        name: 'Overview',
        icon: 'th-large',
        type: 'pageA'
      },
      {
        code: 'PRODUCT',
        name: 'Product data',
        icon: 'boxes',
        views: [{
          code: 'PRODUCT:VARIANTS',
          name: 'Variants',
          icon: 'list',
          type: 'pageB'
        }, {
          code: 'PRODUCT:VERSIONS',
          name: 'Versions',
          icon: 'tasks',
          type: 'pageC'
        }, {
          code: 'PRODUCT:BALANCE',
          name: 'Balance',
          icon: 'balance-scale',
          type: 'pageD'
        }]
      },
      {
        code: 'DRAFTS',
        name: 'Drafts',
        icon: 'pencil-ruler',
        type: 'pageE'
      }
    ]
  }],
  tabs: ['m1:OVERVIEW', 'm1:PRODUCT:VERSIONS'],
  activeModule: 'm1',
  activeView: 'm1:PRODUCT:VERSIONS'
})

export const mutations = {
  SET_ACTIVE_MODULE (state, tabId) {
    state.activeModule = tabId
  },
  ADD_TAB (state, tabId) {
    state.tabs.push(tabId)
  },
  REMOVE_TAB (state, tabId) {
    state.tabs = state.tabs.filter(tab => tab !== tabId)
  },
  REMOVE_ACTIVE (state, tabId) {
    const tabIndex = state.tabs.indexOf(tabId)
    state.activeView = state.tabs.length > 1 ? tabIndex > 0 ? state.tabs[tabIndex - 1] : state.tabs[0] : null
  },
  SET_ACTIVE_VIEW (state, tabId) {
    state.activeView = tabId
  },
  ADD_ACTIVE_OPERATION (state, operation) {
    state.appOperations.push(operation)
  },
  REMOVE_ACTIVE_OPERATION (state, operationId) {
    state.appOperations = state.appOperations.filter(tab => tab.id !== operationId)
  }
}

export const actions = {
  addOperation ({ commit, state }, operation) {
    commit('ADD_ACTIVE_OPERATION', operation)
  },
  removeOperation ({ commit, state }, operationId) {
    commit('REMOVE_ACTIVE_OPERATION', operationId)
  },
  activateModule ({ commit, state }, tabId) {
    commit('SET_ACTIVE_MODULE', tabId)
  },
  activateTab ({ commit, state }, tabId) {
    commit('SET_ACTIVE_VIEW', tabId)
    if (!state.tabs.includes(tabId)) {
      commit('ADD_TAB', tabId)
    }
  },
  closeTab ({ commit, state }, tabId) {
    if (tabId === state.activeView) {
      commit('REMOVE_ACTIVE', tabId)
    }
    commit('REMOVE_TAB', tabId)
  }
}
