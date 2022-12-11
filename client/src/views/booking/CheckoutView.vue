<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    
    import InclusionSubview from '@/views/booking/InclusionSubview.vue';
    import ScheduleSubview from '@/views/booking/ScheduleSubview.vue';
    import dbFunctions from '@/dbFunctions.js';

    const SECTION_ID = ["#inclusions-card", "#schedules-card", "#info-card"];

    export default {
        name: 'CheckoutView',
        title: 'Checkout | LashOut MNL',
        components: { MilestoneCard, InclusionSubview, ScheduleSubview },
        data() {
            return {
                currentStep: 1,
                scrollMargin: 0,
                isLoading: true,
   
                customer: {
                    name: '',
                    email: '',
                    contact: ''
                },
                proofOfPayment: null,
                hasSetAppointment: false
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
            onFileChange() {
                this.proofOfPayment = this.$refs.paymentFile.files[0]
            //    console.log(this.proofOfPayment)
            /*    var files = e.target.files || e.dataTransfer.files;
                if (!files.length)  return;
                this.proofOfPayment = URL.createObjectURL(files[0]);
                console.log(this.proofOfPayment) */
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
        <MilestoneCard :step=3 :currentStep="currentStep">
            <template #heading>
                Personal Information
            </template>
            <template #content>
                <div class="flex-col" id="info-card">
                    
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for enter information -->
                
                    <!-- Customer Information -->
                    <div style="width: 100%;">
                        <div class="flex-row">
                            <label for="name">Name</label>
                            <input type="text" id="name" v-model="customer.name" required />
                        </div>
                        <div class="flex-row">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="customer.email" required />
                        </div>
                        <div class="flex-row">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" v-model="customer.contact" required />
                        </div>
                    </div>

                    <div class="flex-row">
                        <button class="small grey" v-show="(currentStep == 3)" @click="prevStep">Back</button>
                        <button class="small dark next" v-show="(currentStep == 3)  && completedStep(3)" @click="nextStep">Next</button>
                    </div>

                </div>
            </template>
        </MilestoneCard>


        <!-- Step 4: Payment Information -->
        <MilestoneCard :step=4 :currentStep="currentStep">
            <template #heading>
                Payment Information
            </template>
            <template #content>
                <div class="flex-col" id="info-card">
                    
                    <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for enter information -->
                
                    <!-- Mode of Payment Options -->
                    <div class="flex-row">
                        <div class="mop-card flex-row">
                            <img src="https://cdn1.codashop.com/S/content/common/images/mno/DRAGONPAY_GCash_CHNL_LOGO.png" alt="GCash" />
                            <div>
                                <p>Nicole Patricia F. Suriaga</p>
                                <p>09773843092</p>
                            </div>
                        </div>
                        <div class="mop-card flex-row">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Asia_United_Bank_logo.svg/2560px-Asia_United_Bank_logo.svg.png" alt="Asia United Bank" />
                            <div>
                                <p>Nicole Patricia F. Suriaga</p>
                                <p>525-11-0000693</p>
                            </div>
                        </div>
                    </div>
                    <form @submit.prevent="createAppointment" enctype="multipart/form-data">                   
                        <input type="file" ref="paymentFile" accept="image/png, image/jpg, image/jpeg" name="editImg" id="editImg" @change="onFileChange" />

                        <div class="flex-row">
                            <button class="small grey" v-show="(currentStep == 4)" @click="prevStep">Back</button>
                            <button class="small dark next" v-show="(currentStep == 4) && completedStep(4)" :disabled="hasSetAppointment">Next</button>
                        </div>
                    </form>

                </div>
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

    .small-gap { gap: 10px; }

    input[type=text], input[type=email], input[type=tel], input[type=file] {
        border-radius: 0;
        border: none;
        border-bottom: 1.2pt solid grey;
        background: none;
    }

    input[type=file] {
        border: 1.2px dashed #ccc;
    }
    
        input:placeholder-shown { font-style: italic; }

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

    /* SUBSECTION || Customer information */
    #info-card label {
        display: inline-block;
        width: 100px;
        text-align: right;
        padding-right: 15px;
    }

    #info-card input {
        flex: 3;
    }

    /* SUBSECTION || Payment information */
    .mop-card {
        box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
    }

        .mop-card img {
            width: 100px;
        }
</style>