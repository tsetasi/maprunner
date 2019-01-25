<template>
    <div>
        <md-list-item>
            <div class="md-layout">
                <div class="md-layout-item">{{region.name}}</div>
                <div class="md-layout-item">{{deciphered.length}}</div>
            </div>
            <md-button v-bind:key="zone" v-for="zone in region.zones" type="button" class="md-primary md-alignment-right" v-on:click="addMap(zone)">{{zone}}</md-button>
        </md-list-item>
        <md-divider class="md-inset" v-if="deciphered.length > 0"></md-divider>
        <md-button class="md-raised" :md-ripple="false" v-bind:key="map.id" v-for="map in sortedDeciphered" v-on:click="removeMap(map.id)">
            {{map.zone}}
        </md-button>
        <md-divider></md-divider>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "RegionDetail",
    props: ["region"],
    data() {
        return {
            deciphered: []
        }
    },
    methods: {
        addMap(zone) {
            let newMap = {'zone': zone, id: uuid.v4()};
            this.deciphered.push(newMap);
            this.deciphered.sort();
        },
        removeMap(id) {
            this.deciphered = this.deciphered.filter(map => map.id !== id);
        }

    },
    computed: {
        sortedDeciphered: function() {
            function compare(a, b) {
                if (a.zone < b.zone) { return -1; }
                if (a.zone > b.zone) { return 1; }
                return 0;
            }

            return this.deciphered.sort(compare);
        }
    }

}
</script>

<style scoped>
    .md-divider {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
