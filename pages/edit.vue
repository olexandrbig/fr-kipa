<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'pencil-alt']" /> Edit operation
      </h2>
      <p>Modify operation properties</p>
    </div>
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  head () {
    return {
      title: 'Add trigger'
    }
  },
  methods: {
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
