<template>
    <div class="viewport">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Maps</span>
        </md-toolbar>
        <md-list>
            <div v-bind:key="region.name" v-for="region in regions" class="md-layout-item">
                <RegionDetail v-bind:region="region" class="md-layout-item"/>
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
            ]
        }
    }
}
</script>

<style>
</style>
