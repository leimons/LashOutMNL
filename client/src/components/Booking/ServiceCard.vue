<script>
    export default {
        name: 'BookingServiceCard',
        props: {
            data: Object
        },
        data() {
            return {
                btnRef: null
            }
        },
        created() {
            //console.log('yuh',this.$refs.selectBtn);
            this.btnRef = this.$refs.selectBtn;
        },
        methods: {
            formatPrice(num) {
                return Number(num).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            },
            showOverlay() {
                this.$emit('show-overlay', this.data)
            },
            addToCart() {
                this.$emit('add-to-cart', this.data, this.$refs.selectBtn)
            }
        }
    }
</script>

<template>
    <div class="service-card">
        <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->

        <div class="service-content">
            <div class="service-heading">
                <h3>{{ data.Service }}</h3>
    
                <p v-if="data.OnSale">
                    <s>{{ formatPrice(data.Price) }}</s><br />
                    {{ formatPrice(data.SalePrice) }}
                </p>
                <p v-else>{{ formatPrice(data.Price) }}</p>
            </div>

            <p class="service-description">
                <i>{{ data.Duration }}.</i>
                {{ data.Description }}
            </p>
        </div>

        <button class="small light" @click="addToCart" ref="selectBtn">Select</button>
    </div>
</template>

<style>
    .service-card {
        position: relative;
        width: 350px;
        height: 450px;
        background-color: white;
    }

        .service-card > button {
            position: absolute;
            top: 10px;
            right: 10px;
            opacity: 0.9;
        }

        .service-card > button.light {
            background-color: white;
        }

    .service-content {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 230px;
        padding: 15px;
    }

    .service-heading {
        display: flex;
    }

        .service-heading > p {
            margin-left: auto;
            width: 140px;
            text-align: right;
        }

        .service-heading s {
            opacity: 0.33;
        }

    .service-description {
        flex: 1;
        overflow-x: scroll;
        width: 100%;
        text-align: justify;
    }
</style>