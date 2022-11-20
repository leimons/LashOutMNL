<script>
    export default {
        name: 'ServiceCard',
        props: {
            content: Object
        },
        methods: {
            formatPrice: (num) =>
                Number(num).toLocaleString('en-US', {style: 'currency', currency: 'PHP'}),
        }
    }
</script>

<template>
    <div class="service-card">
        <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- placeholder image, TODO: replace with actual service image -->

        <div class="service-content">
            <div class="service-heading">
                <h3>{{ content.Name }}</h3>
                <p v-if="!content.OnSale">{{ formatPrice(content.Price) }}</p>
                <p v-else>
                    <s>{{ formatPrice(content.Price) }}</s><br />
                    {{ formatPrice(content.SalePrice) }}
                </p>
            </div>

            <p class="service-description">
                <i>{{ content.Duration }}.</i>
                {{ content.Description }}
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