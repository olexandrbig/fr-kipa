<template>
  <div>
    <div class="clearfix relative">
      <div class="center-info-block">
        <fa class="center-info-block-icon" :icon="['fas', 'globe']" />
        <h2 class="center-info-block-title">
          API Gateway
        </h2>
        <p class="center-info-block-description">
          Start building your application by clicking "Create gateway"
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'gateway',
  scrollToTop: true,
  head () {
    const entity = 'gateway'
    const page = `${entity}`
    const title = this.$t(`${page}.title`)
    const description = this.$t(`${page}.description`)
    return {
      title,
      meta: [
        { hid: 'og:site_name', name: 'og:site_name', content: title },
        { hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.path },
        { hid: 'name', itemprop: 'name', content: title },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'descriptionItem', itemprop: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + require('~/assets/pic/logo.png') }
      ]
    }
  }
}
</script>
