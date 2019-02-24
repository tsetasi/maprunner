<template>
    <div class="md-layout md-alignment-left">
        <div class="md-layout-item">
            <div v-for="currency in currencies" :key="currency.name">
                {{currency.ending - currency.starting}} {{currency.name}}
            </div>
        </div>
        <div class="md-layout-item">
            <div>Maps run: {{mapsRun}}</div>
            <div v-for="(value, key) in portals" :key=key>
                {{key | capitalize}}: {{value}}
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
        "timestamps",
        "portalsRun"
    ],
    methods: {
        copySummaryInfo() {
            let summaryString = "";
            
            if (this.timestamps.start) {
                let end = this.timestamps.end ? this.timestamps.end : moment();
                summaryString += "Time elapsed: " + end.diff(this.timestamps.start, 'minutes') + " minutes. ";
            }

            summaryString += "Earned: ";
            this.currencies.forEach(function(currency, index, currencies) {
                summaryString += (currency.ending - currency.starting) + " " + currency.name;
                summaryString += index === (currencies.length - 1) ? ". " : ", ";
            })

            if (this.mapsRun > 0) {
                let portalTotal = 0;
                
                for (let key in this.portals) {
                    portalTotal += this.portals[key];
                }
                summaryString += "Ran " + this.mapsRun + " map" + (this.mapsRun > 1 ? 's' : '') + ", opening " + portalTotal + " portal" + (this.portalTotal > 1 ? 's' : '');
                summaryString += portalTotal > 0 ? ", portal rate of " + ((portalTotal / this.mapsRun) * 100).toFixed(2) + "%. " : ". ";

                summaryString += "Run breakdown: ";

                this.portalsRun.forEach(function(run, index, runs) {
                    summaryString += run.portalType + " " + run.floor;
                    summaryString += (index === runs.length - 1) ? ". " : ", ";
                });
            }
            this.$clipboard(summaryString);
        }
    },
    filters: {
        capitalize: function(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
    }
}
</script>

<style scoped>
    
</style>