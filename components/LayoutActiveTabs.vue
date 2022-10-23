<template>
  <section class="active-tabs">
    <ul class="active-tab-list">
      <li v-for="tab in tabs" :key="tab" :class="isActiveViewClass(tab)" class="active-tab">
        <a class="active-tab-link pointer" @click="activateTab(tab)">
          <span class="active-tab-icon"><fa :icon="['fas', getTabIcon(tab)]" /></span>
          <span>{{ getTabName(tab) }}</span>
        </a>
        <span class="active-tab-close pointer" @click="closeTab(tab)"><fa :icon="['fas','times']" /></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LayoutActiveTabs',
  computed: {
    tabs () {
      return this.$store.state.tabs
    }
  },
  methods: {
    activateTab (tab) {
      const { view, module } = this.getInfo(tab)
      this.$store.dispatch('activateTab', `${module.code}:${view.code}`)
    },
    closeTab (tab) {
      const { view, module } = this.getInfo(tab)
      this.$store.dispatch('closeTab', `${module.code}:${view.code}`)
    },
    isActiveViewClass (tab) {
      const { view, module } = this.getInfo(tab)
      return this.$store.state.activeView === `${module.code}:${view.code}` ? 'active' : ''
    },
    getTabIcon (tab) {
      const { view } = this.getInfo(tab)
      return view.icon
    },
    getTabName (tab) {
      const { view } = this.getInfo(tab)
      return view.name
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
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 80
      }
    }
  }
}
</script>
<style>
.active-tabs{
  display: block;
  float: left;
  width: 100%;
  background: #ffffff;
  height: 30px;
}
.active-tab-list{
  list-style: none;
  padding: 0;
  float: left;
}
.active-tab{
  margin: 0 0 0 -1px;
  display: inline-block;
  background: #ffffff;
  padding: 0 10px;
  float: left;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  position: relative;
}
.active-tab-link{
  text-decoration: none;
  color: #555555;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  display: inline-block;
}
.active-tab.active{
  background: #f5f5f5;
  font-weight: 700;
}
.active-tab.active:after{
  content:' ';
  display: block;
  width: 100%;
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: #f5f5f5;
}
.active-tab.active .active-tab-link{
  background: #f5f5f5;
  font-weight: 700;
  color: #333333;
}
.active-tab-icon{
  color: #777777;
  vertical-align: middle;
}
.active-tab-close{
  color: #333333;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 5px;
}
</style>
