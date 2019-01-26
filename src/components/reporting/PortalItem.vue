<template>
    <div class="md-layout">
        <div class="md-layout-item  md-size-40">
            <md-field class="md-layout-item">
                <label>{{portal.type}}</label>
                <md-input v-model="portal.count" min="0" max="999999999" type="number"></md-input>
            </md-field>
        </div>
        <!-- <div class="md-layout-item">
            <md-button class="md-icon-button md-icon md-primary" v-on:click="portal.count++">
                <md-icon>add</md-icon>
            </md-button>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'PortalItem',
    props: ["portal"]
}
</script>

<style>
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
</style>
