<template>
  <div id="app">
    <Header />
    <Reporting :mapsRun="mapsRun"/>
    <div class="md-layout md-gutter" id="">
      <MapTracker v-on:ran-map="mapsRun++" class="md-layout-item"/>
      <ItemList class="md-layout-item"/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Reporting from './components/reporting/Reporting';
import ItemList from './components/items/ItemList';
import MapTracker from './components/maps/MapTracker';

export default {
  name: 'app',
  components: {
    Header,
    Reporting,
    ItemList,
    MapTracker
  },
  data() {
    return {
      mapsRun: 0
    }
  }
}
</script>

<style>
  .viewport {
    margin: 20px;
  }


</style>
