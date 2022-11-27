<script>
    export default {
        name: 'MyCart',
        props: {
            category: String,
            services: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            formatPrice(num) {
                return Number(num).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            },
            hideCart() {
                this.$emit("hideCart");
            }
        },
        computed: {
            totalPrice() {
                let total = 0;

                this.services.forEach(service => {
                    total += service.Price;
                });

                return this.formatPrice(total || 0);
            }
        }
    }
</script>

<template>
    <div id="cart-overlay">
        <h1>Your Top Picks!</h1>

        <div id="service-container">
            <h2>{{ category }}</h2>

            <div class="cart-service-item" v-for="service in this.services" :key="service._id">
                <h3>{{ service.Service }}</h3>
                <hr />
                <p>{{ formatPrice(service.Price) }}</p>
            </div>
        </div>

        <div id="actions">
            <p style="grid-area: total;"><i>Total</i></p>
            <p style="grid-area: price;">{{ totalPrice }}</p>

            <button class="small" style="grid-area: cancel;" @click="hideCart">Cancel</button>
            <button class="small" style="grid-area: next;">Pick a Schedule &#8594;</button>
        </div>
    </div>
</template>

<style scoped>
    #cart-overlay {
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 0;

        height: 100vh;
        width: 450px;
        background-color: var(--primary100);

        border-left: 1pt solid black;
    }

    h1 {
        padding: 20px 10px;
        border-bottom: 1pt solid black;
        font: 500 42px 'Lora';
        font-style: italic;
        text-align: center;
    }

    h2 {
        font-weight: 500;
        font-style: italic;
    }

    #service-container {
        flex: 1;
        padding: 30px;

        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .cart-service-item {
        display: flex; 
        align-items: center;
        padding-left: 20px;
        gap: 20px;
    }

        h3 {
            font-weight: 400;
            width: fit-content;
            max-width: 240px;
        }

        hr {
            flex: 1;
            border: 0.25px solid black;
            height: 0.25px;
        }

    #actions {
        border-top: 1pt solid black;
        padding: 20px;

        display: grid;
        grid-row-gap: 20px;
        grid-template:
            '. . . total price'
            'cancel cancel . next next';
    }

        #actions > p {
            text-align: right;
            font-size: 20px;
        }

    button {
        text-transform: none;
        background-color: var(--primary50);
    }
</style>