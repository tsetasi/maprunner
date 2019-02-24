<template>
  <div id="app">
    <Header />
    <Reporting :mapsRun="mapsRun" :portalsRun="portalsRun" />
    <div class="md-layout md-gutter" id="">
      <RunDetail @save-run="saveRun" :showDialog="showDialog" :items="items" />
      <MapTracker @ran-map="mapsRun++" @portal-opened="showDialog = true" class="md-layout-item"/>
      <ItemList :items="items" class="md-layout-item"/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import RunDetail from './components/layout/RunDetail';
import Reporting from './components/reporting/Reporting';
import ItemList from './components/items/ItemList';
import MapTracker from './components/maps/MapTracker';

export default {
  name: 'app',
  components: {
    Header,
    RunDetail,
    Reporting,
    ItemList,
    MapTracker
  },
  data() {
    return {
      showDialog: false,
      mapsRun: 0,
      portalsRun: [],
      items: [
                {'id': 0, 'name': "Waterproof Cloth", 'count': null},
                {'id': 1, 'name': "Wind-Up Namazu", 'count': null},
                {'id': 2, 'name': "Wind-Up Matanga", 'count': null},
                {'id': 3, 'name': "Capybara Pup", 'count': null},
                {'id': 4, 'name': "Gold Whisker", 'count': null}
            ]
    }
  },
  methods: {
    saveRun: function(e) {
      this.mapsRun++;
      this.portalsRun.push(e);
      this.showDialog = false;
    }
  }
}
</script>

<style>
  .viewport {
    margin: 20px;
  }

  html {
    overflow-x: hidden;
    width: 100%;
  }


</style>
