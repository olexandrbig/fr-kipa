export const state = () => ({
  current: null,
  pending: [],
  completed: [],
  failed: []
})

export const getters = {
  pending (state) {
    return state.pending
  },
  completed (state) {
    return state.completed
  },
  failed (state) {
    return state.failed
  },
  current (state) {
    return state.current
  }
}

export const mutations = {
  REMOVE_PENDING (state, data) {
    const current = state.pending
    const currentIndex = current.indexOf(data)
    if (current && currentIndex > -1) {
      state.pending.splice(currentIndex, 1)
    }
  },
  PUSH_COMPLETED (state, data) {
    state.completed.push(data)
  },
  PUSH_FAILED (state, data) {
    state.failed.push(data)
  },
  SET_PENDING (state, data) {
    state.pending = data
  },
  SET_CURRENT (state, data) {
    state.current = data
  }
}

export const actions = {
  setCompleted ({ commit }, { data }) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_COMPLETED', data)
  },
  setFailed ({ commit }, { data }) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_FAILED', data)
  },
  simulate ({ commit, dispatch, getters }, { data, force }) {
    if (data) {
      commit('SET_PENDING', data)
    }
    const total = getters.pending.length
    if (total) {
      commit('SET_CURRENT', getters.pending[0])
      const hasBreak = false
      if (hasBreak && !force) {
        // eslint-disable-next-line no-console
        console.log('> Break reached')
      } else {
        setTimeout(() => {
          if (total === 2) {
            // For demo fail when 2 steps left
            dispatch('setFailed', getters.current)
          } else {
            dispatch('setCompleted', getters.current)
            dispatch('simulate')
          }
        }, 1000)
      }
    }
  }
}
