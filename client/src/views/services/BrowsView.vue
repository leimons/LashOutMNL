<script>
    import NavClient from '@/components/NavClient.vue';
    import FooterClient from '@/components/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import ServiceCard from '@/components/ServiceCard.vue';
    import ScrollButton from '@/components/ScrollButton.vue';

    export default {
        name: 'BrowsView',
        title: 'Brows – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            CenterLayout,
            ServiceCard,
            ScrollButton
        },
        data() {
            return { /* mock data. TODO: replace with data from API call */
                subcategories: [
                    {
                        name: "Brow Shading",
                        services: [
                            {
                                Service: "Microblading",
                                Category: "Brows",
                                Subcategory: "Brow Shading",
                                Duration: "3 hr",
                                Price: 4000,
                                Description: `Microblading is a form of semi-permanent tattoo for eyebrows which uses individually drawn thin and crisp lines that resembles hair strokes to give the illusion of realistic, natural (yet full) looking brows. Although it’s not as deep as a traditional tattoo, it is still classed as a ‘tattoo’ as pigment is implanted under the skin’s surface.

                                Inclusions: 1 Session, 1 Free Retouch (valid until 45th day of initial treatment)
                                Effect: Natural looking hair-like strokes, Light finish to bold brow look
                                Perfect for: Thin to no brows at all, Not to dense but not too sparse brows, Clients who want more natural style, Clients who don’t always wear makeup but want their brows to be always in shape`,
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "PhiShading",
                                Category: "Brows",
                                Subcategory: "Brow Shading",
                                Duration: "3 hr",
                                Price: 5000,
                                Description: `PhiShading is a technique that involves a combination of Microblading and brow shading together. This technique creates more denser, fuller looking brows that appear to be powdered, but with hair strokes (Microblading). This treatment is recommended for people with oily skin and is ideal for people who have no natural eyebrows. This technique involves filling in or thickening of areas with a soft or darker color which varies in transparency.

                                Inclusions: 1 Session, 1 Free Retouch (valid until 45th day of initial treatment)
                                Effect: Gradient effect, Well-defined brow
                                Perfect for: Oily skin, All types of brow growth, With old tattoo, Clients who are tired of fillings brows regularly with makeup`,
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },
                    {
                        name: "Brow Retouch",
                        services: [
                            {
                                Service: "Brows Retouch (45 days healed)",
                                Category: "Brows",
                                Subcategory: "Brow Retouch",
                                Duration: "1 hr",
                                Price: 0,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Brows Retouch (> 45 days healed)",
                                Category: "Brows",
                                Subcategory: "Brow Retouch",
                                Duration: "1 hr",
                                Price: 1500,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    }
                ]
            }
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

    <div class="subcategory text-secondary900" v-for="subcategory in subcategories" :key="subcategory.name">
        <div class="subcategory-heading">
            <h1>{{ subcategory.name }}</h1>
        </div>

        <div class="service-container">
            <ServiceCard
                v-for="service in subcategory.services"
                :key="service.Service"

                :service="service.Service"
                :duration="service.Duration"
                :price="service.Price"
                :description="service.Description"
            />
        </div>
    </div>

    <ScrollButton threshold="400" @click="() => { this.$router.push('/services') }">
        &#8592; Explore other services
    </ScrollButton>

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