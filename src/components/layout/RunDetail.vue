<template>
    <md-dialog :md-active.sync="showDialog" :md-click-outside-to-close="false" :md-close-on-esc="false" :md-backdrop="true">
        <md-dialog-title>Portal Details</md-dialog-title>
        
        <md-divider />

        <form novalidate>
            <div class="md-layout md-gutter">
                <md-radio class="md-layout-item" v-model="portalType" value="canals">Canals</md-radio>
                <md-radio class="md-layout-item" v-model="portalType" value="altars">Altars</md-radio>
                <md-radio class="md-layout-item" v-model="portalType" value="hidden">Thief</md-radio>
            </div>

            <div class="md-layout md-gutter md-alignment-center-center">
                <h3 class="md-layout-item">
                    {{portalType === 'altars' ? 'Invocation: ' : 'Floor: '}} {{floor}}
                </h3>
                <div class="md-layout-item">
                    <md-button class="incrementor md-icon-button md-raised md-primary" :disabled="isDisabled" @click="floor++">
                        <md-icon>add</md-icon>
                    </md-button>
                    <md-button class="incrementor md-icon-button md-raised md-primary" :disabled="floor <= 0" @click="floor--">
                        <md-icon>remove</md-icon>
                    </md-button>
                </div>
            </div>
        </form>

        <md-divider />

        <md-list>
            <md-list-item :key="index" v-for="(item, index) in items">
                <ItemDetail v-bind:item="item"/>
            </md-list-item>
        </md-list>

        <md-divider />

        <md-dialog-actions>
            <!-- <md-button class="md-primary" @click="showDialog = false">Cancel</md-button> -->
            <md-button class="md-primary" @click="saveRun()">{{(portalType === 'altars') ? 'fucking atomos' : 'should have gone left'}}</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
import ItemDetail from '../items/ItemDetail';

export default {
    name: 'RunDetail',
    components: {
        ItemDetail
    },
    props: ["showDialog", "items"],
    data: () => ({
        portalType: 'canals',
        floor: 1
    }),
    computed: {
        isDisabled() {
            return (!this.portalType || this.portalType === 'altars' ? (this.floor >= 5) : (this.floor >= 7));
        }
    },
    methods: {
        saveRun: function (e) {
            this.$emit('save-run', {'portalType': this.portalType, 'floor': this.floor})
            this.portalType = 'canals';
            this.floor = 1;
        } 
    }
}
</script>

<style scoped>
    form {
        margin: 20px;
    }

    h3 {
        margin-left: 20px;
    }

    .incrementor {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>
