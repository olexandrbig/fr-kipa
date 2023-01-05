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
  appData: [{
    link: '/designer',
    code: 'designer',
    name: 'Designer',
    icon: 'pen-nib',
    views: []
  }, {
    link: '/systems',
    code: 'systems',
    name: 'Systems',
    icon: 'sitemap',
    views: []
  }],
  tabs: ['m1:OVERVIEW', 'm1:PRODUCT:VERSIONS'],
  activeModule: 'm1',
  activeView: 'm1:PRODUCT:VERSIONS',
  operationsModel: {},
  operationCache: {}
})

export const getters = {
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
    state.availableOperations = list
  },
  ADD_ACTIVE_OPERATION (state, { operation, after }) {
    const total = state.appOperations.length
    const item = Utils.getObjectCopy(operation)
    item.id = uuidv4()
    item.properties = {}
    state.appOperations.splice((after || total), 0, item)
  },
  REMOVE_ACTIVE_OPERATION (state, operationId) {
    state.appOperations = state.appOperations.filter(tab => tab.id !== operationId)
  },
  UPDATE_ACTIVE_OPERATION (state, { id, data }) {
    const current = state.appOperations.find(tab => tab.id === id)
    current.properties = data
  },
  SET_OPERATIONS_MODEL (state, data) {
    state.operationsModel = data
  },
  SET_STORE_VALUE (state, { entryId, value }) {
    state[entryId] = value
  }
}

export const actions = {
  addOperation ({ commit, state }, { operation, after }) {
    commit('ADD_ACTIVE_OPERATION', { operation, after })
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
  }
}
