<template>
  <div id="app">
    <Header />
    <Reporting />
    <div class="md-layout md-gutter" id="">
      <MapTracker class="md-layout-item"/>
      <ItemList class="md-layout-item"/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Reporting from './components/Reporting';
import ItemList from './components/ItemList';
import MapTracker from './components/maps/MapTracker';

export default {
  name: 'app',
  components: {
    Header,
    Reporting,
    ItemList,
    MapTracker
  }
}
</script>

<style>
  .viewport {
    margin: 20px;
  }


</style>
