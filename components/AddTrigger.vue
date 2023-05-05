<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'plus']" /> Add a trigger
      </h2>
      <p class="m-b-20">
        Choose an operation
      </p>
      <input
        id="search"
        ref="search"
        type="text"
        autocomplete="off"
        class="form-control m-b-10"
        placeholder="Find operation"
        @input="$fetch"
      >
      <ul v-if="availableOperations.length" class="available-operations">
        <draggable
          :value="availableOperations"
          v-bind="dragOptions"
          ghost-class="moving-card"
          @input="emitter"
        >
          <li
            v-for="operation in availableOperations"
            :key="operation.id"
            class="available-operation pointer"
            @click="addOperation({operation, after: navParams.after, inside: navParams.inside, switchCase: navParams.switchCase})"
          >
            <div class="operation-item">
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
          </li>
        </draggable>
      </ul>
      <div v-else>
        <fa :icon="['fas','circle-info']" /> No result found for specified request
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '~/services/Utils'

export default {
  data () {
    return {
      dragOptions: {
        // animation: 300,
        disabled: false,
        group: 'all'
      }
    }
  },
  async fetch () {
    const params = {
      search: this.$refs.search && this.$refs.search.value
    }
    await this.$store.dispatch('getAvailableOperations', params)
  },
  computed: {
    ...mapGetters({
      availableOperations: 'availableOperations'
    }),
    navParams () {
      return this.$store.getters.navParams
    }
  },
  methods: {
    ...mapActions({
      addOperation: 'addOperation'
    }),
    emitter (value) {
      this.$store.dispatch('dropOperations', {
        value,
        parent: this.parent
      })
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
<style>
.available-operations{
  list-style: none;
  padding: 0;
}
.available-operation{
  margin-bottom: 10px;
}
</style>
