export const state = () => ({
  current: null,
  pending: [],
  completed: [],
  failed: [],
  logs: [],
  options: {}
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
  options (state) {
    return state.options
  },
  logs (state) {
    return state.logs
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
  PUSH_LOG (state, data) {
    state.logs.push(data)
  },
  SET_PENDING (state, data) {
    state.pending = data
  },
  SET_COMPLETED (state, data) {
    state.completed = data
  },
  SET_OPTIONS (state, data) {
    state.options = data
  },
  SET_FAILED (state, data) {
    state.failed = data
  },
  SET_CURRENT (state, data) {
    state.current = data
  },
  SET_LOGS (state, data) {
    state.logs = data
  }
}

export const actions = {
  setCompleted ({ commit }, data) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_COMPLETED', data)
    commit('PUSH_LOG', `Successfully completed ${data}`)
  },
  setFailed ({ commit }, data) {
    commit('REMOVE_PENDING', data)
    commit('PUSH_FAILED', data)
    commit('PUSH_LOG', `Failed at ${data}`)
  },
  simulate ({ commit, dispatch, getters }, { data, force, breakAll }) {
    if (data) {
      const list = []
      data.forEach((subTab) => {
        treeToArray(list, subTab)
      })
      commit('SET_PENDING', list.map((item) => {
        return item.id
      }))
      commit('SET_COMPLETED', [])
      commit('SET_OPTIONS', { breakAll })
      commit('SET_FAILED', [])
      commit('SET_LOGS', [])
      commit('PUSH_LOG', 'Started debug')
      const flowId = this.$router.currentRoute.params.id
      this.$router.push({ path: `/flows/one/${flowId}/designer/debug` })
    }
    const total = getters.pending.length
    if (total) {
      const current = getters.pending[0]
      commit('SET_CURRENT', current)
      const breaks = getters.breaks
      const hasBreak = breaks.includes(current)
      if ((hasBreak || breakAll) && !force) {
        // eslint-disable-next-line no-console
        commit('PUSH_LOG', `Waiting for resume at ${current}`)
      } else {
        if (hasBreak && force) {
          commit('PUSH_LOG', `Resuming from ${current}`)
        }
        setTimeout(() => {
          const current = getters.current
          dispatch('setCompleted', current)
          dispatch('simulate', { breakAll })
        }, getRandomNumber(500, 1500))
      }
    } else {
      commit('PUSH_LOG', 'Finished debug')
    }
  }
}

function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function treeToArray (list, item) {
  list.push(item)
  if (item.operations) {
    item.operations.forEach((subTab) => {
      treeToArray(list, subTab)
    })
  }
}
