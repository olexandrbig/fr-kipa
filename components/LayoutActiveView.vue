<template>
  <section class="active-view">
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
  width: calc(100% - 460px);
  background: #f5f5f5;
  height: 100%;
  min-height: 100%;
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
