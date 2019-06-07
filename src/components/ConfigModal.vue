<template>
    <b-modal id="config-modal" 
                size="md" 
                header-bg-variant="header"
                header-text-variant="white"
                centered 
                no-close-on-backdrop 
                no-close-on-esc
                hide-header-close
                ok-only 
                :ok-disabled="disableOk"
                @ok="setConfig()" 
                v-model="displayConfig" 
                title="Welcome to Maprunner!">
        <b-container fluid>
            <b-form-group label="Expansion" id="expansion-select" label-size="lg">
                <b-form-radio class="offset-4" v-model="selectedExpansion" v-for="(expansion, key) in expansions" :id="`expansion-radio-${key}`"
                    :value="expansion" :key="key">{{key | capitalize}}</b-form-radio>
            </b-form-group>
            <b-form-group label="Initial Currencies" id="currency-select" label-size="lg">
                <b-form-group v-for="currency in currencies" :key="currency" :label="currency | capitalize" label-cols="4" label-align-sm="right">
                    <b-form-input v-model="initialCurrencies[currency]" value="0" min="0" :id="`initial-${currency}`" type="number"></b-form-input>
                </b-form-group>
            </b-form-group>
        </b-container>
    </b-modal>
</template>

<script>
export default {
    name: "ConfigModal",
    data() {
        return {
            displayConfig: true,
            selectedExpansion: null,
            initialCurrencies: {}
        }
    },
    computed: {
        expansions() { return this.$store.state.expansionOptions; },
        currencies() { return this.$store.state.currencyOptions; },
        disableOk() { return (this.selectedExpansion === null)}
    },
    methods: {
        setConfig() {
            this.$store.dispatch('setConfig', {expansion: this.selectedExpansion, currencies: this.initialCurrencies});
        }
    },
    created() {
        let self = this;
        this.currencies.forEach((currency) => {
            self.initialCurrencies[currency] = 0;
        });
    }
}
</script>

<style>

</style>
