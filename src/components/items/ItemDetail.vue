<template>
    <div class="md-layout md-gutter md-alignment-center-space-between">
        <span class="md-layout-item">
            <md-button class="incrementor md-icon-button md-raised md-primary" @click="item.count++">
                <md-icon>add</md-icon>
            </md-button>
            <md-button class="incrementor md-icon-button md-raised md-primary" :disabled="item.count <= 0" @click="item.count--">
                <md-icon>remove</md-icon>
            </md-button>
        </span>
        <span class="md-layout-item">
            {{item.name}}: {{item.count}}
        </span>
    </div>
</template>

<script>
export default {
    name: "ItemDetail",
    props: ["item"]
}
</script>

<style scoped>
    
</style>
