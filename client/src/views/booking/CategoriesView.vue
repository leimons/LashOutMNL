<script>
    import NavClient from '@/components/NavClient.vue';
    import FooterClient from '@/components/FooterClient.vue';

    export default {
        name: 'BookingCategories',
        title: 'Services – LashOut MNL',
        components: {
            NavClient,
            FooterClient
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

    <div id="container">
        <div id="heading">
            <h1>You <i>deserve</i> to be <u>pampered</u></h1>
            <h3>only here at Lash Out MNL Beauty Lounge</h3>
            <p>*Each service is booked separately.</p>
        </div>

        <div class="category" href="/services">
            <img src="https://via.placeholder.com/400x280/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder image -->

            <div>
                <h2>Lash Services</h2>
                <a href="/book/lashes">
                    <u>book now</u> &#8594;
                </a>
            </div>
        </div>

        <div class="category">
            <img src="https://via.placeholder.com/400x280/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder image -->

            <div>
                <h2>Brow Services</h2>
                <a href="/book/brows">
                    <u>book now</u> &#8594;
                </a>
            </div>
        </div>

        <div class="category">
            <img src="https://via.placeholder.com/400x280/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder image -->

            <div>
                <h2>Nail Services</h2>
                <a href="/book/nails">
                    <u>book now</u> &#8594;
                </a>
            </div>
        </div>
    </div>

    <FooterClient />
</template>

<style>
    body {
        background-color: var(--primary100);
    }

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 50px;
    }

    #heading {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 300px;
        width: 100%;

        justify-content: center;
        align-items: center;
        text-align: center;
    }

    p {
        position: absolute;
        right: 20px;
        bottom: 20px;
        font-style: italic;
    }

    h1 {
        font: 400 48px 'Lora';
    }

    h2 {
        font: 300 36px 'Lora';
        font-style: italic;
    }

    h3 {
        font: 300 24px 'Lora';
    }

    .category {
        display: flex;
        width: 100%;
        align-items: center;
        flex-wrap: wrap;

        height: min-content;
        overflow: hidden;

        border: 1.2pt solid var(--secondary900);
        background-color: var(--primary50);
    }

    .category > div {
        text-align: right;
        margin-left: auto;

        padding: 50px;
    }

    @media screen and (max-width: 900px) {
        .category {
            width: 400px;
        }

        .category > div {
            width: inherit;
            text-align: center;
            border: 1px solid pink;
        }

        h1 {
            line-height: 48px;
            margin-bottom: 30px;
        }
    }
</style>