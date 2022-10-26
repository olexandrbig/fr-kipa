<template>
  <aside class="module-nav" :style="{height:`${mainHeight()}px`}">
    <ul class="module-features text-center">
      <li v-if="!activeOperations.length">
        <nuxt-link to="/add">Chose an operation</nuxt-link>
      </li>
      <li v-for="operation in activeOperations" :key="operation.id" :class="isActiveViewClass(operation.id)" class="module-feature">
        <nuxt-link :to="`/edit?id=${operation.id}`" class="feature-link pointer">
          <span class="feature-icon"><fa :icon="['fas', operation.icon]" /></span>
          <span>{{ operation.name }}</span>
        </nuxt-link>
      </li>
      <li v-if="activeOperations.length">
        <nuxt-link to="/add">Next step</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LayoutOperationsNav',
  computed: {
    activeModuleCode () {
      return this.$store.state.activeModule
    },
    activeOperations () {
      return this.$store.state.appOperations
    }
  },
  methods: {
    isActiveViewClass (viewCode) {
      return this.$store.state.activeView === `${this.activeModuleCode}:${viewCode}` ? 'active' : false
    },
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 30
      }
    }
  }
}
</script>
<style>
.module-nav{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  border-right: 1px solid #1155cb;
}
.module-nav-title{
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 20px;

}
.module-nav-inner{
  padding: 20px;
}
.module-features{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
.module-feature{
  display: inline-block;
  background: #ffffff;
  float: left;
  border-bottom: 1px solid #1155cb;
  position: relative;
  width: 100%;
}
.module-features > .module-feature > .feature-link {
  text-transform: uppercase;
  font-weight: 700;
}
.module-subfeature{
  display: inline-block;
  float: left;
  position: relative;
  width: 100%;
}
.feature-link{
  text-decoration: none;
  color: #043558;
  line-height: 30px;
  padding: 10px 20px;
  display: inline-block;
  width: 100%;
}
.module-feature.active .feature-link,
.module-subfeature.active .feature-link,
.feature-link:hover{
  background: #f5f5f5;
}
.module-sublist .feature-link{
  padding-left: 40px;
}
.module-sublist{
  padding: 0;
}
.feature-icon{
  font-size: 1.3em;
  vertical-align: middle;
  width: 20px;
  text-align: center;
  display: inline-block;
}
.feature-expand{
  float: right;
}
</style>
