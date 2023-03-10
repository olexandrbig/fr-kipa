<template>
  <aside class="system-nav">
    <div class="operation-actions">
      <h2 class="nav-title">
        <fa :icon="['fas', 'globe']" /> API Gateway
      </h2>
    </div>
    <div class="operation-nav-list" :style="{height:`${mainHeight()}px`}">
      <ul class="system-flows text-center">
        <li v-for="gateway in availableGateways" :key="gateway.id" :class="isActiveViewClass(gateway.id)">
          <nuxt-link :to="`/gateway/edit?id=${gateway.id}`" class="flow-item w-80 pointer">
            <div class="operation-title relative">
              <span class="text-ellipsis">{{ gateway.properties.name || 'Unnamed gateway' }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <ul class="system-flows text-center">
        <li>
          <nuxt-link class="add-action" to="/gateway/add">
            <fa :icon="['fas', 'plus']" class="add-action-icon" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'LayoutGatewayNav',
  data () {
    return {}
  },
  computed: {
    availableGateways () {
      return this.$store.state.availableGateways
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
.system-flows{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
.flow-item.nuxt-link-exact-active{
  font-weight: 700;
  background: #eeeeee;
}
.flow-item{
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
.system-subfeature.active .flow-item,
.flow-item:hover{
  background: #f5f5f5;
}
.system-sublist .flow-item{
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
