<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Add a trigger
      </h2>
      <p class="m-b-20">Choose an operation</p>
      <ul class="available-operations">
        <li v-for="operation in availableOperations" :key="operation.id" @click="addOperation(operation)" class="available-operation pointer">
          <p>
            <span class="feature-icon" :title="operation.category"><fa :icon="['fas', categoryToIcon(operation.category)]" /></span>
            <span>{{ operation.name }} {{ operation.version }}</span>
          </p>
          <p v-if="operation.description">
            <small>
              <fa :icon="['fas','circle-info']"></fa> {{ operation.description }}
            </small>
          </p>
          <p v-if="operation.resultDescription">
            <small>
              <fa :icon="['fas','rotate-left']"></fa> {{ operation.resultDescription }}
            </small>
          </p>
          <p v-if="operation.searchTags">
            <small>
              <fa :icon="['fas','tags']"></fa> {{ operation.searchTags.join(', ') }}
            </small>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  scrollToTop: true,
  head () {
    return {
      title: 'Add trigger'
    }
  },
  computed: {
    availableOperations () {
      return this.$store.state.availableOperations
    }
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    }),
    categoryToIcon (category) {
      let icon = ''
      switch (category) {
        case 'FILE':
          icon = 'folder-tree'
          break
        case 'MAPPING':
          icon = 'sliders'
          break
        case 'KAFKA':
          icon = 'atom'
          break
        default:
          icon = 'plus'
      }
      return icon
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
  margin-bottom: 20px;
}
</style>
