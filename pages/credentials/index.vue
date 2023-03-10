<template>
  <div>
    <div class="clearfix relative">
      <div class="center-info-block">
        <fa class="center-info-block-icon" :icon="['fas', 'key']" />
        <h2 class="center-info-block-title">
          Security Credentials
        </h2>
        <p class="center-info-block-description">
          Start building your application by clicking "Create credential"
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'credentials',
  scrollToTop: true,
  head () {
    const entity = 'credentials'
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

<style>
.center-info-block{
  margin: 0 auto;
  display: inline-block;
  text-align: center;
  padding: 100px 0;
  width: 100%;
}
.center-info-block-icon{
  font-size: 60px;
  margin-bottom: 20px;
}
.center-info-block-title{
  font-size: 30px;
  margin-bottom: 20px;
}
</style>
