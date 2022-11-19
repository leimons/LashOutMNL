<script>
    export default {
        name: 'ServiceGridLayout',
        props: {
            heading: String
        }
    }
</script>

<template>
    <div class="layout-container text-secondary900">
        <div class="heading">
            <h1>{{ heading }}</h1>
        </div>

        <div class="grid-container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .heading {
        width: 100%;
        padding: 5px 50px;
        border-bottom: 1pt solid var(--secondary900);
    }

    h1 {
        width: 100%;
        max-width: 1130px;
        margin-inline: auto;
        font-weight: 400;
    }

    .layout-container {
        margin-bottom: 20px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 350px);
        grid-gap: 40px;

        padding: 30px;
        margin-inline: auto;
        justify-content: center;
        max-width: calc(350px * 3.5);
    }

        .grid-container > div:last-child:nth-child(3n - 2) {
            grid-column: span 3;
        }
</style>