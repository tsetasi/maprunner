<template>
    <b-modal id="portal-modal" size="md" 
        header-bg-variant="header"
        header-text-variant="white"
        centered 
        no-close-on-backdrop 
        no-close-on-esc
        hide-header-close
        ok-only 
        :ok-title="portalType.failText"
        :ok-disabled="floorReached === 0"
        @ok="saveResults()" 
        @shown="resetModal()"
        title="Best of luck!">

        <b-form-group label="Portal Type">
            <b-form-radio-group>
                <b-form-radio class="offset-1" :value="option" v-model="portalType" v-for="option in portalOptions" :key="option.name">{{option.name}}</b-form-radio>
            </b-form-radio-group>
        </b-form-group>

        <b-form-group :label="portalType.type | capitalize">
            <div>
                <span class="offset-1">{{floorReached}}</span>
                <b-button-group class="offset-1" size="sm">
                    <b-button @click="incrementFloor()" :disabled="floorReached === portalType.max || portalType.name === null">+</b-button>
                    <b-button @click="decrementFloor()" :disabled="floorReached === 0">-</b-button>
                </b-button-group>
            </div>
        </b-form-group>

        <b-form-group :label="'Loot Gathered'">
            <b-form id="add-item-form" inline @submit="addItem" @submit.stop.prevent>
                    <b-form-group>
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
        </b-form-group>




    </b-modal>
</template>

<script>
export default {
    name: "PortalModal",
    data() {
        return {
            portalType: {failText: "OK", max: 0},
            floorReached: 1,
            itemList: [],
            itemName: '',
            startTime: null
        }
    },
    computed: {
        portalOptions() { return this.$store.state.portalTypes; }
    },
    methods: {
        incrementFloor() { this.floorReached++; },
        decrementFloor() { this.floorReached--; },
        incrementItem(index) { this.itemList[index].itemCount++; },
        decrementItem(index) { this.itemList[index].itemCount--; },
        addItem() {
            this.itemList.push({itemName: this.itemName, itemCount: 0});
            let item = {itemName: this.itemName, itemCount: 0};
            this.$store.dispatch('updateItemList', item);
            this.itemName = '';
        },
        resetModal() {
            this.portalType = this.$store.state.portalTypes[0];
            this.floorReached = 1;
            this.itemList = [];
            this.itemName = '';
            this.startTime = this.$moment();
            this.$store.state.itemList.forEach((item) => {
                this.itemList.push({itemName: item.itemName, itemCount: 0});
            });
        },
        saveResults() {
            let itemsGained = [];

            this.itemList.forEach((item) => {
                if (item.itemCount > 0) {
                    itemsGained.push(item)
                }
            });

            let runDetails = {
                portalType: this.portalType.name,
                floorReached: this.floorReached,
                itemsGained: itemsGained,
                startTime: this.startTime,
                endTime: this.$moment(),
                cleared: (this.portalType.max === this.floorReached)
            };
            this.$store.dispatch('savePortalRun', runDetails);
        }
    }
}
</script>

<style>

</style>
