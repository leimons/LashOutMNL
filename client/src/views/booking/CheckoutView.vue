<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import { DatePicker } from "v-calendar";

    import cartMixin from '@/mixins/cartMixin';
    import axios from 'axios';

    export default {
        name: 'CheckoutView',
        components: { MilestoneCard, DatePicker },
        mixins: [cartMixin],
        data() {
            return {
                currentStep: 1,
                mounted: false,

                Inclusions: [],

                date: new Date(),  // selected date (consider only day, month, time)
                time: '',          // selected time
            }
        },
        mounted() {
            this.mounted = true;
            this.date = this.earliestBookingDate;

            axios
                .get(`/api/getInclusions/`+ this.cart.service.Category)
                .then((response)=>{
                    this.Inclusions = response.data
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        methods: {
            prevStep() {
                this.currentStep--;
            },
            nextStep() {
                this.currentStep++;
            }
        },
        computed: {
            totalPrice() {
                let servicePrice = this.cart.service.Price;
                let inclusionsPrice = this.cart.inclusions.reduce((partialSum, a) => partialSum + a.Price, 0) || 0;
                return servicePrice + inclusionsPrice;
            },
            day() {
                // Returns the selected date formatted (ex. 'Dec 1, 2022')
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                return this.date.toLocaleDateString('en-US', options);
            },
            availableTimes() {
                // Returns the available times during the selected date.
                // TODO: Get available times from API. Will return mock data for now
                return ["8:00 AM", "10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"];
            },
            selectedSchedule() {
                // Returns a date object with the selected date and time
                let selected = this.day + ' ' + this.time + " GMT+0800";
                return new Date(selected);
            },
            earliestBookingDate() {
                var date = new Date();

                do {
                    date.setDate(date.getDate() + 1); // add a day
                } while (date.getDay() == 1);    // check if day is Monday

                return date;
            }
        }
    }
</script>

<template>
    <div id="cards-container" v-if="mounted">

        <!-- Step 1: Select inclusions -->
        <MilestoneCard :step=1 :currentStep="currentStep">
            <template #heading>
                Select Inclusions
            </template>
            <template #content>
                <div class="flex-col" id="inclusions-card">
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for select inclusions -->

                    <div class="flex-row">
                        <!-- selected service -->
                        <div class="flex-col small-gap" style="width: 200px;">
                            <img id="service-img" src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->

                            <div>
                                <b>{{ cart.service.Service }}</b>
                                <p>{{ formatPrice(cart.service.Price) }}</p>
                            </div>
                        </div>

                        <!-- inclusions -->
                        <div class="flex-col small-gap" style="flex: 1;">
                            <div class="flex-row selection" v-for="(inclusion, index) in Inclusions" :key="inclusion._id">
                                <input type="checkbox" :value="inclusion" v-model="this.cart.inclusions" :id="index"/>
                                <label :for= "index">{{ inclusion.Name }}</label>
                                <p>{{ formatPrice(inclusion.Price) }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex-row" style="flex-direction: row-reverse;">
                        <button class="small dark" v-show="(currentStep == 1)" @click="nextStep">Next</button>
                        <h3 class="text-secondary900">
                            <b>Total:</b> {{ formatPrice(totalPrice) }}
                        </h3>
                    </div>
                </div>
            </template>
        </MilestoneCard>


        <!-- Step 2: Select schedule -->
        <MilestoneCard :step=2 :currentStep="currentStep">
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
                                <div class="selection" v-for="tm in availableTimes" :key="tm">
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
                        <button class="small dark next" v-show="(currentStep == 2)" @click="nextStep">Next</button>
                    </div>
                </div>
            </template>
        </MilestoneCard>


        <!-- Step 3: Enter information -->
        <MilestoneCard :step=3 :currentStep="currentStep">
            <template #heading>
                Personal Information
            </template>
        </MilestoneCard>


        <!-- Step 4: Payment Confirmation -->
        <MilestoneCard :step=4 :currentStep="currentStep">
            <template #heading>
                Payment Confirmation
            </template>
        </MilestoneCard>
    </div>
</template>

<style>
    body {
        background-color: var(--primary100);
    }

    .flex-row {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .flex-col {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    .small-gap {
        gap: 10px;
    }

    /* SECTION || Cards */
    #cards-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        max-width: 800px;
        margin-inline: auto;
        padding-top: 50px;
    }

    .next {
        width: min-content;
        margin-left: auto;
    }

    /* SUBSECTION || Inclusion selection */
    #service-img {
        width: calc(350px * 0.9);
        width: calc(220px * 0.9);
    }

    .selection {
        box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 8px 12px;
    }

        label {
            flex: 1;
        }

    #inclusions-card p, #inclusions-card h3 {
        font-family: 'Lora';
        font-weight: normal;
    }

    /* SUBSECTION || Schedule selection */
    #schedules-card > div {
        align-items: baseline;
    }

    #alert-appointment {
        padding: 20px;
        background-color: var(--secondary100);
    }
</style>