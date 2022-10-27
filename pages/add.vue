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
      <ul class="available-operations">
        <li
            v-for="operation in availableOperations"
            :key="operation.id"
            class="available-operation pointer"
            @click="addOperation({operation, after: $route.query.after})">
          <p>
            <span class="feature-icon" :title="operation.category"><fa :icon="['fas', categoryToIcon(operation.category)]" /></span>
            <span>{{ operation.name }} {{ operation.version }}</span>
          </p>
          <p v-if="operation.description">
            <small>
              <fa :icon="['fas','circle-info']" /> {{ operation.description }}
            </small>
          </p>
          <p v-if="operation.resultDescription">
            <small>
              <fa :icon="['fas','rotate-left']" /> {{ operation.resultDescription }}
            </small>
          </p>
          <p v-if="operation.searchTags">
            <small>
              <fa :icon="['fas','tags']" /> {{ operation.searchTags.join(', ') }}
            </small>
          </p>
        </li>
      </ul>
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
  margin-bottom: 20px;
}
</style>
