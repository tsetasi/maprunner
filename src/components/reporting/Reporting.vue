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
            <md-list class="md-layout-item md-size-15">
                <md-subheader class="md-primary">Maps Run</md-subheader>
                <md-list-item>{{mapsRun}}</md-list-item>

                <md-subheader class="md-primary">Portals</md-subheader>
                <md-list-item v-for="portal in portals" :key="portal.type">
                    <PortalItem :portal="portal" />
                </md-list-item>
            </md-list>
            <md-list class="md-layout-item">
                <md-subheader class="md-primary">Summary</md-subheader>
                <Summary :currencies="currencies" :portals="portals" :timestamps="timestamps" :mapsRun="mapsRun" />

                <md-subheader class="md-primary">Timekeeping</md-subheader>
                <Timekeeping :timestamps="timestamps" v-on:start-time="setStart" v-on:reset-start="resetStart" v-on:end-time="setEnd" v-on:reset-end="resetEnd"/>
            </md-list>
        </div>
    </div>
</template>

<script>
import CurrencyItem from './CurrencyItem';
import PortalItem from './PortalItem';
import Summary from './Summary';
import Timekeeping from './Timekeeping';
import moment from 'moment';

export default {
    name: "Reporting",
    components: {
        CurrencyItem,
        PortalItem,
        Summary,
        Timekeeping
    },
    props: ["mapsRun"],
    data() {
        return {
            currencies: [
                {'name': 'Gil', 'starting': null, 'ending': null},
                {'name': 'Genesis', 'starting': null, 'ending': null},
                {'name': 'Mendacity', 'starting': null, 'ending': null}
            ],
            portals: [
                {'type': 'Canals', 'count': 0},
                {'type': 'Altars', 'count': 0},
                {'type': 'Hidden', 'count': 0}
            ],
            timestamps: {'start': null, 'end': null}
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
