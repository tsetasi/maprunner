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

<style>

</style>
