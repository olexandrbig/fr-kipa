import { v4 as uuidv4 } from 'uuid'
import { Utils } from '@/services/Utils'

const AVAILABLE_OPERATIONS = require('../static/json/operations.json').operations
const PACKAGE_VERSION = require('../package.json').version

export const state = () => ({
  languages: [
    { title: 'English', code: 'en' }
  ],
  locale: 'en',
  appVersion: PACKAGE_VERSION,
  appOperations: [],
  allOperations: AVAILABLE_OPERATIONS,
  availableOperations: [],
  availableSystems: [],
  availableFlows: [],
  availableGateways: [],
  availableCredentials: [],
  latestId: null,
  appData: [{
    link: '/flows/one/new/designer',
    code: 'designer',
    name: 'Designer',
    icon: 'pen-nib',
    views: []
  }, {
    link: '/flows',
    code: 'flows',
    name: 'flows',
    icon: 'sitemap',
    views: []
  }, {
    link: '/systems',
    code: 'systems',
    name: 'Systems',
    icon: 'server',
    views: []
  }, {
    link: '/gateway',
    code: 'gateway',
    name: 'API Gateway',
    icon: 'globe',
    views: []
  }, {
    link: '/credentials',
    code: 'credentials',
    name: 'Security Credentials',
    icon: 'key',
    views: []
  }],
  tabs: ['m1:OVERVIEW', 'm1:PRODUCT:VERSIONS'],
  activeModule: 'm1',
  activeView: 'm1:PRODUCT:VERSIONS',
  operationsModel: {},
  operationCache: {},
  navVisible: false,
  navParams: {}
})

export const getters = {
  isNavVisible (state) {
    return state.navVisible
  },
  navParams (state) {
    return state.navParams
  },
  availableOperations (state) {
    return state.availableOperations
  },
  operationsModel (state) {
    return state.operationsModel ? state.operationsModel : { properties: [] }
  }
}

