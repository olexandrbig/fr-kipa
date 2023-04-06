<template>
  <draggable
    :value="internalVal"
    v-bind="dragOptions"
    ghost-class="moving-card"
    @input="emitter"
  >
    <li
      v-for="(operation, index) in internalVal"
      :key="operation.id"
      :class="isActiveViewClass(operation.id)"
      class="operation-feature"
    >
      <span
        class="operation-breakpoint"
        title="Toggle breakpoint"
        :class="isActiveBreakpointClass(operation.id)"
        @click="toggleBreakpoint(operation.id)"
      />
      <nuxt-link :to="`/flows/one/${flowId}/designer/edit?id=${operation.id}`">
        <div class="operation-item m-t-30 pointer">
          <div class="operation-title relative">
            <span class="pull-right relative">
              <fa
                v-if="isActiveMenu(operation.id)"
                key="on"
                :class="'feature-icon'"
                :icon="['fas', 'xmark']"
                @click="deactivateMenu(operation.id)"
              />
              <fa
                v-else
                key="off"
                :class="'feature-icon'"
                :icon="['fas', 'ellipsis-vertical']"
                @click="activateMenu(operation.id)"
              />
              <transition name="dropdown">
                <div
                  v-if="isActiveMenu(operation.id)"
                  class="dropdown-menu"
                  :class="{ active: isActiveMenu(operation.id) }"
                >
                  <ul class="dropdown-menu-nav">
                    <li class="dropdown-menu-item">
                      <a href class="dropdown-menu-link" title="Remove" @click="removeOperation(operation.id)">
                        <div class="dropdown-menu-text">Remove</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </transition>
            </span>
            <span class="feature-icon"><fa :icon="['fas', categoryToIcon(operation.category)]" /></span>
            <span class="text-ellipsis">{{ operation.name }}</span>
          </div>
          <span class="operation-next">
            <fa :icon="['fas', 'arrow-down-long']" />
            <span class="operation-next-add">
              <button type="button" class="add-action" @click="showNav({flowId, after:index+1, inside: parent, type:'ADD_TRIGGER'})">
                <fa :icon="['fas', 'plus']" class="add-action-icon" />
              </button>
            </span>
          </span>
          <div v-if="operation.key === 'loop' || operation.key === 'switch' || operation.key === 'exceptionhandler'">
            <div class="sub-operations m-t-10">
              <NestedDraggable v-model="operation.operations" :parent="operation.id" :parenti="index" />
            </div>
            <ul class="operation-features text-center m-t-20">
              <li>
                <button type="button" class="add-action" @click="showNav({flowId, inside: operation.id, type:'ADD_TRIGGER'})">
                  <fa :icon="['fas', 'plus']" class="add-action-icon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nuxt-link>
    </li>
  </draggable>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Utils } from '@/services/Utils'

export default {
  name: 'NestedDraggable',
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    parent: {
      required: false,
      type: String,
      default: null
    },
    parenti: {
      required: false,
      type: Number,
      default: null
    }
  },
  data () {
    return {
      internalVal: null,
      activeMenus: [],
      dragOptions: {
        // animation: 300,
        disabled: false,
        group: 'all'
      }
    }
  },
  computed: {
    ...mapGetters({
      activeBreakpoints: 'activeBreakpoints',
      debugCompleted: 'debug/completed',
      debugFailed: 'debug/failed',
      debugCurrent: 'debug/current'
    }),
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
    activeModuleCode () {
      return this.$store.state.activeModule
    }
  },
  watch: {
    value: {
      handler (val) {
        this.internalVal = val
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      editFlow: 'editFlow',
      addFlowByDesign: 'addFlowByDesign',
      removeOperation: 'removeOperation',
      showNav: 'showNav',
      toggleBreakpoint: 'toggleBreakpoint',
      isActiveBreakpoint: 'isActiveBreakpoint'
    }),
    emitter (value) {
      this.$store.dispatch('reorderAppOperations', {
        value,
        parent: this.parent
      })
    },
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    isActiveViewClass (id) {
      return this.$route.query.id === id ? 'active' : false
    },
    isActiveBreakpointClass (id) {
      if (this.activeBreakpoints.includes(id)) {
        return 'active-breakpoint'
      }
      if (this.debugFailed.includes(id)) {
        return 'failed-breakpoint'
      }
      if (this.debugCompleted.includes(id)) {
        return 'completed-breakpoint'
      }
      if (this.debugCurrent === id) {
        return 'current-breakpoint'
      }
      return false
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
    }
  }
}
</script>
<style>
.moving-card {
  opacity: 0.5 !important;
}

.operation-breakpoint{
  position: absolute;
  left: -23px;
  top: 44px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid;
  background: #fff;
  cursor: pointer;
}

.operation-breakpoint.active-breakpoint{
  background: #cf4747;
  border-color: #000000;
}
.operation-breakpoint.current-breakpoint{
  background: #FEBA49;
  border-color: #FEBA49;
}
.operation-breakpoint.completed-breakpoint{
  background: #2a94a2;
  border-color: #2a94a2;
}
.operation-breakpoint.failed-breakpoint{
  background: #cf4747;
  border-color: #FEBA49;
}

.moving-card .operation-item {
  background: #ffffff !important;
  border-color: #000000 !important;
  border-style: dashed !important;
}

.text-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
  max-width: 77%;
}

.operation-feature {
  display: inline-block;
  float: left;
  position: relative;
  width: 100%;
}

.operation-features .operation-feature > .operation-item {
  font-weight: 700;
}

.operation-item {
  color: #043558;
  line-height: 30px;
  padding: 5px;
  display: inline-block;
  width: 100%;
  border: 1px solid #1155cb;
  background: #ffffff;
  text-align: left;
}

.sub-operations > .operation-feature:first-child > .operation-item {
  margin-top: 10px;
}

.operation-next {
  content: ' ';
  display: none;
  width: 24px;
  height: 30px;
  line-height: 28px;
  position: absolute;
  top: 100%;
  left: 50%;
  color: #1155cb;
  margin-left: -12px;
  z-index: 1;
  font-size: 28px;
  text-align: center;
}

.operation-feature:not(:last-child) .operation-item > .operation-next {
  display: inline-block;
}

.operation-next-add .add-action {
  display: none;
  font-size: 10px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 13px;
  background: #ffffff;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -8px;
  left: 50%;
  position: absolute;
  top: 3px;
  z-index: 1;
}

.operation-next:hover .operation-next-add .add-action {
  display: inline-block;
}

.operation-feature.active > a >  .operation-item,
.operation-subfeature.active > .operation-item {
  background: #eeeeee;
  color: #1155cb !important;
}

.operation-sublist .operation-item {
  padding-left: 40px;
}

.operation-text {
  line-height: 15px;
}

.operation-title {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
}

.w-80 {
  width: 80%;
}

.w-90 {
  width: 90%;
}

.feature-icon {
  font-size: 1.3em;
  vertical-align: middle;
  width: 20px !important;
  text-align: center;
  display: inline-block;
}

.sub-operations {
  padding: 0 10px;
}
</style>
