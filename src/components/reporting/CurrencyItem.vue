<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-size-small-80">
            <md-field>
                <label>Starting {{currency.name}}</label>
                <md-input v-model="currency.starting" min="0" max="999999999" type="number"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item md-size-small-80">
            <md-field>
                <label>Ending {{currency.name}}</label>
                <md-input v-model="currency.ending" min="0" max="999999999" type="number"></md-input>
            </md-field>
        </div>
        <div class="md-layout-item">
            <div>{{currency.ending - currency.starting}} earned</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrencyItem',
    props: ["currency"],

}
</script>

<style scoped>
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
</style>
