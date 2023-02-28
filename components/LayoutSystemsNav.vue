<template>
  <aside class="system-nav">
    <div class="operation-actions">
      <h2 class="nav-title">
        <fa :icon="['fas', 'server']" /> Systems
      </h2>
    </div>
    <div class="operation-nav-list" :style="{height:`${mainHeight()}px`}">
      <ul class="system-items text-center">
        <li v-for="system in availableSystems" :key="system.id" :class="isActiveViewClass(system.id)">
          <nuxt-link :to="`/systems/edit?id=${system.id}`" class="system-entry w-80 pointer">
            <div class="operation-title relative">
              <span class="text-ellipsis">[{{ system.properties.type }}] {{ system.properties.name }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <ul class="system-items text-center">
        <li>
          <nuxt-link class="add-action" to="/systems/add">
            <fa :icon="['fas', 'plus']" class="add-action-icon" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'LayoutSystemsNav',
  data () {
    return {}
  },
  computed: {
    availableSystems () {
      return this.$store.state.availableSystems
    }
  },
  methods: {
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 30 - 90
      }
    },
    isActiveViewClass (id) {
      return this.$route.query.id === id
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
.system-nav{
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
.system-items{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
.system-feature{
  display: inline-block;
  background: #ffffff;
  float: left;
  position: relative;
  width: 100%;
}
.system-entry.nuxt-link-exact-active{
  font-weight: 700;
  background: #eeeeee;
}
.system-items > .system-feature > .system-entry {
  font-weight: 700;
}
.system-entry{
  text-decoration: none;
  color: #043558;
  line-height: 30px;
  padding: 5px;
  display: inline-block;
  width: 94%;
  margin: 1% 3%;
  border: 1px solid #1155cb;
  text-align: left;
}
.system-next{
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
.system-feature:not(:last-child) .system-entry .system-next{
  display: inline-block;
}
.system-next-add .add-action{
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
.system-next:hover .system-next-add .add-action{
  display: inline-block;
}
.system-feature.active .system-entry,
.system-subfeature.active .system-entry,
.system-entry:hover{
  background: #f5f5f5;
}
.system-sublist .system-entry{
  padding-left: 40px;
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
