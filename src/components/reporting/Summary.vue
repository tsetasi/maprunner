<template>
    <div class="md-layout md-alignment-left">
        <div class="md-layout-item">
            <div v-for="currency in currencies" :key="currency.name">
                {{currency.ending - currency.starting}} {{currency.name}}
            </div>
        </div>
        <div class="md-layout-item">
            <div v-for="portal in portals" :key="portal.type">
                {{portal.count}} {{portal.type}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Summary",
    props: [
        "currencies",
        "portals"
    ]
}
</script>

<style>

</style>
