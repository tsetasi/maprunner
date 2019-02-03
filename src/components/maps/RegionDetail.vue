<template>
    <div>
        <md-list-item>
            <div class="md-layout">
                <div class="md-layout-item">{{region.name}}</div>
            </div>
            <md-button v-bind:key="zone" v-for="zone in region.zones" type="button" class="md-primary md-alignment-right" v-on:click="addMap(zone)">{{zone}}</md-button>
        </md-list-item>

        <md-menu md-size="medium" v-for="(map, index) in deciphered" :key="index" md-align-trigger>
            <md-chip md-menu-trigger class="md-primary zone-button" md-clickable>{{map}}</md-chip>
            <md-menu-content>
                <md-menu-item @click="$emit('portal-opened'); deleteMap(index);">Portal</md-menu-item>
                <md-menu-item @click="$emit('ran-map'); deleteMap(index);">Dud</md-menu-item>
                <md-menu-item @click="deleteMap(index)">Delete</md-menu-item>
            </md-menu-content>
        </md-menu>

    </div>
</template>

<script>
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
            this.deciphered.push(zone);
            this.deciphered.sort();
        },
        deleteMap(index) {
            setTimeout(() => this.deciphered.splice(index, 1), 500);
        }
    }
}
</script>

<style scoped>
    .zone-button {
        margin-left: 5px;
    }
</style>
