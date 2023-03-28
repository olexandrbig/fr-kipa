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
  },
  breaks (state, getters, rootState) {
    return rootState.activeBreakpoints
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
  SET_COMPLETED (state, data) {
    state.completed = data
  },
  SET_FAILED (state, data) {
    state.failed = data
  },
  SET_CURRENT (state, data) {
    state.current = data
  }
}

export const actions = {
  setCompleted ({ commit }, data) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_COMPLETED', data)
  },
  setFailed ({ commit }, data) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_FAILED', data)
  },
  simulate ({ commit, dispatch, getters }, { data, force }) {
    if (data) {
      const list = []
      data.forEach((subTab) => {
        treeToArray(list, subTab)
      })
      commit('SET_PENDING', list.map((item) => {
        return item.id
      }))
      commit('SET_COMPLETED', [])
      commit('SET_FAILED', [])
    }
    const total = getters.pending.length
    if (total) {
      const current = getters.pending[0]
      commit('SET_CURRENT', current)
      const breaks = getters.breaks
      const hasBreak = breaks.includes(current)
      if (hasBreak && !force) {
        // eslint-disable-next-line no-console
        console.log('> Break reached')
      } else {
        setTimeout(() => {
          const current = getters.current
          if (total === 2) {
            // For demo fail when 2 steps left
            console.log('> Fail reached')
            dispatch('setFailed', current)
          } else {
            dispatch('setCompleted', current)
            dispatch('simulate', {})
          }
        }, 1000)
      }
    }
  }
}

function treeToArray (list, item) {
  list.push(item)
  if (item.operations) {
    item.operations.forEach((subTab) => {
      treeToArray(list, subTab)
    })
  }
}
