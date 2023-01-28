<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'sitemap']" /> Flows
      </h2>
      <p>Welcome to flows list. Start building your application by clicking "Start design"</p>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'flows',
  scrollToTop: true,
  head () {
    const entity = 'flows'
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
