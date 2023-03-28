<template>
  <div class="operations" :class="{'has-nav': navVisible}">
    <aside class="operation-nav">
      <div class="operation-actions">
        <button class="btn btn-primary pull-right" type="button" @click="addOrUpdateFLow()">
          Save to <span v-if="currentFlow && currentFlow.properties && currentFlow.properties.name">{{ currentFlow.properties.name }}</span><span v-else>flow</span>
        </button>
        <button v-if="!debugPending.length" class="btn btn-default pull-right m-r-3" type="button" @click="debug({data: activeOperations})">
          <span>Debug</span>
        </button>
        <button v-else class="btn btn-default pull-right m-r-3" type="button" @click="debug({force: true})">
          <span>Resume/Restart</span>
        </button>
        <h2 class="nav-title">
          <fa :icon="['fas', 'pen-nib']" /> Designer
        </h2>
      </div>
      <div class="operation-nav-list" :style="{height:`${mainHeight()}px`}">
        <ul class="operation-features text-center">
          <div class="w-90 inline-block">
            <NestedDraggable v-model="activeOperations" :parent="'root'" :parenti="0" />
          </div>
        </ul>
        <ul class="operation-features text-center">
          <li>
            <button v-shortkey.once="['tab']" type="button" class="add-action" @shortkey="showNav({flowId})" @click="showNav({flowId})">
              <fa :icon="['fas', 'plus']" class="add-action-icon" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
    <LayoutSideNav>
      <AddTrigger />
    </LayoutSideNav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'
import NestedDraggable from '~/components/NestedDraggable.vue'
import LayoutSideNav from '~/components/LayoutSideNav.vue'
import AddTrigger from '~/components/AddTrigger.vue'

export default {
  name: 'LayoutOperationsNav',
  components: {
    NestedDraggable,
    LayoutSideNav,
    AddTrigger
  },
  data () {
    return {
      activeMenus: [],
      activeOperationsList: [],
      dragOptions: {
        animation: 300,
        disabled: false,
        group: 'all'
      }
    }
  },
  computed: {
    ...mapGetters({
      debugPending: 'debug/pending'
    }),
    activeModuleCode () {
      return this.$store.state.activeModule
    },
    flowId () {
      return this.$route.params.id
    },
    navVisible () {
      return this.$store.state.navVisible
    },
    currentFlow () {
      const flowId = this.$route.params.id
      if (flowId) {
        return this.$store.state.availableFlows && this.$store.state.availableFlows.find((item) => {
          return item.id === flowId
        })
      }
      return false
    },
    activeOperations: {
      get () {
        return this.$store.state.appOperations
      }
    }
  },
  mounted () {
    // if (!this.activeOperations.length) {
    //   this.showNav(this.flowId)
    // }
  },
  methods: {
    ...mapActions({
      editFlow: 'editFlow',
      addFlowByDesign: 'addFlowByDesign',
      removeOperation: 'removeOperation',
      showNav: 'showNav',
      debug: 'debug/simulate'
    }),
    featureIsNotAvailable () {
      this.$toast.error('This feature is not yet available')
    },
    isActiveMenu (id) {
      return this.activeMenus.includes(id)
    },
    deactivateMenu (id) {
      this.activeMenus = this.activeMenus.filter((item) => {
        return item !== id
      })
    },
    activateMenu (id) {
      this.activeMenus.push(id)
    },
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    isActiveViewClass (viewCode) {
      return this.$store.state.activeView === `${this.activeModuleCode}:${viewCode}` ? 'active' : false
    },
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 30 - 90
      }
    },
    addOrUpdateFLow () {
      if (this.flowId !== 'new') {
        this.editFlow({ id: this.flowId, list: this.activeOperations })
      } else {
        this.addFlowByDesign({ list: this.activeOperations })
      }
    }
  }
}
</script>
<style>
.nav-title{
  padding: 8px 0;
}
.operation-actions{
  padding: 10px;
}
.add-action{
  margin: 10px auto;
  display: inline-block;
  font-size: 2em;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 38px;
  color: #1155cb;
  border: 1px solid #1155cb;
  cursor: pointer;
  padding: 0;
}
add-action-icon{
  font-size: 2em;
}
.operations{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 640px;
  overflow: hidden;
}
.operations.has-nav{
  width: 940px;
}
.operation-nav{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 640px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  border-right: 1px solid #1155cb;
}
.operation-nav-list{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  border-top: 1px solid #1155cb;
}
.operation-features{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
</style>
