<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'server']" /> Systems
      </h2>
      <p>Welcome to systems list. Start building your application by clicking "Create system"</p>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'systems',
  scrollToTop: true,
  head () {
    const entity = 'systems'
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
