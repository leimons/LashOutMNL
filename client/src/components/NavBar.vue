<script>
    export default {
        name: 'NavBar'
    }
</script>

<template>
    <nav>
        <img src="../assets/images/logo.png" height="70" />

        <a href="/">Home</a>
        <a href="#explore-category">Services</a>
        <a href="#">Bookings</a>
    </nav>
</template>

<style scoped>
    nav {
        position: relative;
        left: 0;
        top: 0;

        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
        justify-content: end;

        height: 100px;
        padding: 0 60px;
        
        font: 400 20px 'Nunito';
        text-transform: uppercase;
    }

    img {
        margin-right: auto;
    }
</style>