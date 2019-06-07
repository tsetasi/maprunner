<template>
    <b-col>
        <h2>Timekeeping</h2>
        <b-card>
          <b-row><b-col>Start time: {{startTime | moment('LT')}}</b-col></b-row>
          <br/>
          <b-row>
                <b-col>End time: {{endTime | moment('LT')}}</b-col>
                <b-col><b-button class="offset-2" @click="recordStopTime()" variant="danger">Stop</b-button></b-col>
          </b-row>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "Timekeeping",
    data() {
        return {
            endTime: null
        }
    },
    computed: {
        startTime() { return this.$store.state.startTime; }
    },
    methods: {
        recordStopTime() { 
            this.endTime = new Date(); 
            this.$store.dispatch('setEndTime', this.endTime);
        }
    }
}
</script>

<style>

</style>
