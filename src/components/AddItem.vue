<template>
    <div>
        <form @submit="addItem" novalidate class="form-inline">
            <md-field>
                <label for="item name">Item name</label>
                <md-input name="item name" id="item name" v-model="name" />
            </md-field>
            <md-card-actions>
                <md-button type="submit" class="md-primary md-alignment-right">Create item</md-button>
            </md-card-actions>
        </form>
    </div>
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
