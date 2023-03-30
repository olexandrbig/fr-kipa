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
      <div class="console">
        <p v-for="log in logs" :key="log">
          > {{ log }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
      failed: 'debug/failed'
    })
  },
  watchQuery: ['id']
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
