<template>
    <div class="viewport">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Items</span>
            <md-button class="md-icon-button md-flat md-primary" v-on:click="showAdd = !showAdd">
                <md-icon v-if="!showAdd">add</md-icon>
                <md-icon v-else>remove</md-icon>
            </md-button>
        </md-toolbar>
        <md-list>
            <AddItem v-if="showAdd" v-on:add-item="addItem" />
            <md-list-item :key="index" v-for="(item, index) in items">
                <ItemDetail v-bind:item="item"/>
            </md-list-item>
        </md-list>
        
    </div>
</template>


<script>
import ItemDetail from './ItemDetail';
import AddItem from './AddItem';

export default {
    components: {
        ItemDetail,
        AddItem,
    },
    name: "Items",
    props: ["items"],
    data() {
        return {
            'showAdd': false
        }
    },
    methods: {
        addItem(newItem) {
            this.items = [...this.items, newItem];
        }
    }
    
}
</script>

<style>

</style>
