const PACKAGE_VERSION = require('../package.json').version

export const state = () => ({
  languages: [
    { title: 'English', code: 'en' }
  ],
  locale: 'en',
  appVersion: PACKAGE_VERSION,
  appData: [{
    code: 'm1',
    name: 'Module 1',
    icon: 'book-open',
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
  }, {
    code: 'm2',
    name: 'Module 2',
    icon: 'crown',
    views: [
      {
        code: 'OVERVIEW',
        name: 'Overview',
        icon: 'th-large',
        type: 'pageA'
      },
      {
        code: 'DRAFTS',
        name: 'Drafts',
        icon: 'pencil-ruler',
        type: 'pageE'
      }
    ]
  }, {
    code: 'm3',
    name: 'Module 3',
    icon: 'university',
    views: [
      {
        code: 'OVERVIEW',
        name: 'Overview',
        icon: 'th-large',
        type: 'pageA'
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
  }
}

export const actions = {
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
