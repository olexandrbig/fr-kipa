<template>
  <div>
    <div class="clearfix relative">
      <h2 class="view-title">
        <fa :icon="['fas', 'boxes-stacked']" /> Designer
      </h2>
      <p>Welcome to workflow designer. Start building your application by clicking "Chose an operation"</p>
    </div>
  </div>
</template>

<script>

export default {
  scrollToTop: true,
  head () {
    return {
      title: this.$t('index.title'),
      meta: [
        { hid: 'og:site_name', name: 'og:site_name', content: this.$t('index.title') },
        { hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.path },
        { hid: 'name', itemprop: 'name', content: this.$t('index.title') },
        { hid: 'og:title', property: 'og:title', content: this.$t('index.title') },
        { hid: 'description', name: 'description', content: this.$t('index.description') },
        { hid: 'descriptionItem', itemprop: 'description', content: this.$t('index.description') },
        { hid: 'og:description', property: 'og:description', content: this.$t('index.description') },
        { hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + require('~/assets/pic/logo.png') }
      ]
    }
  },
  methods: {
    getViewIcon () {
      const { view } = this.getInfo(this.$store.state.activeView)
      return view.icon
    },
    getViewName () {
      const { view, module } = this.getInfo(this.$store.state.activeView)
      return `${module.name} / ${view.name}`
    },
    getViewType () {
      const { view } = this.getInfo(this.$store.state.activeView)
      return view.type
    },
    getInfo (tab) {
      const parts = tab.split(':')
      const moduleCode = parts[0]
      const viewCode = parts[1]
      const subViewCode = parts[2]
      const appData = this.$store.state.appData
      const module = appData.find(m => m.code === moduleCode)
      let view = null
      if (subViewCode) {
        const parent = module.views.find(v => v.code === viewCode)
        view = parent.views.find(v => v.code === `${viewCode}:${subViewCode}`)
      } else {
        view = module.views.find(v => v.code === viewCode)
      }
      return { module, view }
    },
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    }
  }
}
</script>
