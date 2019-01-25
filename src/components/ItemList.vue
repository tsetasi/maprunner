<template>
    <div class="viewport">
        <md-toolbar :md-elevation="1">
            <span class="md-title">Items</span>
            <md-button class="md-icon-button md-flat md-primary" v-on:click="showAdd = !showAdd">
                <md-icon v-if="!showAdd">add</md-icon>
                <md-icon v-else>remove</md-icon>
            </md-button>
        </md-toolbar>
        <AddItem v-if="showAdd" v-on:add-item="addItem" />
        <md-list>
            <md-list-item v-bind:key="item.id" v-for="item in items">
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
    props: [],
    data() {
        return {
            'showAdd': false,
            items: [
                {'id': 1, 'name': "thing 1", 'count': 1},
                {'id': 2, 'name': "thing 2", 'count': 2},
                {'id': 3, 'name': "thing 3", 'count': 3}
            ]
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
