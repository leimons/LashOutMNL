<script>
    import NavClient from '@/components/NavClient.vue';
    import FooterClient from '@/components/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import ServiceCard from '@/components/ServiceCard.vue';

    export default {
        name: 'BrowsView',
        title: 'Brows – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            CenterLayout,
            ServiceCard
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

    <CenterLayout id="category-header">
        <h1>Up your <u><i>Brows Game</i></u></h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </CenterLayout>

    <div class="subcategory text-secondary900">
        <div class="subcategory-heading">
            <h1>Brow Shading</h1>
        </div>

        <div class="service-container">
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>

    <div class="subcategory text-secondary900">
        <div class="subcategory-heading">
            <h1>Brows Retouch</h1>
        </div>

        <div class="service-container">
            <ServiceCard />
            <ServiceCard />
        </div>
    </div>

    <FooterClient />
</template>

<style>
    body {
        background-color: var(--primary50);
    }
    
    #category-header {
        height: 300px;
    }

        #category-header > h1 {
            width: 600px;
            margin-bottom: 20px;
        
            font-weight: 500;
            text-align: center;
        }

    p {
        width: 600px;
        text-align: center;
    }

    .subcategory-heading {
        width: 100%;
        padding: 5px 50px;
        border-bottom: 1pt solid var(--secondary900);
    }

    .subcategory {
        margin-bottom: 20px;
    }

    .subcategory > div > h1 {
        width: 100%;
        max-width: 1130px;
        margin-inline: auto;
        font-weight: 400;
    }

    .service-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, 350px);
        grid-gap: 40px;

        padding: 30px;
        margin-inline: auto;
        justify-content: center;
        max-width: 1250px;
    }

        .service-container > div:last-child:nth-child(3n - 2) {
            grid-column: span 3;
        }
</style>