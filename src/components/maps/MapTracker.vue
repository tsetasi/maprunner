<template>
    <div class="viewport">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Maps</span>
            <span>
                <md-button class="md-icon-button md-flat md-primary" @click="openMapSearch()"><md-icon>search</md-icon></md-button>
            </span>
        </md-toolbar>
        <md-list>
            <div v-bind:key="region.name" v-for="region in regions" class="md-layout-item">
                <RegionDetail v-bind:region="region" v-on:ran-map="$emit('ran-map')" class="md-layout-item"/>
            </div>
        </md-list>
    </div>
</template>

<script>
import RegionDetail from './RegionDetail';
export default {
    components: {
        RegionDetail
    },
    name: "MapTracker",
    data() {
        return {
            regions: [
                {'name': 'Gyr Abania', zones: ['Fringes','Lochs','Peaks']},
                {'name': 'Othard', zones: ['Azim','Ruby','Yanxia']}
            ],
            mapUrl: "https://www.dopr.net/ff14playguide/TreasureHuntG10"
        }
    },
    methods: {
        openMapSearch: function() {
            window.open(this.mapUrl, "_blank");
        }
    }
}
</script>

<style>
</style>
