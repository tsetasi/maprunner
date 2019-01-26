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
                <md-subheader class="md-primary">Portals</md-subheader>
                <md-list-item v-for="portal in portals" :key="portal.type">
                    <PortalItem :portal="portal" />
                </md-list-item>
            </md-list>
            <md-list class="md-layout-item">
                <md-subheader class="md-primary">Summary</md-subheader>
                <Summary :currencies="currencies" :portals="portals" :times="times" />
            </md-list>
        </div>
    </div>
</template>

<script>
import CurrencyItem from './reporting/CurrencyItem';
import PortalItem from './reporting/PortalItem';
import Summary from './reporting/Summary';

export default {
    name: "Reporting",
    components: {
        CurrencyItem,
        PortalItem,
        Summary,
    },
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
            times: {'start': null, 'end': null}
        }
    }
}
</script>

<style>

</style>
