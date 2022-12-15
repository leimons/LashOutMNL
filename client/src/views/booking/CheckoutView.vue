<script>    
    import InclusionSubview from '@/views/booking/InclusionSubview.vue';
    import ScheduleSubview from '@/views/booking/ScheduleSubview.vue';
    import CustomerSubview from '@/views/booking/CustomerSubview.vue';
    import PaymentSubview from '@/views/booking/PaymentSubview.vue';
    import BeauticianSubview from '@/views/booking/BeauticianSubview.vue';
    import TotalSubview from '@/views/booking/TotalSubview.vue';
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import PopupCard from '@/components/Booking/PopupCard.vue';

    import dbFunctions from '@/dbFunctions.js';

    const SECTION_ID = ["#inclusions-card", "#schedules-card", "#beauticians-card", "#beauticians-card", "#info-card", "#subtotal-card", "#payment-card"];

    export default {
        name: 'CheckoutView',
        title: 'Checkout | LashOut MNL',
        components: { MilestoneCard, InclusionSubview, ScheduleSubview, CustomerSubview, PaymentSubview, BeauticianSubview, TotalSubview, PopupCard },
        data() {
            return {
                currentStep: 1,
                scrollMargin: 0,
                isLoading: true,

                showProtocols: false,

                cart: {},
                bookingDetails: {}
            }
        },
        mounted() {
            this.isLoading = false;
        },
        methods: {
            prevStep(scroll=true) {
                if (scroll) {
                    let currentSectionID = SECTION_ID[this.currentStep-2];
                    this.scrollMargin += this.$refs['container'].querySelector(currentSectionID).offsetHeight + 100;
                }

                this.currentStep--;
            },
            nextStep(scroll=true) {
                if (scroll) {
                    let currentSectionID = SECTION_ID[this.currentStep-1];
                    this.scrollMargin -= (this.$refs['container'].querySelector(currentSectionID).offsetHeight + (100 - 17))
                }

                this.currentStep++;
            },
            createAppointment(){
                var { proofOfPayment, ...appointment } = this.bookingDetails;
                dbFunctions.addAllAppointment(appointment, proofOfPayment);

                this.isLoading = true;
                // TODO: Redirect to confirmation page
            },
            updateInclusions(service, inclusions, AmountDue) {
                this.cart = { service, inclusions, AmountDue };
                this.bookingDetails = { ...this.bookingDetails, 
                    service: service.Service, 
                    inclusions: inclusions.map(inc => inc.Name), 
                    AmountDue
                };
                this.nextStep();
            },
            updateSchedule(schedule) {
                this.bookingDetails = { ...this.bookingDetails, schedule };
                this.nextStep();
            },
            updateBeautician(beautician) {
                this.bookingDetails = { ...this.bookingDetails, beautician };
                this.nextStep(false);
            },
            updateCustomer(customerInfo) {
                var { name, email, contact } = customerInfo;
                this.bookingDetails = { ...this.bookingDetails, name, email, contact };
                this.nextStep();
            },
            updatePayment(proofOfPayment) {
                this.bookingDetails = { ...this.bookingDetails, proofOfPayment };
                this.nextStep();
            },

            onProtocolsClose() {
                this.prevStep(false);
            }
        },
    }
</script>

<template>
    <a href="/" id="logo"><img src="@/assets/images/logo.png" height="70" /></a>

    <div id="cards-container" v-if="!isLoading" ref="container" @wheel.prevent @touchmove.prevent @scroll.prevent :style="{ 'margin-top': this.scrollMargin + 'px' }">

        <!-- Step 1: Select inclusions -->
        <InclusionSubview id="inclusions-card" :step=1 :currentStep="currentStep" @complete-step="updateInclusions" />

        <!-- Step 2: Select schedule -->
        <ScheduleSubview id="schedules-card" :step=2 :currentStep="currentStep" @complete-step="updateSchedule" @back="prevStep" />

        <!-- Step 3: Select beautician -->
        <BeauticianSubview id="beauticians-card" :step=3 :currentStep="currentStep" :schedule="bookingDetails.schedule" @complete-step="updateBeautician" @back="prevStep" />

        <!-- Step 4: Read protocols and policies -->
        
        <!-- Step 5: Enter information -->
        <CustomerSubview id="info-card" :step=5 :currentStep="currentStep" @complete-step="updateCustomer" @back="prevStep" />

        <!-- Step 6: View selected items  -->
        <TotalSubview id="subtotal-card" :step=6 :cart="cart" :currentStep="currentStep" @complete-step="nextStep" @back="prevStep" />

        <!-- Step 7: Payment Information -->
        <PaymentSubview id="payment-card" :step=7 :currentStep="currentStep" @complete-step="updatePayment" @back="prevStep" />

        <!-- Temporary only -->
        <div v-show="currentStep == 8">
        <MilestoneCard>
            <template #content>
                <button class="small dark" :disabled="isLoading" @click="createAppointment">Book Appointment</button>
            </template>
        </MilestoneCard>
        </div>
    </div>

    <PopupCard id="popup-protocols" confirmText="I accept" v-if="currentStep == 4" @close="onProtocolsClose" @cancel="onProtocolsClose" @confirm="nextStep">
        <h2>Protocols and Policies</h2>
        <b>Allergic Reactions</b>
        <p>Please note that any reactions to eyelash extensions are not foreseeable by Lash Out MNL. Whilst care is taken, no refunds will
        be issued for reactions. We do offer a free removal if any reactions occur. Please contact us immediately if you become aware
        of allergic reaction so we can assist you as quickly as possible.</p>

        <b>Arrival</b>
        <p>Please arrive not more than 15 minutes early or 10 minutes later than your appointment. This will give you the necessary time to 
        settle in and remove any make-up or contact lens if need be. Please avoid coming too early or more than 15 minutes for your
        appointment without giving us a notice. This will give us enough time to prepare for your appointment and to not rush if we have
        an ongoing client.</p>

        <b>Late Arrival</b>
        <p>We only have a grace period of 10 minutes. Exceeded time of late arrival will result to automatic cancellation of appointment.
        Being late results us to adjusting the slot for the next client or not accepting their booking at all.</p>

        <b>Rescheduling/Cancellation</b>
        <p>A minimum of 72 hours (3 days) notice must be given to reschedule or cancel appointments. This will give us enough time to book
        someone from our waiting list.</p>

        <b>No Show</b>
        <p>If you do not show up to your appointment without prior call or text of at least 3 hours before your appointment, your payment will
        be automatically forfeited and will be considered a "No show".</p>

        <b>Companions</b>
        <p>No companion is allowed in the lounge.</p>

        <i>By booking with us, you are accepting the terms and conditions of our policies.</i>
    </PopupCard>
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

    .small-gap { gap: 10px; }
    
    .alert-box { padding: 20px; }

    input[type=text], input[type=email], input[type=tel] {
        border-radius: 0;
        border: none;
        border-bottom: 1.2pt solid grey;
        background: none;
    }

    label { flex: 1; }

    #logo {
        position: fixed;
        top: 10px;
        left: 10px;
        opacity: 0.85;
    }

    /* SECTION || Cards */
    #cards-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        max-width: 800px;
        margin-inline: auto;
        padding: 80px 0;

        transition: margin-top 0.7s;
    }

    .next {
        width: min-content;
        margin-left: auto;
    }

    /* SECTION || Protocols */
    #popup-protocols h2 {
        margin-inline: auto;
    }

    #popup-protocols p {
        margin-bottom: 10px;
    }
</style>