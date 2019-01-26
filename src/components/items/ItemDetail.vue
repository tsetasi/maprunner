<template>
    <md-field>
        <label>{{item.name}}</label>
        <md-input v-model="item.count" min="0" type="number"></md-input>
    </md-field>
</template>

<script>
export default {
    name: "ItemDetail",
    props: ["item"]
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
