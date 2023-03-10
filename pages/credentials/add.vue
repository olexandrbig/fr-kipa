<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Create credential
      </h2>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="addCredential({ entryId: storePropName })">
        <p class="m-b-20">
          <b>Define credential properties</b>
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
  layout: 'gateways',
  scrollToTop: true,
  async asyncData ({ store }) {
    await store.dispatch('getApiDetails', { path: 'api/credentials/model/' })
  },
  data: () => ({
    formData: {},
    storePropName: 'addCredential'
  }),
  head () {
    return {
      title: 'Add gateway'
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
      addCredential: 'addCredential'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.credential && this.credential.properties) || {}
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
