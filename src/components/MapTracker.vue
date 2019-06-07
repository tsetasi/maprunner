<template>
    <b-col>
        <h2>Maps</h2>
        <b-card>
            <b-row v-for="region in regions" :key="region.name">
                <b-col>
                    <div>
                        <div class="region-title">{{region.name}}</div>
                        <b-dropdown class="map-button" variant="primary" :disabled="mapCounts[zone] === 0" 
                                    v-for="zone in region.zones" no-caret :key="zone" :text="zone + ': ' + mapCounts[zone]">
                            <b-dropdown-item-button @click="openedPortal(zone)">Portal</b-dropdown-item-button>
                            <b-dropdown-item-button @click="ranMap(zone)">Dud</b-dropdown-item-button>
                            <b-dropdown-item-button @click="decrementMaps(zone)">Remove</b-dropdown-item-button>
                        </b-dropdown>
                    </div>
                </b-col>
                <b-col>
                    <div class="offset-1">
                        <div class="region-title">Add</div>
                        <b-button @click="addMap(zone)" variant="link" v-for="zone in region.zones" :key="zone">{{zone}}</b-button>
                    </div>
                </b-col>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "MapTracker",
    data() {
        return {
            mapCounts: {}
        }
    },
    computed: {
        regions() { return this.$store.state.regions; }
    },
    methods: {
        addMap(zone) {
            this.mapCounts[zone] = this.mapCounts[zone] ? this.mapCounts[zone] + 1 : 1;
        },
        openedPortal(zone) {
            this.$root.$emit('bv::show::modal', 'portal-modal');
            this.$store.dispatch('incrementPortals');
            this.ranMap(zone);
        },
        ranMap(zone) {
            this.mapCounts[zone]--;
            this.$store.dispatch('incrementMapsRun');
        },
        decrementMaps(zone) { this.mapCounts[zone]--; }
    },
    created() {
        this.mapCounts = this.$store.state.mapCounts;
    }
}
</script>

<style>

</style>
