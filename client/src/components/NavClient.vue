<script>
    export default {
        name: 'NavClient',
        props: {
            isHomePage: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<template>
    <nav>
        <img src="../assets/images/logo.png" height="70" />

        <a href="/">Home</a>
        <a v-if="isHomePage" href="#explore-category">Services</a>
        <a v-else href="/services">Services</a>
        <a href="#">Bookings</a>    <!-- TODO: Update anchor link -->
    </nav>
</template>

<style scoped>
    nav {
        position: absolute;
        left: 0;
        top: 0;

        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
        justify-content: flex-end;

        height: 100px;
        width: 100%;
        padding: 0 60px;
        
        font: 400 20px 'Nunito';
        text-transform: uppercase;
    }

    img {
        margin-right: auto;
    }
</style>