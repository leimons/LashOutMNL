<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import { DatePicker } from "v-calendar";

    export default {
        name: 'ScheduleSubview',
        components: { MilestoneCard, DatePicker },
        props: {
            step: Number,
            currentStep: Number,
            id: String
        },
        data() {
            return {
                date: new Date(),
                time: '',  
            }
        },
        mounted() {
            this.date = this.earliestBookingDate;
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            },
            day() {
                // Returns the selected date formatted (ex. 'Dec 1, 2022')
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return this.date.toLocaleDateString('en-US', options);
            },
            selectedSchedule() {
                // Returns a date object with the selected date and time
                let selected = this.day + ' ' + this.time + " GMT+0800";
                return new Date(selected);
            },
            earliestBookingDate() {
                var date = new Date();
                while (date.getDay() == 1 || this.getAvailableTime(date).length == 0) { // Closed on Mondays
                    date.setDate(date.getDate() + 1);
                }

                return date;
            }
        },
        methods: {
            getAvailableTime(dateKey) {
                // Returns the available times during the selected date.
                // TODO: Get available times from API. Will return mock data for now
                var availableTimesAPI = ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];

                if ( dateKey.toDateString() == new Date().toDateString() ) {
                    // If same day, booking must be at least 2 hours after the appointment is made
                    var now = new Date();
                    var today = now.toISOString().split('T')[0];

                    return availableTimesAPI.filter(time_ => {
                        let sched = new Date(`${today} ${time_} GMT+0800`);
                        return ((sched.getTime() - now.getTime()) / 36e5) >= 2
                    })
                }
            
                return availableTimesAPI
            }
        }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            Select Schedule
        </template>
        <template #content>
            <div class="flex-col" id="schedules-card">
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for select schedule -->
            
                <div class="flex-row">
                    <div class="flex-col">
                        <h3>Select Date:</h3>
                        <DatePicker 
                            v-model="date" mode="date" color="orange"
                            :min-date='earliestBookingDate'
                            :disabled-dates='{ weekdays: [2] /* closed on Mondays */ }'
                        />
                    </div>

                    <div class="flex-col" style="flex: 1;">
                        <div class="flex-row small-gap">
                            <h3>Select Time on:</h3>
                            <i>{{ day }}</i>
                        </div>
                
                        <div class="flex-col small-gap">
                            <div class="selection" v-for="tm in getAvailableTime(this.date)" :key="tm">
                                <input type="radio" :id="tm" :value="tm" v-model="time" required />&nbsp;
                                <label :for="tm">{{ tm }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <p id="alert-appointment" v-show="time">
                    <b>Your appointment is on:</b><br />
                    {{ selectedSchedule }}
                </p>

                <div class="flex-row">
                    <button class="small grey" v-show="(currentStep == 2)" @click="prevStep">Back</button>
                    <button class="small dark next" v-show="(currentStep == 2) && completedStep(2)" @click="nextStep">Next</button>
                </div>
            </div>
        </template>
    </MilestoneCard>
</template>