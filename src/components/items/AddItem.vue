<template>
    <md-list-item>
        <form @submit="addItem" novalidate class="md-layout form-inline">
            <md-field class="md-layout-item">
                <label for="item name">Item name</label>
                <md-input name="item name" id="item name" v-model="name" />
            </md-field>
            <md-card-actions class="md-layout-item">
                <md-button type="submit" class="md-primary">Create item</md-button>
            </md-card-actions>
        </form>
    </md-list-item>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "AddItem",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addItem(e) {
            e.preventDefault();
            const newItem = {
                id: uuid.v4(),
                name: this.name,
                count: null
            }
            this.$emit('add-item', newItem);
            this.name = '';
        }
    }
}
</script>

<style>

</style>
