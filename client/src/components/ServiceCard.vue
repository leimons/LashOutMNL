<script>
    export default {
        name: 'ServiceCard',
        props: {
            service: {
                type: String,
                default: ''
            },
            duration: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: 0
            },
            description: {
                type: String,
                default: ''
            },
            imageURL: {
                type: String,
                default: "https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" // placeholder image
            },
            onSale: {
                type: Boolean,
                default: false
            },
            salePrice: {
                type: Number,
                default: 0
            }
        },
        computed: {
            formattedPrice() {
                return Number(this.price).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            },
            formattedSalePrice() {
                return Number(this.salePrice).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            }
        }
    }
</script>

<template>
    <div class="service-card">
        <img :src="imageURL" />

        <div class="service-content">
            <div class="service-heading">
                <h3>{{ service }}</h3>
                <p v-if="!onSale">{{ formattedPrice }}</p>
                <p v-else>
                    <s>{{ formattedPrice }}</s><br />
                    {{ formattedSalePrice }}
                </p>
            </div>

            <p class="service-description">
                <i>{{ duration }}.</i>
                {{ description }}
            </p>
        </div>
    </div>
</template>

<style>
    .service-card {
        position: relative;
        width: 350px;
        height: 450px;
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