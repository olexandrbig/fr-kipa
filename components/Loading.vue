<template>
  <div v-if="loading" class="loading-page">
    <div class="loading-dots">
      <h3>Loading</h3>
      <h3>
        <small class="dot one">.</small><small class="dot two">.</small><small class="dot three">.</small>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    text-align: center;
    padding-top: 430px;
    font-size: 30px;
    z-index: 99;
  }
  .loading-dots {
    text-align: center;
    z-index: 5;
    display: inline-block;
    padding: 10px 20px 20px;
  }
  .loading-dots .dot {
    display: inline;
    margin-left: 0.2em;
    margin-right: 0.2em;
    position: relative;
    top: -0.6em;
    font-size: 1.6em;
    line-height: 1em;
    opacity: 0;
    -webkit-animation: showHideDot 2.5s ease-in-out infinite;
    animation: showHideDot 2.5s ease-in-out infinite;
  }
  .loading-dots .dot.one {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .loading-dots .dot.two {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .loading-dots .dot.three {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  @-webkit-keyframes showHideDot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes showHideDot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

</style>
