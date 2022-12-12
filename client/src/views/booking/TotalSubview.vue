<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import { formatPrice } from "@/utils/numbers";

    export default {
        name: 'TotalSubview',
        components: { MilestoneCard },
        emits: ['back', 'completeStep'],
        props: {
            step: Number,
            currentStep: Number,
            id: String,
            cart: Object
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            }
        },
        methods: { formatPrice }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            View Order Summary
        </template>
        <template #content>
            <form @submit.prevent="createAppointment" enctype="multipart/form-data" class="flex-col" :id="id">
                
                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for enter information -->
            
                <div id="items-container" class="flex-col">
                    <div class="flex-row"  v-if="cart.service">
                        <b>Item</b>
                        <b>Price</b>
                    </div>
                    <div class="flex-row"  v-if="cart.service">
                        <p>{{ cart.service.Service }}</p>
                        <p class="price">{{ formatPrice(cart.service.Price) }}</p>
                    </div>
                    <div class="flex-row inclusion" v-for="inclusion in cart.inclusions" :key="inclusion._id"> 
                        <p>{{ inclusion.Name }}</p>
                        <p class="price">{{ formatPrice(inclusion.Price) }}</p>
                    </div>
                    <div class="flex-row"> 
                        <b>Total</b>
                        <p class="price">{{ formatPrice(cart.AmountDue) }}</p>
                    </div>
                </div>

                <div class="flex-row">
                    <button class="small grey" v-show="isActiveStep" @click="this.$emit('back')">Back</button>
                    <button class="small dark next" v-show="isActiveStep" @click="this.$emit('completeStep');">Next</button>
                </div>
                
            </form>
        </template>
    </MilestoneCard>
</template>

<style scoped>
    #items-container {
        width: 100%;
        gap: 0;
    }

        #items-container > .flex-row {
            border-bottom: 1.2pt solid rgba(200, 200, 200, 0.4);
            padding: 10px 20px;
        }

        #items-container > .flex-row:first-child,
        #items-container > .flex-row:nth-last-child(2) 
        { border-color: rgba(200, 200, 200, 0.8); }

        #items-container > .flex-row:last-child { border: none; }

            #items-container > .flex-row > *:first-child { flex: 1; }
            #items-container > .flex-row > *:last-child { width: 120px; }

        #items-container > .flex-row:last-child > *:first-child { text-align: right; }

    .inclusion > p:first-child {
        margin-left: 30px;
    }

    .price {
        font-family: 'Lora';
    }
</style>