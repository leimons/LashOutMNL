<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';

    export default {
        name: 'PaymentSubview',
        components: { MilestoneCard },
        emits: ['back', 'completeStep'],
        props: {
            step: Number,
            currentStep: Number,
            id: String
        },
        data() {
            return {
                proofOfPayment: null,
                error: ''
            }
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            }
        },
        methods: {
            onFileChange() {
                this.proofOfPayment = this.$refs.paymentFile.files[0];
            },
            validate() {
                if ( this.proofOfPayment == null )
                    this.error = "Please upload proof of payment"
                else
                    this.error = '';

                return this.error == '';
            },
            completeStep() {
                if ( this.validate() )
                    this.$emit('completeStep', this.proofOfPayment);
            }
        }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            Payment Information
        </template>
        <template #content>
            <form @submit.prevent="createAppointment" enctype="multipart/form-data" class="flex-col" :id="id">
                
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
                                   
                <input type="file" ref="paymentFile" accept="image/png, image/jpg, image/jpeg" name="editImg" id="editImg" @change="onFileChange" />

                <p class="alert-box bg-primary200" v-show="error">
                    <b>Error:</b> {{ error }}
                </p>

                <div class="flex-row">
                    <button class="small grey" v-show="isActiveStep" @click="this.$emit('back')">Back</button>
                    <button class="small dark next" v-show="isActiveStep" @click="completeStep" style="width: 135px;">Book Now</button>
                </div>
                
            </form>
        </template>
    </MilestoneCard>
</template>

<style>
    .mop-card {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
    }

        .mop-card img {
            width: 100px;
        }

    input[type=file] {
        border: 1.2px dashed #ccc;
        border-radius: 0;
        background: none;
    }
</style>