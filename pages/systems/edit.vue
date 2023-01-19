<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil']" /> Edit system
      </h2>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="editSystem({ entryId: storePropName, id:system.id })">
        <p class="m-b-20">
          <b>Update system properties</b>
        </p>
        <FormBuilder :model="getFormData()" :fields="getFields()" :entry="storePropName" />
        <div>
          <button class="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'

export default {
  layout: 'systems',
  scrollToTop: true,
  async asyncData ({ store, route, redirect }) {
    const systemId = route.query.id
    const system = store.state.availableSystems.find((item) => {
      return item.id === systemId
    })
    if (system) {
      await store.dispatch('getApiDetails', { path: 'api/systems/model/' })
    } else {
      redirect('/systems/')
    }
  },
  data: () => ({
    formData: {},
    storePropName: 'editView'
  }),
  head () {
    return {
      title: 'Edit system'
    }
  },
  computed: {
    ...mapGetters({
      operationsModel: 'operationsModel'
    }),
    system () {
      const systemId = this.$route.query.id
      return this.$store.state.availableSystems.find((item) => {
        return item.id === systemId
      })
    }
  },
  watchQuery: ['id'],
  methods: {
    ...mapActions({
      editSystem: 'editSystem'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.system && this.system.properties) || {}
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
