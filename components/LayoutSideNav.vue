<template>
  <aside v-if="isNavVisible" class="side-nav" :style="{height:`${mainHeight()}px`}">
    <div class="side-nav-icon" @click="closeNav()">
      <fa :icon="['fas','xmark']" class="side-nav-icon-svg" />
    </div>
    <div>
      <slot />
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LayoutSiteNav',
  computed: {
    isNavVisible () {
      return this.$store.getters.isNavVisible
    }
  },
  methods: {
    ...mapActions({
      closeNav: 'closeNav'
    }),
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 30
      }
    }
  }
}
</script>
<style>
.side-nav{
  float: left;
  height: 100%;
  min-height: 100%;
  width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  padding: 5px;
  position: fixed;
  right: -300px;
  top: 0;
  z-index: 1100;
  border-left: 1px solid #1155cb;
  display: block;
  -webkit-animation: slide 0.5s forwards;
  animation: slide 0.5s forwards;
}
.side-nav-icon{
  position: fixed;
  right: -290px;
  top: 10px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #1155cb;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  z-index: 2;
  -webkit-animation: slideBtn 0.5s forwards;
  animation: slideBtn 0.5s forwards;
}
.side-nav-icon-svg{
  margin-top: 4px;
  font-size: 20px;
}
@-webkit-keyframes slide {
  100% { right: 0; }
}
@keyframes slide {
  100% { right: 0; }
}
@-webkit-keyframes slideBtn {
  100% { right: 20px; }
}
@keyframes slideBtn {
  100% { right: 20px; }
}
</style>
