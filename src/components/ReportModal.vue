<template>
    <b-modal id="report-modal" size="md" 
        header-bg-variant="header"
        header-text-variant="white"
        centered
        hide-header-close
        ok-only
        ok-title="Neat!"
        title="Portal Run Details">

    <div role="tablist">
        <b-card no-body class="mb-1" v-for="(detail, index) in details" :key="detail.startTime | moment('x')">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block :variant="detail.cleared ? 'clear' : 'primary'" size="lg" v-b-toggle="`detail-${index}`">{{detail.portalType}} {{detail.cleared ? 'clear!' : detail.floorReached}}</b-button>
            </b-card-header>
            <b-collapse :id="`detail-${index}`" accordion="detail-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>
                        <b-row>
                        <b-col class="offset-1">
                            <b-row v-for="item in detail.itemsGained" :key="item.itemName">
                                {{item.itemName | capitalize}}: {{item.itemCount}}
                            </b-row>
                        </b-col>
                            <b-col class="offset-1">
                                <b-row>{{detail.startTime | moment('LT')}}</b-row>
                                <b-row>{{detail.endTime | moment('LT')}}</b-row>
                                <b-row>{{runTime(detail)}} minutes elapsed</b-row>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card-body> 
            </b-collapse>
        </b-card>
    </div>
    </b-modal>
</template>

<script>
export default {
    name: "ReportModal",
    computed: {
        details() { return this.$store.state.portalRuns; }
    },
    methods: {
        runTime(runDetail) {
            return runDetail.endTime.diff(runDetail.startTime, 'minutes');
        }
    }

}
</script>

<style>

</style>
