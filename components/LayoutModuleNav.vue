<template>
  <aside class="module-nav" :style="{height:`${mainHeight()}px`}">
    <div class="module-nav-inner">
      <h1 class="module-nav-title">
        {{ activeModuleData.name }}
      </h1>
    </div>
    <ul class="module-features">
      <li v-for="view in activeModuleData.views" :key="view.code" :class="isActiveViewClass(view.code)" class="module-feature">
        <a class="feature-link pointer" @click="activateView(view)">
          <span class="feature-icon"><fa :icon="['fas', view.icon]" /></span>
          <span>{{ view.name }}</span>
          <span v-if="view.views" class="feature-expand pointer"><fa :icon="['fas', isViewsOpenedIcon(view.code)]" /></span>
        </a>
        <ul v-if="view.views && isViewsOpened(view.code)" class="module-sublist list-unstyled">
          <li v-for="subView in view.views" :key="subView.code" :class="isActiveViewClass(subView.code)" class="module-subfeature">
            <a class="feature-link pointer" @click="activateView(subView)">
              <span class="feature-icon"><fa :icon="['fas', subView.icon]" /></span>
              <span>{{ subView.name }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LayoutModuleNav',
  data () {
    return {
      openedViews: []
    }
  },
  computed: {
    activeModuleCode () {
      return this.$store.state.activeModule
    },
    activeModuleData () {
      const moduleCode = this.activeModuleCode
      if (moduleCode) {
        const appData = this.$store.state.appData
        return appData.find(m => m.code === moduleCode)
      }
      return false
    }
  },
  methods: {
    activateView (view) {
      if (view.views) {
        this.toggleViews(view.code)
      } else {
        this.$store.dispatch('activateTab', `${this.activeModuleCode}:${view.code}`)
      }
    },
    toggleViews (viewCode) {
      this.isViewsOpened(viewCode) ? this.openedViews = this.openedViews.filter(view => view !== viewCode) : this.openedViews.push(viewCode)
    },
    isViewsOpened (viewCode) {
      return this.openedViews.includes(viewCode)
    },
    isViewsOpenedIcon (viewCode) {
      return this.openedViews.includes(viewCode) ? 'chevron-up' : 'chevron-right'
    },
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
  border-right: 1px solid #cccccc;
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
  border-bottom: 1px solid #cccccc;
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
  color: #555555;
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
