<template>
    <md-list>
        <md-list-item>
            Start time: 
            <div v-if="timestamps.start">{{moment(timestamps.start).format(timeFormat)}}</div>
            <div v-else><md-button class="md-flat md-primary" @click="$emit('start-time')">Start</md-button></div>
            <div><md-button class="md-flat md-accent" @click="$emit('reset-start')">Reset</md-button></div>
        </md-list-item>
        <md-list-item>
            End time: 
            <div v-if="timestamps.end">{{moment(timestamps.end).format(timeFormat)}}</div>
            <div v-else><md-button class="md-flat md-primary" @click="$emit('end-time')">End</md-button></div>
            <div><md-button class="md-flat md-accent" @click="$emit('reset-end')">Reset</md-button></div>
        </md-list-item>
    </md-list>
</template>

<script>

export default {
    name: "Timekeeping",
    props: ["timestamps"],
    data() {
        return {
            timeFormat: "h:mm A"
        }
    }
}
</script>

<style>

</style>
