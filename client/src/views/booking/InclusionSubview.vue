<script>
    import axios from 'axios';

    import MilestoneCard from '@/components/Booking/MilestoneCard.vue';
    import cartMixin from '@/mixins/cartMixin';

    export default {
        name: 'InclusionSubview',
        components: { MilestoneCard },
        mixins: [cartMixin],
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
                        <div class="flex-row selection" v-for="(inclusion, index) in Inclusions" :key="inclusion._id">
                            <input type="checkbox" :value="inclusion" v-model="this.cart.inclusions" :id="index"/>
                            <label :for= "index">{{ inclusion.Name }}</label>
                            <p>{{ formatPrice(inclusion.Price) }}</p>
                        </div>
                    </div>
                </div>

                <div class="flex-row" style="flex-direction: row-reverse;">
                    <button class="small dark" v-show="isActiveStep" @click="nextStep">Next</button>
                    <h3 class="text-secondary900">
                        <b>Total:</b> {{ formatPrice(totalPrice) }}
                    </h3>
                </div>

            </div>
        </template>
    </MilestoneCard>
</template>