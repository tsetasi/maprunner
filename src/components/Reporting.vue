<template>
    <b-col>
        <h2>Reporting</h2>
        <b-card>
            <b-row>
                <b-col>
                    <b-row class="offset-1">Earned:</b-row>
                    <b-row class="offset-2" v-for="(value, key) in earnedCurrency" :key="key">{{key | capitalize}}: {{value}}</b-row>
                </b-col>
                <b-col>
                    <b-row>Portals</b-row>
                    <b-row class="offset-1">Maps run: {{portalStats.mapsRun}}</b-row>
                    <b-row class="offset-1">Portals opened: {{portalStats.portals}}</b-row>
                    <b-row class="offset-1">Portal rate: {{portalStats.portalRate}}</b-row>
                </b-col>
            </b-row>
            <hr>
            <b-row align-h="around">
                <b-button @click="copySummaryReport()" variant="primary">Copy Summary</b-button>
                <b-button disabled variant="primary">View Details</b-button>
            </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "Reporting",
    computed: {
        earnedCurrency() { return this.$store.getters.getEarnedCurrencies; },
        portalStats() { return this.$store.getters.getPortalStats; }
    },
    methods: {
        copySummaryReport() { 
            let summary = this.$store.getters.getSummaryReport;
            this.$clipboard(summary);
        }
    }
}
</script>

<style>

</style>