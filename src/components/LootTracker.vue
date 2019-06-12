<template>
    <b-col>
        <h2>Loot</h2>
        <b-card>
        <b-row>
            <b-col>
                <b-form-group label="Currency Counts" id="currency-select">
                    <b-form-group v-for="(currency, key) in currencies" :key="key" :label="key | capitalize" label-cols="3" label-align-sm="right">
                        <b-form-input @blur="updateCurrency()" v-model="currencyCounts[key].final" min="0" class="col-6" :id="`final-${currency}`" type="number"></b-form-input>
                    </b-form-group>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form id="add-item-form" inline @submit="addItem" @submit.stop.prevent>
                    <b-form-group label="Glittering Prizes">
                        <b-input id="item-name-input" v-model="itemName" placeholder="Item name"></b-input>
                        <b-button type="submit" :disabled="itemName.length === 0" variant="primary">Add</b-button>
                    </b-form-group>
                </b-form>
                <div class="loot-lineitem" v-for="(item, index) in itemList" :key="item.itemName">
                    <b-row>
                        <b-col>
                            <span class="offset-1">{{item.itemName | capitalize}}: {{item.itemCount}}</span>
                        </b-col>
                        <b-col>
                            <b-button-group class="offset-1" size="sm">
                                <b-button @click="incrementItem(index)">+</b-button>
                                <b-button @click="decrementItem(index)" :disabled="item.itemCount === 0">-</b-button>
                            </b-button-group>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "LootTracker",
    data() {
        return {
            currencyCounts: {},
            itemName: ''
        }
    },
    computed: {
        currencies() { return this.$store.state.currency; },
        itemList() { return this.$store.state.itemList; }
    },
    methods: {
        updateCurrency() { this.$store.dispatch('updateCurrency', this.currencyCounts); },
        addItem() {
            let item = {
                itemName: this.itemName,
                itemCount: 0
            };

            this.$store.dispatch('updateItemList', item);
            
            this.itemName = '';
        },
        incrementItem(index) { this.itemList[index].itemCount++; },
        decrementItem(index) { this.itemList[index].itemCount--; }
    },
    created() {
        this.currencyCounts = this.$store.state.currency;
    }
}
</script>

<style>

</style>
