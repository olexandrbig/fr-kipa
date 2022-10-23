<template>
  <footer class="site-footer">
    <div class="grid">
      <div class="col-2-3">
        <p class="footer-company-description">
          © {{ fullYear }} All rights reserved
        </p>
      </div>
      <div class="col-1-3">
        <p class="footer-company-description text-right">
          v{{ version }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data () {
    return {
      fullYear: new Date().getFullYear()
    }
  },
  computed: {
    version () {
      return this.$store.state.appVersion
    }
  }
}
</script>
<style>
.footer-company-description{
  margin-top: 8px;
  margin-bottom: 0;
}
.site-footer{
  background: #7e1548;
  background: linear-gradient(90deg, #7e1548 0%, #3f3363 100%);
}
.site-footer a{
  color: #ffffff;
}
.site-footer a:hover{
  text-decoration: none;
}
</style>
