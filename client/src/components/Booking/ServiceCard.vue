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
    <div class="service-item">
        <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder image. TODO: Replace with service image -->
        
        <div class="service-heading">
            <h3>{{ data.Service }}</h3>
            <p v-if="!data.OnSale">{{ formatPrice(data.Price) }}</p>
            <p v-else>
                <s>{{ formatPrice(data.Price) }}</s>
                &nbsp;  {{ formatPrice(data.SalePrice) }}
            </p>
        </div>

        <div class="service-actions">
            <a v-if="data.Description" @click="showOverlay">Read more</a>
            <button class="small" @click="addToCart" ref="selectBtn">Select</button>
        </div>
    </div>
</template>

<style>
    .service-item {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 380px;

        background-color: var(--primary50);
    }

    .service-heading {
        flex: 1;
        padding: 10px 20px;
    }

        .service-heading s {
            opacity: 0.33;
        }

        .service-heading p {
            line-height: 28px;
        }

    .service-actions {
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;
    }

        .service-actions > a {
            font-family: 'Nunito';
            font-style: italic;
            cursor: pointer;
        }

        .service-actions > button {
            margin-left: auto;
        }
</style>