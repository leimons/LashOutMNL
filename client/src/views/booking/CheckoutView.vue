<script>    
    import InclusionSubview from '@/views/booking/InclusionSubview.vue';
    import ScheduleSubview from '@/views/booking/ScheduleSubview.vue';
    import CustomerSubview from '@/views/booking//CustomerSubview.vue';
    import PaymentSubview from '@/views/booking/PaymentSubview.vue';
    import dbFunctions from '@/dbFunctions.js';

    const SECTION_ID = ["#inclusions-card", "#schedules-card", "#info-card", "#payment-card"];

    export default {
        name: 'CheckoutView',
        title: 'Checkout | LashOut MNL',
        components: { InclusionSubview, ScheduleSubview, CustomerSubview, PaymentSubview },
        data() {
            return {
                currentStep: 1,
                scrollMargin: 0,
                isLoading: true
            }
        },
        mounted() {
            this.isLoading = false;
        },
        methods: {
            prevStep() {
                let currentSectionID = SECTION_ID[this.currentStep-2];
                this.scrollMargin += this.$refs['container'].querySelector(currentSectionID).offsetHeight + 100;

                this.currentStep--;
            },
            nextStep() {
                let currentSectionID = SECTION_ID[this.currentStep-1];
                this.scrollMargin -= (this.$refs['container'].querySelector(currentSectionID).offsetHeight + (100 - 17))

                this.currentStep++;
            },
            completedStep() {
                switch (this.currentStep) {
                    case 1: // Select inclusions
                        return true;    // No requirements
                    case 2: // Select schedule
                        return !(
                            ((this.selectedSchedule.getTime() - new Date().getTime()) / 36e5) < 2 // Minimum lead time is 2 hours
                            || this.selectedSchedule.getDay() == 1   // Closed on Mondays
                            || this.time == ''   // Must have selected time
                        );
                    case 3: // Customer information
                        return !(
                            !this.customer.name ||
                            !this.customer.email ||
                            !this.customer.contact
                        );
                    case 4: // Payment confirmation
                        return !(
                            this.proofOfPayment == null
                        )
                    default:    return ;
                }
            },
            createAppointment(){
                if ( !this.hasSetAppointment ) {
                    var appointment = {
                        ClientName: this.customer.name,
                        ClientEmail: this.customer.email,
                        ClientContact: this.customer.contact,
                        Product: this.cart.service.Service,
                        Inclusions: this.cart.inclusions.map(inclusion => inclusion.Name),
                        AmountDue: this.totalPrice,
                        Schedule: this.selectedSchedule,
                    }
                    dbFunctions.addAllAppointment(appointment, this.proofOfPayment)
                    //dbFunctions.addAppointment(appointment, this.proofOfPayment)
                    //dbFunctions.uploadPayment(this.proofOfPayment)

                    this.hasSetAppointment = true;
                }
            },
            
        },
    }
</script>

<template>
    <a href="/" id="logo"><img src="@/assets/images/logo.png" height="70" /></a>

    <div id="cards-container" v-if="!isLoading" ref="container" @wheel.prevent @touchmove.prevent @scroll.prevent :style="{ 'margin-top': this.scrollMargin + 'px' }">

        <!-- Step 1: Select inclusions -->
        <InclusionSubview id="inclusions-card" :step=1 :currentStep="currentStep" />

        <!-- Step 2: Select schedule -->
        <ScheduleSubview id="schedules-card" :step=2 :currentStep="currentStep" />

        <!-- Step 3: Enter information -->
        <CustomerSubview id="info-card" :step=3 :currentStep="currentStep" />

        <!-- Step 4: Payment Information -->
        <PaymentSubview id="payment-card" :step=4 :currentStep="currentStep" />
        
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

    .small-gap { gap: 10px; }

    input[type=text], input[type=email], input[type=tel], input[type=file] {
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
</style>