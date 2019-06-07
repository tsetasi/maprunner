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
        title="Best of luck!">

        <b-form-group label="Portal Type">
            <b-form-radio-group>
                <b-form-radio class="offset-1" :value="option" v-model="portalType" v-for="option in portalOptions" :key="option.name">{{option.name}}</b-form-radio>
            </b-form-radio-group>
        </b-form-group>

        <b-form-group :label="'Floor Reached'">
            <div>
                <span class="offset-1">{{floorReached}}</span>
                <b-button-group class="offset-1" size="sm">
                    <b-button @click="incrementFloor()" :disabled="floorReached === portalType.max">+</b-button>
                    <b-button @click="decrementFloor()" :disabled="floorReached === 0">-</b-button>
                </b-button-group>
            </div>
        </b-form-group>

        <b-form-group :label="'Loot Gathered'">

        </b-form-group>




    </b-modal>
</template>

<script>
export default {
    name: "PortalModal",
    data() {
        return {
            portalType: {failText: "OK", max: 0},
            floorReached: 0
        }
    },
    computed: {
        portalOptions() { return this.$store.state.portalTypes; },
    },
    methods: {
        incrementFloor() { this.floorReached++; },
        decrementFloor() { this.floorReached--; },
    }
}
</script>

<style>

</style>
