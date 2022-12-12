<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';

    export default {
        name: 'BeauticianSubview',
        components: { MilestoneCard },
        emits: ['back', 'completeStep'],
        props: {
            step: Number,
            currentStep: Number,
            id: String,

            schedule: Date
        },
        data() {
            return {
                beautician: '',
                Beauticians: [],
                error: ''
            }
        },
        watch: {
            schedule: function (/* chosenSchedule */) {
                this.getAvailableBeauticians(/* chosenSchedule */)
            }
        },
        mounted() {
            this.getAvailableBeauticians(/* schedule */);
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            }
        },
        methods: {
            getAvailableBeauticians(/* schedule */) {
                // TODO: Get available beauticians from db given the chosen schedule for the appointment. Will return mock data for now
                this.Beauticians = ['Beautician 1', 'Beautician 2', 'Beautician 3'];
            },
            validate() {
                if ( this.beautician == '' )
                    this.error = "Please select a beautician"
                else
                    this.error = '';

                return this.error == '';
            },
            completeStep() {
                if ( this.validate() )
                    this.$emit('completeStep', this.beautician);
            }
        }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            Select Beautician
        </template>
        <template #content>
            <div class="flex-col" :id="id">
                
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for enter information -->
            
                <!-- Mode of Payment Options -->
                <div class="flex-row small-gap">
                    <label :for="bt" class="selection" v-for="bt in Beauticians" :key="bt">
                        <input type="radio" :id="bt" :value="bt" v-model="beautician" required />&nbsp;
                        {{ bt }}
                    </label>
                </div>

                <p class="alert-box bg-primary200" v-show="error">
                    <b>Error:</b> {{ error }}
                </p>

                <div class="flex-row">
                    <button class="small grey" v-show="isActiveStep" @click="this.$emit('back')">Back</button>
                    <button class="small dark next" v-show="isActiveStep" @click="completeStep">Next</button>
                </div>
                
            </div>
        </template>
    </MilestoneCard>
</template>

<style scoped>
    .selection {
        width: 100%;
        padding: 15px 20px;
    }
    .selection > * {
        flex: 1;
    }
</style>