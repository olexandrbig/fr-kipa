<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil']" /> Edit system
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'

export default {
  scrollToTop: true,
  async asyncData ({ store, route, redirect }) {
    const operationId = route.query.id
    const operation = store.state.appOperations.find((item) => {
      return item.id === operationId
    })
    if (operation) {
      await store.dispatch('getApiDetails', { path: `api/operations/model/${operation.key}/` })
    } else {
      redirect('/')
    }
  },
  data: () => ({
    formData: {},
    storePropName: 'editView'
  }),
  head () {
    return {
      title: 'Add trigger'
    }
  },
  computed: {
    ...mapGetters({
      operationsModel: 'operationsModel'
    }),
    operation () {
      const operationId = this.$route.query.id
      return this.$store.state.appOperations.find((item) => {
        return item.id === operationId
      })
    }
  },
  watchQuery: ['id'],
  methods: {
    ...mapActions({
      saveOperation: 'saveOperation'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.operation && this.operation.properties) || {}
    },
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
