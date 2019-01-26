<template>
    <div class="md-layout md-alignment-left">
        <div class="md-layout-item">
            <div v-for="currency in currencies" :key="currency.name">
                {{currency.ending - currency.starting}} {{currency.name}}
            </div>
        </div>
        <div class="md-layout-item">
            <div>{{mapsRun}} Maps run</div>
            <div v-for="portal in portals" :key="portal.type">
                {{portal.count}} {{portal.type}}
            </div>
        </div>
        <div class="md-layout-item">
            <md-button class="md-icon-button md-raised md-primary" @click="copySummaryInfo()"><md-icon>assignment</md-icon></md-button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: "Summary",
    props: [
        "currencies",
        "portals",
        "mapsRun",
        "timestamps"
    ],
    methods: {
        copySummaryInfo() {
            let summaryString = "";
            
            if (this.timestamps.start) {
                let end = this.timestamps.end ? this.timestamps.end : moment();
                summaryString += "Time elapsed: " + end.diff(this.timestamps.start, 'minutes') + " minutes. ";
            }

            summaryString += "Earned so far: ";
            this.currencies.forEach(function(currency, index, currencies) {
                summaryString += (currency.ending - currency.starting) + " " + currency.name;
                summaryString += index === (currencies.length - 1) ? ". " : ", ";
            })

            if (this.mapsRun > 0) {
                let portalTotal = 0;
                this.portals.forEach(function(portal) {
                    portalTotal += parseInt(portal.count);
                })
                summaryString += "Ran " + this.mapsRun + " maps, opening " + portalTotal + " portals";
                summaryString += portalTotal > 0 ? ", portal rate of " + ((portalTotal / this.mapsRun) * 100).toFixed(2) + "%." : ".";
            }
            this.$clipboard(summaryString);
        }
    }
}
</script>

<style>

</style>