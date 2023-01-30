<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil']" /> Edit flow
      </h2>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="editFlow({ entryId: storePropName, id:flow.id })">
        <p class="m-b-20">
          <b>Update flow properties</b>
        </p>
        <FormBuilder :model="getFormData()" :fields="getFields()" :entry="storePropName" />
        <div>
          <button class="btn btn-primary" type="submit">
            Save
          </button>
          <nuxt-link :to="`/flows/one/${flow.id}/designer/`" class="btn btn-default">
            View design
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'

export default {
  layout: 'flows',
  scrollToTop: true,
  async asyncData ({ store, route, redirect }) {
    const flowId = route.query.id
    const flow = store.state.availableFlows.find((item) => {
      return item.id === flowId
    })
    if (flow) {
      await store.dispatch('getApiDetails', { path: 'api/flows/model/' })
    } else {
      redirect('/flows/')
    }
  },
  data: () => ({
    formData: {},
    storePropName: 'editView'
  }),
  head () {
    return {
      title: 'Edit flow'
    }
  },
  computed: {
    ...mapGetters({
      operationsModel: 'operationsModel'
    }),
    flow () {
      const flowId = this.$route.query.id
      return this.$store.state.availableFlows.find((item) => {
        return item.id === flowId
      })
    }
  },
  watchQuery: ['id'],
  methods: {
    ...mapActions({
      editFlow: 'editFlow'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.flow && this.flow.properties) || {}
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
