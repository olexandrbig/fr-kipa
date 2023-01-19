<template>
  <div class="app-root">
    <div class="page-wrap">
      <LayoutSiteNav />
      <LayoutSystemsNav />
      <LayoutActiveView>
        <nuxt />
      </LayoutActiveView>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutActiveView from '~/components/LayoutActiveView.vue'
import LayoutFooter from '~/components/LayoutFooter.vue'
import LayoutSystemsNav from '~/components/LayoutSystemsNav.vue'
import LayoutSiteNav from '~/components/LayoutSiteNav.vue'
export default {
  name: 'Systems',
  components: {
    LayoutActiveView,
    LayoutFooter,
    LayoutSystemsNav,
    LayoutSiteNav
  }
}
</script>
<style>
html, body, .app-root, #__nuxt, #__layout {
  height: 100%;
}
.page-wrap {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -30px;
  background: #efefef;
}
.page-wrap:after {
  content: "";
  display: block;
}
.site-footer, .page-wrap:after {
  height: 30px;
}
.site-footer {
  padding: 0 10px;
  color: #ffffff;
  position: relative;
}

</style>
