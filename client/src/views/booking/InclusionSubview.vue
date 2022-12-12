<script>
    import axios from 'axios';

    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import cartMixin from '@/mixins/cartMixin';

    export default {
        name: 'InclusionSubview',
        components: { MilestoneCard },
        mixins: [cartMixin],
        emits: ['completeStep'],
        props: {
            step: Number,
            currentStep: Number,
            id: String
        },
        data() {
            return {
                Inclusions: []
            }
        },
        mounted() {
            axios
                .get(`/api/getInclusions/`+ this.cart.service.Category)
                .then((response) => {
                    this.Inclusions = response.data
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        computed: {
            isActiveStep() {
                return this.step == this.currentStep
            }
        },
        methods: {
            completeStep() {
                this.$emit('completeStep', this.cart.service, this.cart.inclusions, this.totalPrice);
            }
        }
    }
</script>

<template>
    <MilestoneCard :step=step :currentStep="currentStep">
        <template #heading>
            Select Inclusions
        </template>
        <template #content>
            <div class="flex-col" :id="id">

                <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie est at ante luctus fringilla. Morbi venenatis turpis sapien, sit amet euismod metus fringilla ut.</i><!-- TODO: Add description/instructions for select inclusions -->

                <div class="flex-row" style="align-items: flex-start;">
                    <!-- selected service -->
                    <div class="flex-col small-gap" style="width: 200px;">
                        <img id="service-img" src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->

                        <div v-if="cart.service">
                            <b>{{ cart.service.Service }}</b>
                            <p v-if="this.cart.service.OnSale">
                                <s>{{ formatPrice(this.cart.service.Price) }}</s><br />
                                {{ formatPrice(this.cart.service.SalePrice) }}
                            </p>
                            <p v-else>{{ formatPrice(this.cart.service.Price) }}</p>
                        </div>
                    </div>

                    <!-- inclusions -->
                    <div class="flex-col small-gap" style="flex: 1;">
                        <label class="flex-row selection" :for= "index" v-for="(inclusion, index) in Inclusions" :key="inclusion._id">
                            <input type="checkbox" :value="inclusion" v-model="this.cart.inclusions" :id="index"/>
                            <label :for= "index">{{ inclusion.Name }}</label>
                            <p>{{ formatPrice(inclusion.Price) }}</p>
                        </label>
                    </div>
                </div>

                <div class="flex-row" style="flex-direction: row-reverse;">
                    <button class="small dark" v-show="isActiveStep" @click="completeStep">Next</button>
                    <h3 class="text-secondary900">
                        <b>Total:</b> {{ formatPrice(totalPrice) }}
                    </h3>
                </div>

            </div>
        </template>
    </MilestoneCard>
</template>

<style>
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
</style>