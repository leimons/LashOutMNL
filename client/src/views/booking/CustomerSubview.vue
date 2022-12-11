<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';

    export default {
        name: 'CustomerSubview',
        components: { MilestoneCard },
        props: {
            step: Number,
            currentStep: Number,
            id: String
        },
        data() {
            return {
                name: '',
                email: '',
                contact: ''
            }
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
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
                        <input type="text" id="name" v-model="name" required />
                    </div>
                    <div class="flex-row">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="email" required />
                    </div>
                    <div class="flex-row">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" v-model="contact" required />
                    </div>
                </div>

                <div class="flex-row">
                    <button class="small grey" v-show="isActiveStep" @click="prevStep">Back</button>
                    <button class="small dark next" v-show="(currentStep == 3)  && completedStep(3)" @click="nextStep">Next</button>
                </div>

            </div>
        </template>
    </MilestoneCard>
</template>