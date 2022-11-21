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
        <a href="/"><img src="@/assets/images/logo.png" height="70" /></a>

        <a href="/">Home</a>
        <a v-if="isHomePage" href="#explore-category">Services</a>
        <a v-else href="/services">Services</a>
        <button @click="() => { this.$router.push('/book') }">Book Now</button>
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
    }

    a:first-child {
        margin-right: auto;
    }

    @media screen and (max-width: 780px) {
        a:nth-child(2) {
            display: none;
        }

        nav {
            padding: 0 4%;
        }
    }
</style>