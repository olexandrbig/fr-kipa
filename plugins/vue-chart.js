import Vue from 'vue'
import { Bar, Line } from 'vue-chartjs'

// eslint-disable-next-line
Vue.component('BarChart', {
  extends: Bar,
  // eslint-disable-next-line
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

// eslint-disable-next-line
Vue.component('LineChart', {
  extends: Line,
  // eslint-disable-next-line
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
