<template>
    <md-field>
        <label>{{item.name}}</label>
        <md-input v-model="item.count" type="number"></md-input>
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
