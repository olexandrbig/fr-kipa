<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'list']" /> View flow data
      </h2>
      <p class="m-b-20">
        Data available inside pipeline
      </p>
      <ul v-if="pipelineData && pipelineData.length" class="available-operations">
        <tree-view :data="pipelineData" :options="{maxDepth: 3}"></tree-view>
      </ul>
      <div v-else>
        <fa :icon="['fas','circle-info']" /> No result found available in pipeline
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      pipelineData: 'appOperations'
    }),
    navParams () {
      return this.$store.getters.navParams
    }
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    })
  }
}
</script>
<style>
.available-operations{
  list-style: none;
  padding: 0;
}
.available-operation{
  margin-bottom: 10px;
}
</style>
