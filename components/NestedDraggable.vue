<template>
  <draggable
    :value="internalVal"
    v-bind="dragOptions"
    @input="emitter"
  >
    <li v-for="(operation, index) in internalVal" :key="operation.id" :class="isActiveViewClass(operation.id)" class="operation-feature">
      <div class="operation-item m-t-30 pointer">
        <nuxt-link :to="`/flows/one/${flowId}/designer/edit?id=${operation.id}&parent=${parent}`" class="operation-title relative">
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
        </nuxt-link>
        <span class="operation-next">
          <fa :icon="['fas', 'arrow-down-long']" />
          <span class="operation-next-add">
            <nuxt-link class="add-action" :to="`/flows/one/${flowId}/designer/add?after=${index+1}&inside=${parenti}`">
              <fa :icon="['fas', 'plus']" class="add-action-icon" />
            </nuxt-link>
          </span>
        </span>
        <div v-if="operation.operations" class="sub-operations m-t-10">
          <NestedDraggable v-model="operation.operations" :parent="operation.id" :parenti="index" />
        </div>
        <div v-if="operation.key === 'loop' || operation.key === 'exceptionhandler'">
          <ul class="operation-features text-center m-t-20">
            <li>
              <nuxt-link class="add-action" :to="`/flows/one/${flowId}/designer/add?inside=${index}`">
                <fa :icon="['fas', 'plus']" class="add-action-icon" />
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </draggable>
</template>

<script>
import { mapActions } from 'vuex'
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
        animation: 300,
        disabled: false,
        group: 'all'
      }
    }
  },
  computed: {
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
      removeOperation: 'removeOperation'
    }),
    emitter (value) {
      this.$store.dispatch('reorderAppOperations', { value, parent: this.parent })
      this.$emit('input', value)
    },
    categoryToIcon (category) {
      return Utils.categoryToIcon(category)
    },
    isActiveViewClass (viewCode) {
      return this.$store.state.activeView === `${this.activeModuleCode}:${viewCode}` ? 'active' : false
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
