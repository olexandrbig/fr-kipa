<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Create system
      </h2>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="addSystem({ entryId: storePropName })">
        <p class="m-b-20">
          <b>Define system properties</b>
        </p>
        <FormBuilder :model="getFormData()" :fields="getFields()" :entry="storePropName" />
        <div>
          <button class="btn btn-primary" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FormBuilder from '~/components/FormBuilder.vue'

export default {
  components: {
    FormBuilder
  },
  layout: 'systems',
  scrollToTop: true,
  async asyncData ({ store }) {
    await store.dispatch('getApiDetails', { path: 'api/systems/model/' })
  },
  data: () => ({
    formData: {},
    storePropName: 'addSystem'
  }),
  head () {
    return {
      title: 'Add trigger'
    }
  },
  computed: {
    ...mapGetters({
      operationsModel: 'operationsModel'
    })
  },
  watchQuery: ['id'],
  methods: {
    ...mapActions({
      addSystem: 'addSystem'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.system && this.system.properties) || {}
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
