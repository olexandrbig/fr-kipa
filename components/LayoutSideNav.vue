<template>
  <aside class="side-nav" :class="navClass" :style="{height:`${mainHeight()}px`}">
    <!--    <div class="side-nav-icon" @click="closeNav()">-->
    <!--      <fa :icon="['fas','xmark']" class="side-nav-icon-svg" />-->
    <!--    </div>-->
    <div class="side-nav-content">
      <slot />
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LayoutSiteNav',
  data () {
    return {
      navClass: ''
    }
  },
  methods: {
    ...mapActions({
      closeNav: 'closeNav'
    }),
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 60
      }
    }
  }
}
</script>
<style>
.side-nav{
  float: left;
  height: 100%;
  width: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  z-index: 1100;
  border-left: 1px solid #1155cb;
  border-right: 1px solid #1155cb;
  display: block;
}
.side-nav-content{
  float: left;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  left: 0;
  top: 0;
  padding: 5px;
  display: block;
}
.side-nav-icon{
  position: absolute;
  left: 249px;
  top: 10px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #1155cb;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  z-index: 2;
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
