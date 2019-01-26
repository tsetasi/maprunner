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
        <md-chips class="md-primary" v-model="deciphered"></md-chips>
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
        }
    }

}
</script>

<style scoped>

</style>
