<template>
  <aside class="operation-nav" :style="{height:`${mainHeight()}px`}">
    <ul class="operation-features text-center">
      <draggable v-model="activeOperations">
        <li v-for="(operation, index) in activeOperations" :key="operation.id" :class="isActiveViewClass(operation.id)" class="operation-feature">
          <div class="operation-item w-80 m-t-30 pointer">
            <nuxt-link :to="`/designer/edit?id=${operation.id}`" class="operation-title relative">
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
                <nuxt-link class="add-action" :to="`/designer/add?after=${index+1}`">
                  <fa :icon="['fas', 'plus']" class="add-action-icon" />
                </nuxt-link>
              </span>
            </span>
            <div v-if="operation.operations">
              <div v-for="(subOperation, subIndex) in operation.operations" :key="subOperation.id" :class="isActiveViewClass(subOperation.id)" class="operation-feature">
                <div class="operation-item m-t-30 pointer">
                  <nuxt-link :to="`/designer/edit?id=${subOperation.id}&parent=${operation.id}`" class="operation-title relative">
                    <span class="pull-right relative">
                      <fa
                        v-if="isActiveMenu(subOperation.id)"
                        key="on"
                        :class="'feature-icon'"
                        :icon="['fas', 'xmark']"
                        @click="deactivateMenu(subOperation.id)"
                      />
                      <fa
                        v-else
                        key="off"
                        :class="'feature-icon'"
                        :icon="['fas', 'ellipsis-vertical']"
                        @click="activateMenu(subOperation.id)"
                      />
                      <transition name="dropdown">
                        <div
                          v-if="isActiveMenu(subOperation.id)"
                          class="dropdown-menu"
                          :class="{ active: isActiveMenu(subOperation.id) }"
                        >
                          <ul class="dropdown-menu-nav">
                            <li class="dropdown-menu-item">
                              <a href class="dropdown-menu-link" title="Remove" @click="removeOperation(subOperation.id)">
                                <div class="dropdown-menu-text">Remove</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </transition>
                    </span>
                    <span class="feature-icon"><fa :icon="['fas', categoryToIcon(subOperation.category)]" /></span>
                    <span class="text-ellipsis">{{ subOperation.name }}</span>
                  </nuxt-link>
                  <span class="operation-next">
                    <fa :icon="['fas', 'arrow-down-long']" />
                    <span class="operation-next-add">
                      <nuxt-link class="add-action" :to="`/designer/add?after=${subIndex+1}&inside=${index}`">
                        <fa :icon="['fas', 'plus']" class="add-action-icon" />
                      </nuxt-link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div v-if="operation.key === 'loop'">
              <ul class="operation-features text-center m-t-20">
                <li>
                  <nuxt-link class="add-action" :to="`/designer/add?inside=${index}`">
                    <fa :icon="['fas', 'plus']" class="add-action-icon" />
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </draggable>
    </ul>
    <ul class="operation-features text-center">
      <li>
        <nuxt-link class="add-action" to="/designer/add">
          <fa :icon="['fas', 'plus']" class="add-action-icon" />
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapActions } from 'vuex'
import { Utils } from '@/services/Utils'

export default {
  name: 'LayoutOperationsNav',
  data () {
    return {
      activeMenus: []
    }
  },
  computed: {
    activeModuleCode () {
      return this.$store.state.activeModule
    },
    activeOperations: {
      get () {
        return this.$store.state.appOperations
      },
      set (value) {
        this.$store.commit('SET_STORE_VALUE', { entryId: 'appOperations', value })
        this.$toast.success('Operations re-ordered')
      }
    }
  },
  methods: {
    ...mapActions({
      removeOperation: 'removeOperation'
    }),
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
        return (window && window.innerHeight) - 30
      }
    }
  }
}
</script>
<style>
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
.operation-features{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
.operation-feature{
  display: inline-block;
  background: #ffffff;
  float: left;
  position: relative;
  width: 100%;
}
.operation-features > .operation-feature > .operation-item {
  font-weight: 700;
}
.operation-item{
  color: #043558;
  line-height: 30px;
  padding: 5px;
  display: inline-block;
  width: 100%;
  border: 1px solid #1155cb;
  text-align: left;
}
.operation-next{
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
.operation-feature:not(:last-child) > .operation-item > .operation-next{
  display: inline-block;
}

.operation-next-add .add-action{
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
.operation-next:hover .operation-next-add .add-action{
  display: inline-block;
}
.operation-feature.active .operation-item,
.operation-subfeature.active .operation-item,
.operation-item:hover{
  background: #f5f5f5;
}
.operation-sublist .operation-item{
  padding-left: 40px;
}
.operation-text{
  line-height: 15px;
}
.operation-title{
  text-decoration: none;
  color: inherit;
}
.w-80{
  width: 80%;
}
.feature-icon{
  font-size: 1.3em;
  vertical-align: middle;
  width: 20px!important;
  text-align: center;
  display: inline-block;
}
.text-ellipsis{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
