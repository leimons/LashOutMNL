<script>
    export default {
        name: 'CategoryItem',
        props: {
            name: String,
            description: String,
            priceDescription: String,
        },
        computed: {
            serviceURL() {
                let id = this.name.toLowerCase().replace(' ', '-');
                return `services#${id}`
            },
            imgURL() {
                let id = this.name.toLowerCase().replace(' ', '-');
                var images = require.context('../assets/images/', false, /\.png$/)
                return images('./' + id + ".png")
            }
        }
    }
</script>

<template>
    <a
        :href="serviceURL"
        @mouseover="showOverlay = true"
        @mouseleave="showOverlay = false"
    >
        <div v-if="showOverlay">{{ description }}</div>

        <img :src="imgURL" style="margin-bottom: 20px;" />
        <h3>{{ name }}</h3>
        <i>{{ priceDescription }}</i>
    </a>
</template>

<style scoped>
    div {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 15px;
        width: 240px;
        height: 320px;

        font: 400 15px 'Nunito';
        text-align: center;
        line-height: 160%;

        background-color: var(--secondary100); 
        opacity: calc(0.8 * 0.85);
    }

    a {
        display: inline-block;
        position: relative;
        width: 240px;
    }

    h3 { font: 300 30px 'Lora'; }
    i { font: 400 20px 'Nunito'; }
</style>