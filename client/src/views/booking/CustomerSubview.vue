<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';

    export default {
        name: 'CustomerSubview',
        components: { MilestoneCard },
        emits: ['completeStep', 'back'],
        props: {
            step: Number,
            currentStep: Number,
            id: String
        },
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    contact: ''
                },
                error: ''
            }
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            }
        },
        methods: {
            validate() {
                if ( this.customer.name.length < 5 )
                    this.error = 'Name field must be have at least 5 characters'
                else if ( !/^[a-zA-Z\s]+$/.test(this.customer.name) )
                    this.error = 'Name field must only contain alphabets'

                else if ( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.customer.email) )
                    this.error = 'Email must be a valid email'

                else if ( !/^(09|639)/.test(this.customer.contact) )
                    this.error = 'Contact number must begin with 09 or 639'
                else if ( !/^\d+$/.test(this.customer.contact) )
                    this.error = 'Invalid contact number'
                else
                    this.error = ''

                return this.error == ''
            },
            completeStep() {
                if ( this.validate() )
                    this.$emit('completeStep', this.customer);
            }
        }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            Personal Information
        </template>
        <template #content>
            <div class="flex-col" :id="id">
                
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
    label {
        display: inline-block;
        width: 100px;
        text-align: right;
        padding-right: 15px;
    }

    input {
        flex: 3;
    }
</style>