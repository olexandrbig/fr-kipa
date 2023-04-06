<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'circle-info']" /> Debug
      </h2>
      <table class="table-borderless">
        <tr>
          <th>Pending</th>
          <th>Completed</th>
          <th>Failed</th>
        </tr>
        <tr>
          <td>{{ pending.length }}</td>
          <td>{{ completed.length }}</td>
          <td>{{ failed.length }}</td>
        </tr>
      </table>
      <button
        v-if="pending.length"
        v-shortkey.once="['enter']"
        class="btn btn-default m-t-10 m-b-10"
        type="button"
        @shortkey="debug({...options, force: true})"
        @click="debug({...options, force: true})"
      >
        <span>Resume</span>
      </button>
      <button v-else class="btn btn-primary m-t-10 m-b-10 disabled" type="button" disabled="disabled">
        <span>Resume</span>
      </button>
      <div class="console">
        <p v-for="log in logs" :key="log">
          > {{ log }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  data: () => ({
    formData: {},
    storePropName: 'editView'
  }),
  head () {
    return {
      title: 'Debug'
    }
  },
  computed: {
    ...mapGetters({
      current: 'debug/current',
      pending: 'debug/pending',
      completed: 'debug/completed',
      logs: 'debug/logs',
      failed: 'debug/failed',
      options: 'debug/options'
    })
  },
  watchQuery: ['id'],
  methods: {
    ...mapActions({
      debug: 'debug/simulate'
    })
  }
}
</script>
<style>
.console {
  background-color: black;
  width: 100%;
  margin: auto;
  height: auto;
  min-height: 300px;
  border-radius: 10px;
  padding: 10px;
  text-align: start;
  color: #eeeeee;
}
.console p {
  margin-bottom: 5px;
}
</style>
