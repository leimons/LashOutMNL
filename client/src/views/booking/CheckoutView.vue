<script>
    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import cartMixin from '@/mixins/cartMixin';
    import axios from 'axios';

    export default {
        name: 'CheckoutView',
        components: { MilestoneCard },
        mixins: [cartMixin],
        data() {
            return {
                currentStep: 1,
                mounted: false,
                inclusions: []
            }
        },
        mounted() {
            this.mounted = true;

            axios
                .get(`/api/getInclusions/`+ this.cart.service.Category)
                .then((response)=>{
                    this.inclusions = response.data
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        methods: {

        },
        computed: {
            totalPrice() {
                let servicePrice = this.cart.service.Price;
                let inclusionsPrice = this.cart.inclusions.reduce((partialSum, a) => partialSum + a.Price, 0) || 0;
                return servicePrice + inclusionsPrice;
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
                        <div class="flex-col" style="width: 200px; gap: 10px;">
                            <img id="service-img" src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->

                            <div>
                                <b>{{ cart.service.Service }}</b>
                                <p>{{ formatPrice(cart.service.Price) }}</p>
                            </div>
                        </div>

                        <!-- inclusions -->
                        <div class="flex-col" style="flex: 1; gap: 10px;">
                            <div class="flex-row inclusion" v-for="(inclusion, index) in inclusions" :key="inclusion._id">
                                <input type="checkbox" :value="inclusion" v-model="this.cart.inclusions" :id="index"/>
                                <label :for= "index">{{ inclusion.Name }}</label>
                                <p>{{ formatPrice(inclusion.Price) }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex-row" style="flex-direction: row-reverse;">
                        <button class="small dark">Next</button>
                        <h3 class="text-secondary900"><b>Total:</b> {{ formatPrice(totalPrice) }}</h3>
                    </div>
                </div>
            </template>
        </MilestoneCard>


        <!-- Step 2: Select schedule -->
        <MilestoneCard :step=2 :currentStep="currentStep">
            <template #heading>
                Select Schedule
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

    .inclusion {
        box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 8px 12px;
    }

        .inclusion label {
            flex: 1;
        }

    #inclusions-card p, #inclusions-card h3 {
        font-family: 'Lora';
        font-weight: normal;
    }
</style>