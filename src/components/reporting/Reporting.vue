<template>
    <div class="viewport">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Reporting</span>
        </md-toolbar>
        <div class="md-layout md-alignment-space-between">
            <md-list class="md-layout-item">
                <md-subheader class="md-primary">Currencies</md-subheader>
                <md-list-item v-for="currency in currencies" :key="currency.name">
                    <CurrencyItem :currency="currency" />
                </md-list-item>
            </md-list>

            <md-list class="md-layout-item">
                <md-subheader class="md-primary">Summary</md-subheader>
                <Summary :currencies="currencies" :portals="portals" :timestamps="timestamps" :mapsRun="mapsRun" :portalsRun="portalsRun" />

                <md-subheader class="md-primary">Timekeeping</md-subheader>
                <Timekeeping :timestamps="timestamps" v-on:start-time="setStart" v-on:reset-start="resetStart" v-on:end-time="setEnd" v-on:reset-end="resetEnd"/>
            </md-list>
        </div>
    </div>
</template>

<script>
import CurrencyItem from './CurrencyItem';
import Summary from './Summary';
import Timekeeping from './Timekeeping';
import moment from 'moment';

export default {
    name: "Reporting",
    components: {
        CurrencyItem,
        Summary,
        Timekeeping
    },
    props: ["mapsRun", "portalsRun"],
    data() {
        return {
            currencies: [
                {'name': 'Gil', 'starting': null, 'ending': null},
                {'name': 'Genesis', 'starting': null, 'ending': null},
                {'name': 'Mendacity', 'starting': null, 'ending': null}
            ],
            timestamps: {'start': null, 'end': null}
        }
    },
    computed: {
        portals: function() {
            let portalCounts = {'canals': 0, 'altars': 0, 'hidden': 0};

            for (let i = 0; i < this.portalsRun.length; i++) {
                portalCounts[this.portalsRun[i].portalType]++;
            }

            return portalCounts;
        }
    },
    methods: {
        setStart() {
            this.timestamps.start = moment();
        },
        setEnd() {
            this.timestamps.end = moment();
        },
        resetStart() {
            this.timestamps.start = null;
        },
        resetEnd() {
            this.timestamps.end = null;
        }
    }
}
</script>

<style>

</style>
