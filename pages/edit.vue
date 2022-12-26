<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil']" /> Edit operation
      </h2>
      <p class="m-b-20">
        Modify operation properties
      </p>
      <form v-if="getFields().length" class="m-b-20" @submit.prevent="saveOperation({ entryId: storePropName })">
        <FormBuilder :model="formData" :fields="getFields()" :entry="storePropName" />
        <div>
          <button class="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
      <div v-if="operation" class="operation-item">
        <div class="operation-title">
          <span class="feature-icon" :title="operation.category"><fa :icon="['fas', categoryToIcon(operation.category)]" /></span>
          <span>{{ operation.name }} ({{ operation.version }})</span>
        </div>
        <p v-if="operation.description" class="operation-text">
          <small>
            <fa :icon="['fas','circle-info']" /> {{ operation.description }}
          </small>
        </p>
        <p v-if="operation.resultDescription" class="operation-text">
          <small>
            <fa :icon="['fas','rotate-left']" /> {{ operation.resultDescription }}
          </small>
        </p>
        <p v-if="operation.searchTags" class="operation-text">
          <small>
            <fa :icon="['fas','tags']" /> {{ operation.searchTags.join(', ') }}
          </small>
        </p>
      </div>
      <div v-else>
        <fa :icon="['fas','circle-info']" /> Operation is not found
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'
import FormBuilder from '~/components/FormBuilder.vue'

export default {
  components: {
    FormBuilder
  },
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
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
