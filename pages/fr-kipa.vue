<template>
  <div>
    <div class="clearfix relative">
      <div class="pull-right right-actions">
        <button class="btn btn-sm btn-primary" @click="featureIsNotAvailable()">
          Hierarchy
        </button>
        <button class="btn btn-sm btn-primary" @click="featureIsNotAvailable()">
          Copy link
        </button>
        <button class="btn btn-sm btn-default" @click="featureIsNotAvailable()">
          Discard changes
        </button>
        <button class="btn btn-sm btn-default" @click="featureIsNotAvailable()">
          Refresh
        </button>
      </div>
      <h2 class="view-title">
        <fa :icon="['fas', getViewIcon()]" /> {{ getViewName() }}
      </h2>
    </div>
    <div v-if="getViewType() === 'pageA'" class="grid">
      <div class="col-1-3">
        <div class="panel">
          <BarChart :data="barData" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <LineChart :data="lineData" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <BarChart :data="barData2" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <LineChart :data="lineData2" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <BarChart :data="barData3" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <LineChart :data="lineData3" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
    </div>
    <div v-else-if="getViewType() === 'pageB'" class="grid">
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href>&lt;table&gt;</a></td>
              <td>Defines a table</td>
            </tr>
            <tr>
              <td><a href>&lt;th&gt;</a></td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tr&gt;</a></td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;td&gt;</a></td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;caption&gt;</a></td>
              <td>Defines a table caption</td>
            </tr>
            <tr>
              <td><a href>&lt;colgroup&gt;</a></td>
              <td>Specifies a group of one or more columns in a table for formatting</td>
            </tr>
            <tr>
              <td><a href>&lt;col&gt;</a></td>
              <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
            </tr>
            <tr>
              <td><a href>&lt;thead&gt;</a></td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tbody&gt;</a></td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tfoot&gt;</a></td>
              <td>Groups the footer content in a table</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <LineChart :data="lineData" :options="options" style="position: relative; height:396px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <h3 class="m-b-10">
            Basic user info
          </h3>
          <table class="table-borderless">
            <tr>
              <td>First name</td>
              <td>
                <input class="form-control form-control-borderless" value="Francisco">
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input class="form-control form-control-borderless" value="Mendel">
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <select class="form-control form-control-borderless">
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">
                    Female
                  </option>
                  <option value="other">
                    other
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Birth Date</td>
              <td>
                <input class="form-control form-control-borderless" value="1991-08-01" type="date">
              </td>
            </tr>
            <tr>
              <td>Personal ID</td>
              <td>FR12312355AD</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div v-else-if="getViewType() === 'pageC'" class="grid">
      <div class="col-1-3">
        <div class="panel">
          <h3 class="m-b-10">
            Basic user info
          </h3>
          <table class="table-borderless">
            <tr>
              <td>First name</td>
              <td>
                <input class="form-control form-control-borderless" value="Francisco">
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input class="form-control form-control-borderless" value="Mendel">
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <select class="form-control form-control-borderless">
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">
                    Female
                  </option>
                  <option value="other">
                    other
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Birth Date</td>
              <td>
                <input class="form-control form-control-borderless" value="1991-08-01" type="date">
              </td>
            </tr>
            <tr>
              <td>Personal ID</td>
              <td>FR12312355AD</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <BarChart :data="barData" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href>&lt;table&gt;</a></td>
              <td>Defines a table</td>
            </tr>
            <tr>
              <td><a href>&lt;th&gt;</a></td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tr&gt;</a></td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;td&gt;</a></td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;caption&gt;</a></td>
              <td>Defines a table caption</td>
            </tr>
            <tr>
              <td><a href>&lt;colgroup&gt;</a></td>
              <td>Specifies a group of one or more columns in a table for formatting</td>
            </tr>
            <tr>
              <td><a href>&lt;col&gt;</a></td>
              <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
            </tr>
            <tr>
              <td><a href>&lt;thead&gt;</a></td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tbody&gt;</a></td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tfoot&gt;</a></td>
              <td>Groups the footer content in a table</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <LineChart :data="lineData" :options="options" style="position: relative; height:396px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div v-else-if="getViewType() === 'pageD'" class="grid">
      <div class="col-2-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <BarChart :data="barData" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <table>
            <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href>&lt;table&gt;</a></td>
              <td>Defines a table</td>
            </tr>
            <tr>
              <td><a href>&lt;th&gt;</a></td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tr&gt;</a></td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;td&gt;</a></td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;caption&gt;</a></td>
              <td>Defines a table caption</td>
            </tr>
            <tr>
              <td><a href>&lt;colgroup&gt;</a></td>
              <td>Specifies a group of one or more columns in a table for formatting</td>
            </tr>
            <tr>
              <td><a href>&lt;col&gt;</a></td>
              <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
            </tr>
            <tr>
              <td><a href>&lt;thead&gt;</a></td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tbody&gt;</a></td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tfoot&gt;</a></td>
              <td>Groups the footer content in a table</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <LineChart :data="lineData" :options="options" style="position: relative; height:363px; width:100%" />
        </div>
      </div>
    </div>
    <div v-else-if="getViewType() === 'pageE'" class="grid">
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tbody>
            <tr>
              <th>Tag</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><a href>&lt;table&gt;</a></td>
              <td>Defines a table</td>
            </tr>
            <tr>
              <td><a href>&lt;th&gt;</a></td>
              <td>Defines a header cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tr&gt;</a></td>
              <td>Defines a row in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;td&gt;</a></td>
              <td>Defines a cell in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;caption&gt;</a></td>
              <td>Defines a table caption</td>
            </tr>
            <tr>
              <td><a href>&lt;colgroup&gt;</a></td>
              <td>Specifies a group of one or more columns in a table for formatting</td>
            </tr>
            <tr>
              <td><a href>&lt;col&gt;</a></td>
              <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
            </tr>
            <tr>
              <td><a href>&lt;thead&gt;</a></td>
              <td>Groups the header content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tbody&gt;</a></td>
              <td>Groups the body content in a table</td>
            </tr>
            <tr>
              <td><a href>&lt;tfoot&gt;</a></td>
              <td>Groups the footer content in a table</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <h3 class="m-b-10">
            Basic user info
          </h3>
          <table class="table-borderless">
            <tr>
              <td>First name</td>
              <td>
                <input class="form-control form-control-borderless" value="Francisco">
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input class="form-control form-control-borderless" value="Mendel">
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <select class="form-control form-control-borderless">
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male" selected>
                    Male
                  </option>
                  <option value="female">
                    Female
                  </option>
                  <option value="other">
                    other
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Birth Date</td>
              <td>
                <input class="form-control form-control-borderless" value="1991-08-01" type="date">
              </td>
            </tr>
            <tr>
              <td>Personal ID</td>
              <td>FR12312355AD</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  function generateChartData () {
    const list = []
    for (let step = 0; step < 7; step++) {
      list.push(Math.floor(Math.random() * 100))
    }
    return list
  }
  function generateChartColor () {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgba(${r}, ${g}, ${b}, 0.7)`
  }

  export default {
    scrollToTop: true,
    asyncData () {
      const lineData = {
        labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
        datasets: [{
          label: 'Line',
          data: generateChartData(),
          backgroundColor: generateChartColor()
        }]
      }
      const lineData2 = {
        labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
        datasets: [{
          label: 'Line',
          data: generateChartData(),
          backgroundColor: generateChartColor()
        }]
      }
      const lineData3 = {
        labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
        datasets: [{
          label: 'Line',
          data: generateChartData(),
          backgroundColor: generateChartColor()
        }]
      }
      const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Bar',
          data: generateChartData(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: generateChartColor()
        }]
      }
      const barData2 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Bar',
          data: generateChartData(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: generateChartColor()
        }]
      }
      const barData3 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Bar',
          data: generateChartData(),
          fill: false,
          lineTension: 0.1,
          backgroundColor: generateChartColor()
        }]
      }
      const options = {
        responsive: true,
        maintainAspectRatio: false
      }
      return { lineData, barData, lineData2, barData2, lineData3, barData3, options }
    },
    head () {
      return {
        title: this.$t('index.title'),
        meta: [
          { hid: 'og:site_name', name: 'og:site_name', content: this.$t('index.title') },
          { hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.path },
          { hid: 'name', itemprop: 'name', content: this.$t('index.title') },
          { hid: 'og:title', property: 'og:title', content: this.$t('index.title') },
          { hid: 'description', name: 'description', content: this.$t('index.description') },
          { hid: 'descriptionItem', itemprop: 'description', content: this.$t('index.description') },
          { hid: 'og:description', property: 'og:description', content: this.$t('index.description') },
          { hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + require('~/assets/pic/logo.png') }
        ]
      }
    },
    methods: {
      getViewIcon () {
        const { view } = this.getInfo(this.$store.state.activeView)
        return view.icon
      },
      getViewName () {
        const { view, module } = this.getInfo(this.$store.state.activeView)
        return `${module.name} / ${view.name}`
      },
      getViewType () {
        const { view } = this.getInfo(this.$store.state.activeView)
        return view.type
      },
      getInfo (tab) {
        const parts = tab.split(':')
        const moduleCode = parts[0]
        const viewCode = parts[1]
        const subViewCode = parts[2]
        const appData = this.$store.state.appData
        const module = appData.find(m => m.code === moduleCode)
        let view = null
        if (subViewCode) {
          const parent = module.views.find(v => v.code === viewCode)
          view = parent.views.find(v => v.code === `${viewCode}:${subViewCode}`)
        } else {
          view = module.views.find(v => v.code === viewCode)
        }
        return { module, view }
      },
      featureIsNotAvailable () {
        this.$toast.error('This feature is not yet available')
      }
    }
  }
</script>
