<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil']" /> Edit operation
      </h2>
      <p>Modify operation properties</p>
    </div>
  </div>
</template>

<script>
import { Utils } from '@/services/Utils'

export default {
  scrollToTop: true,
  head () {
    return {
      title: 'Add trigger'
    }
  },
  methods: {
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
