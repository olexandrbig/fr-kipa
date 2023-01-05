<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Create system
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '~/services/Utils'

export default {
  scrollToTop: true,
  async fetch () {
    const params = {
      search: this.$refs.search && this.$refs.search.value
    }
    await this.$store.dispatch('getAvailableOperations', params)
  },
  head () {
    return {
      title: 'Add trigger'
    }
  },
  computed: {
    ...mapGetters({
      availableOperations: 'availableOperations'
    })
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    }),
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
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
