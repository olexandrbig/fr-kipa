<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Create flow
      </h2>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="addFlow({ entryId: storePropName })">
        <p class="m-b-20">
          <b>Define flow properties</b>
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
  layout: 'flows',
  scrollToTop: true,
  async asyncData ({ store }) {
    await store.dispatch('getApiDetails', { path: 'api/flows/model/' })
  },
  data: () => ({
    formData: {},
    storePropName: 'addFlow'
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
      addFlow: 'addFlow'
    }),
    getFields () {
      return (this.operationsModel && this.operationsModel.properties) || []
    },
    getFormData () {
      return (this.flow && this.flow.properties) || {}
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