export const mutations = {
  SET_ACTIVE_MODULE (state, tabId) {
    state.activeModule = tabId
  },
  ADD_TAB (state, tabId) {
    state.tabs.push(tabId)
  },
  SET_NAV_VISIBLE (state, data) {
    state.navVisible = data
  },
  SET_NAV_PARAMS (state, data) {
    state.navParams = data
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
  SET_AVAILABLE_OPERATIONS (state, list) {
    state.availableOperations = list || []
  },
  ADD_ACTIVE_OPERATION (state, { operation, after, inside }) {
    const total = state.appOperations.length
    const item = Utils.getObjectCopy(operation)
    item.id = uuidv4()
    item.properties = {}
    item.operations = []
    if (inside && inside !== 'root') {
      const target = Utils.findOperationById(state.appOperations, inside)
      if (target) {
        if (!target.operations) {
          target.operations = []
        }
        const subTotal = target.operations.length
        target.operations.splice((after || subTotal), 0, item)
      } else {
        state.appOperations.splice((after || total), 0, item)
      }
    } else {
      state.appOperations.splice((after || total), 0, item)
    }
  },
  REMOVE_ACTIVE_OPERATION (state, operationId) {
    state.appOperations = Utils.removeOperationById(state.appOperations, operationId)
  },
  SET_ACTIVE_OPERATIONS (state, list) {
    state.appOperations = list || []
  },
  UPDATE_ACTIVE_OPERATION (state, { id, data }) {
    const current = Utils.findOperationById(state.appOperations, id)
    if (current) {
      current.properties = data
    }
  },
  SET_OPERATIONS_MODEL (state, data) {
    state.operationsModel = data
  },
  SET_STORE_VALUE (state, { entryId, value }) {
    state[entryId] = value
  },
  ADD_ACTIVE_SYSTEM (state, { data }) {
    const item = {
      id: uuidv4(),
      properties: Utils.getObjectCopy(data)
    }
    state.availableSystems.push(item)
    state.latestId = item.id
  },
  UPDATE_ACTIVE_SYSTEM (state, { id, data }) {
    const current = state.availableSystems.find(tab => tab.id === id)
    current.properties = data
  },
  ADD_ACTIVE_FLOW (state, { data, list }) {
    const item = {
      id: uuidv4(),
      properties: data ? Utils.getObjectCopy(data) : [],
      list: list || []
    }
    state.availableFlows.push(item)
    state.latestId = item.id
  },
  UPDATE_ACTIVE_FLOW (state, { id, data, list }) {
    const current = state.availableFlows.find(tab => tab.id === id)
    if (current) {
      if (data) {
        current.properties = data
      }
      if (list) {
        current.list = list
      }
    }
  }
}

export const actions = {
  addOperation ({ commit, state }, { operation, after, inside }) {
    commit('ADD_ACTIVE_OPERATION', { operation, after, inside })
  },
  removeOperation ({ commit, state }, operationId) {
    commit('REMOVE_ACTIVE_OPERATION', operationId)
    this.$toast.success('Operation removed')
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
  },
  getAvailableOperations ({ commit, state }, { search }) {
    const filter = search && search.toLowerCase()
    const list = filter
      ? state.allOperations.filter((operator) => {
        return (operator.name && operator.name.toLowerCase().includes(filter)) ||
          (operator.version && operator.version.toLowerCase().includes(filter)) ||
          (operator.tags && operator.tags.find((tag) => {
            return tag.toLowerCase().includes(filter)
          }).length)
      })
      : state.allOperations
    commit('SET_AVAILABLE_OPERATIONS', list)
  },
  async getApiDetails ({ commit, state }, { path }) {
    commit('SET_OPERATIONS_MODEL', false)
    if (!state.operationCache[path]) {
      try {
        const data = await this.$axios.$get(`${path}get.json`)
        commit('SET_OPERATIONS_MODEL', data)
        state.operationCache[path] = data
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    } else {
      await commit('SET_OPERATIONS_MODEL', state.operationCache[path])
    }
  },
  updateStore ({ commit, state }, { entryId, value }) {
    commit('SET_STORE_VALUE', { entryId, value })
  },
  saveOperation ({ commit, state }, { entryId, id }) {
    commit('UPDATE_ACTIVE_OPERATION', { id, data: state[entryId] })
    this.$toast.success('Operation updated')
  },
  addSystem ({ commit, state }, { entryId }) {
    commit('ADD_ACTIVE_SYSTEM', { data: state[entryId] })
    this.$toast.success('System created')
    this.$router.push({ path: `/systems/edit?id=${state.latestId}` })
  },
  editSystem ({ commit, state }, { entryId, id }) {
    commit('UPDATE_ACTIVE_SYSTEM', { id, data: state[entryId] })
    this.$toast.success('System updated')
  },
  addFlowByDesign ({ commit, state, dispatch }, { list }) {
    dispatch('addFlow', { list })
  },
  addFlow ({ commit, state }, { entryId, list }) {
    commit('ADD_ACTIVE_FLOW', { data: entryId ? state[entryId] : null, list })
    this.$toast.success('Flow created')
    this.$router.push({ path: `/flows/edit?id=${state.latestId}` })
  },
  editFlow ({ commit, state }, { entryId, id, list }) {
    commit('UPDATE_ACTIVE_FLOW', { id, data: entryId ? state[entryId] : null, list: list || null })
    this.$toast.success('Flow updated')
  },
  setFlowDesign ({ commit, state }, { list }) {
    commit('SET_ACTIVE_OPERATIONS', list)
    this.$toast.success('Flow design loaded')
  },
  reorderAppOperations ({ commit, state }, { value, parent }) {
    if (parent !== 'root' && state.appOperations) {
      state.appOperations = state.appOperations.map((tab) => {
        treeWalk(tab, value, parent)
        return tab
      })
    } else if (parent === 'root' && state.appOperations) {
      state.appOperations = value
    }
    // this.$toast.success('Operations re-ordered')
  },
  closeNav ({ commit }) {
    commit('SET_NAV_VISIBLE', false)
    commit('SET_NAV_PARAMS', {})
  },
  showNav ({ commit }, data) {
    commit('SET_NAV_VISIBLE', true)
    commit('SET_NAV_PARAMS', data)
  }
}

function treeWalk (tab, value, parent) {
  if (tab && tab.id === parent) {
    tab.operations = value
  } else if (tab.operations) {
    tab.operations = tab.operations.map((subTab) => {
      treeWalk(subTab, value, parent)
      return subTab
    })
  }
}
