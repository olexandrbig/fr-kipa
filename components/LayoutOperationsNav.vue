<template>
  <aside class="operation-nav">
    <div class="operation-actions">
      <button class="btn btn-primary" type="button" @click="addOrUpdateFLow()">
        Save to <span v-if="currentFlow && currentFlow.properties && currentFlow.properties.name">{{ currentFlow.properties.name }}</span><span v-else>flow</span>
      </button>
      <button class="btn btn-default pull-right" type="button" @click="featureIsNotAvailable()">
        Import
      </button>
    </div>
    <div class="operation-nav-list" :style="{height:`${mainHeight()}px`}">
      <ul class="operation-features text-center">
        <div class="w-80 inline-block">
          <NestedDraggable v-model="activeOperations" :parent="'root'" :parenti="0" />
        </div>
      </ul>
      <ul class="operation-features text-center">
        <li>
          <nuxt-link class="add-action" :to="`/flows/one/${flowId}/designer/add`">
            <fa :icon="['fas', 'plus']" class="add-action-icon" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'
import { Utils } from '@/services/Utils'
import NestedDraggable from '~/components/NestedDraggable.vue'

export default {
  name: 'LayoutOperationsNav',
  components: {
    NestedDraggable
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
    activeModuleCode () {
      return this.$store.state.activeModule
    },
    flowId () {
      return this.$route.params.id
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
  methods: {
    ...mapActions({
      editFlow: 'editFlow',
      addFlowByDesign: 'addFlowByDesign',
      removeOperation: 'removeOperation'
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
}
add-action-icon{
  font-size: 2em;
}
.operation-nav{
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
.operation-nav-list{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 400px;
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
