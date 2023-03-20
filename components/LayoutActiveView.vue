<template>
  <section class="active-view" :class="{'has-nav': navVisible}">
    <ClientOnly>
      <div class="module-details" :style="{height:`${mainHeight()}px`}">
        <div class="module-details-gap">
          <nuxt />
        </div>
      </div>
    </ClientOnly>
  </section>
</template>

<script>
export default {
  name: 'LayoutActiveView',
  computed: {
    navVisible () {
      return this.$store.state.navVisible
    }
  },
  methods: {
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 60
      }
    }
  }
}
</script>
<style>
.active-view{
  display: block;
  float: left;
  width: calc(100% - 700px);
  background: #f5f5f5;
  height: 100%;
  min-height: 100%;
}
.active-view.has-nav{
  width: calc(100% - 1000px);
}
.module-details{
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  float: left;
  padding: 10px 20px;
}
.module-details-gap{
  /*min-height: 1500px;*/
}
</style>
