<template>
  <div id="app">
    <Header/>
    <ConfigModal/>
    <PortalModal/>
    <ReportModal/>
    <b-container v-if="configured">
      <b-row class="base-section">
        <MapTracker/>
      </b-row>
      <b-row class="base-section">
        <LootTracker/>
      </b-row>
      <b-row>
        <Reporting/>
        <Timekeeping/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header';
import ConfigModal from './components/ConfigModal';
import LootTracker from './components/LootTracker';
import MapTracker from './components/MapTracker';
import PortalModal from './components/PortalModal';
import Reporting from './components/Reporting';
import ReportModal from './components/ReportModal';
import Timekeeping from './components/Timekeeping';

export default {
  name: 'Maprunner',
  components: {
    ConfigModal,
    Header,
    LootTracker,
    MapTracker,
    PortalModal,
    Reporting,
    ReportModal,
    Timekeeping
  },
  computed: {
    configured() { return this.$store.state.configured; }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
