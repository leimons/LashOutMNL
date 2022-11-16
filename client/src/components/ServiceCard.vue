<script>
    export default {
        name: 'ServiceCard',
        data() {
            return {
                image: "https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut"
            }
        }
    }
</script>

<template>
    <div class="service-card">
        <img :src="image" />

        <div class="service-content">
            <div class="service-heading">
                <h3>Service Name</h3>
                <p>₱ 000.00</p>
            </div>

            <p class="service-description">
                <i>2 hrs.</i>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.
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

    .service-description {
        flex: 1;
        overflow-x: scroll;
        width: 100%;
        text-align: justify;
    }
</style>