<script>
    import { DatePicker } from "v-calendar";
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel';
    import ServiceItem from '@/components/Booking/ServiceItem.vue';

    import { formatPrice, sumDurations } from "@/utils/numbers";
    import sessionCart from '@/utils/sessionCart';
    import axios from "axios";

    export default {
        name: 'ScheduleView',
        components: {
            DatePicker,
            ServiceItem,
            VueCollapsiblePanel,
            VueCollapsiblePanelGroup
        },
        data () {
            return {
                cart: null,
                date: new Date(),   // selected date (consider only day, month, time)
                time: '',          // selected time
                Inclusions: [],
                chosenInclusions: []
            };
        },
        created() {
            this.cart = sessionCart.getItems();

            axios
              .get(`/api/getInclusions/`+ this.cart.map(service=> service.Category))
              .then((response)=>{
                this.Inclusions = response.data
              })
              .catch((e) => {
                console.log(e)
              })
        },
        computed: {
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
            totalPrice() {
                var sum = 0;
                this.cart.forEach(service => {
                    sum += service.Price;
                })
                return formatPrice(sum);
            },
            totalDuration() {
                var durations = this.cart.map(service => service.Duration)
                return sumDurations(durations);
            },
            
        },

        /*methods: {
            chooseInclusions(){
                console.log(this.chosenInclusions)
            }
        } */
    }
</script>

<template>
    <div id="container">
        <div id="order-container">
            <a href="/"><img src="@/assets/images/logo.png" height="60" /></a>

            <h2>Your Order</h2>
            <ServiceItem v-for="service in cart" :key="service.Service" :data="service" show-duration />

            <hr />
            <div id="order-summary">
                <p style="grid-area: totalp;"><i>Total</i></p>
                <p style="grid-area: price;">{{ totalPrice }}</p>

                <p style="grid-area: totald;"><i>Duration</i></p>
                <p style="grid-area: duration;">{{ totalDuration }}</p>
            </div>
        </div>

        <div id="accordion-container">
            <vue-collapsible-panel-group accordion id="accordion">
                <!-- Step 1: Select inclusions -->
                <vue-collapsible-panel>
                    <template #title>
                        <b>Step 1</b>: Select Inclusions
                    </template>
                    <template #content>
                        <div class="Inclusion-Container">
                            <div class="Inclusions"
                            v-for="(inclusions, index) in Inclusions"
                            v-bind:item="inclusions"
                            v-bind:key="index"
                            >
                                <input type="checkbox" :value="inclusions" v-model="chosenInclusions" :id="inclusions"/>
                                <label :for= "inclusions">{{" "+inclusions.Name}}{{" " +inclusions.Price}}</label> 
                            </div>
                        <!--    <button v-on:click="chooseInclusions">Confirm</button> -->
                        </div> <!-- TODO: Show inclusions per service -->
                    </template>
                </vue-collapsible-panel>

                <!-- Step 2: Select schedule -->
                <vue-collapsible-panel :expanded="false">
                    <template #title>
                        <b>Step 2</b>: Select Schedule
                    </template>
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra, arcu vitae bibendum 
                            ornare, velit arcu vehicula risus, ac vestibulum lorem urna nec ante. We look forward to
                            servicing you soon! <!-- TODO: Replace with short schedule picker description -->
                        </p>
                        <div id="sched-select-section">
                            <div id="date">
                                <h3>Select Date:</h3>
                                <DatePicker 
                                    v-model="date" mode="date" color="orange"
                                    :min-date='new Date() /* earliest schedule is today */'
                                    :disabled-dates='{ weekdays: [2] /* closed on Mondays */ }'
                                />
                            </div>

                            <div id="time">
                                <div>
                                    <h3>Select Time on:</h3>
                                    <i>{{ day }}</i>
                                </div>
                        
                                <ul id="times-container">
                                    <li v-for="tm in availableTimes" :key="tm">
                                        <input type="radio" :id="tm" :value="tm" v-model="time" required />&nbsp;
                                        <label :for="tm">{{ tm }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </div>
        
    </div>
</template>

<style>
    @import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'; /* add styles for accordion */

    body {
        background-color: var(--primary100) !important;
    }

    #container {
        display: flex;
        flex-wrap: wrap;
        width: 100vw;
    }

    h1 {
        font-weight: 500;
        margin-bottom: 10px;
    }

    #time {
        flex: 1;
    }

    #date > h3, #time > div {
        height: 70px;
    }

    /* for collapsible panel */
    #accordion-container {
        flex: 1;
        padding: 50px;
        min-width: 600px;
    }

    #accordion {
        font-family: 'Nunito';
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

        /*--base-color*/
        --border-color: var(--primary100) !important;
        --bg-color-header: white !important;
        --bg-color-header-hover: white !important;
        --bg-color-header-active: white !important;
        --bg-color-body: var(--primary50) !important;
    }

    /* || SUBSECTION – Schedule */
    #sched-select-section {
        display: flex;
        gap: 50px;
            
        font-family: 'Nunito';
        padding: 30px;
    }

        #sched-select-section #date {
            flex: 0;
        }

        #sched-select-section h3 {
            line-height: 95%;
        }

    #times-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        max-width: 140px;
        list-style: none;
    }

    /* || SUBSECTION – Order */
    #order-container {
        display: flex;
        flex-direction: column;
        padding: 30px;
        min-width: 500px;
        width: 40%;
        min-height: 100vh;
        height: 100%;

        background-color: white;
    }

        #order-container h2 {
            padding: 20px 0;
            border-bottom: 1pt solid #ddd;
        }

        #order-container hr {
            border: 0.25px solid #ddd;
            height: 0.25px;
            margin-top: auto;
        }

    #order-summary {
        display: grid;
        grid-row-gap: 5px;
        grid-template:
            '. . . totalp price   '
            '. . . totald duration';
        padding: 20px 5px;
    }

        #order-summary > p {
            text-align: right;
            font-size: 20px;
        }

        #order-summary > p:nth-child(n+3) {
            font-size: 17px;
        }

    @media only screen and (max-width: 1100px) {
        .service-item > img {
            height: calc(220px * 0.3);
            width: calc(350px * 0.3);
        }

        #order-container {
            min-width: 400px;
        }
    }

    @media only screen and (max-width: 1020px) {
        #accordion-container {
            padding: 30px !important;
        }
    }

    @media only screen and (max-width: 1000px) {
        .service-item > img {
            height: calc(220px * 0.5);
            width: calc(350px * 0.5);
        }

        #order-container {
            width: 100%;
        }

        #accordion-container {
            height: 100vh;
        }
    }
</style>