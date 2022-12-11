<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';

    export default {
        name: 'CustomerSubview',
        components: { MilestoneCard },
        emits: ['complete-step', 'back'],
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
        },
        methods: {
            completeStep() {
                this.$emit('completeStep', this.$data);
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