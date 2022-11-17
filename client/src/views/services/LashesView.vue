<script>
    import NavClient from '@/components/NavClient.vue';
    import FooterClient from '@/components/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import ServiceCard from '@/components/ServiceCard.vue';
    import ScrollButton from '@/components/ScrollButton.vue';

    export default {
        name: 'LashesView',
        title: 'Lashes – LashOut MNL',
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
                        name: "Lash Set",
                        services: [
                            {
                                Service: "Classic Full Set - Junior Lash Tech",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "2 hr",
                                Price: 450,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Classic Full Set",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "2 hr",
                                Price: 800,
                                Description: "Fully covered lash line with 1:1 eyelash extension-to-natural lashes ratio. Lasts 2 to 6 weeks. Follows the natural shape of your eye.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hybrid Lashes",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "2 hr",
                                Price: 1200,
                                Description: "A combination of Classic and Volume lashes.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Wet Mascara Set",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "2 hr",
                                Price: 1300,
                                Description: "The Wet Mascara appears similar to Classic Full Set, but they are thicker and bolder looking because of the wider appearance of the lash bundles. ",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Volume Lashes",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "2 hr",
                                Price: 1400,
                                Description: "This set has a fully covered lash line with 3:1 or 4:1 eyelash extension-to-natural lashes ratio. Lasts 2 to 6 weeks.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Kim K Lash Set",
                                Category: "Lashes",
                                Subcategory: "Lash Set",
                                Duration: "3.5 hr",
                                Price: 1400,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },

                    {
                        name: "Lash Retouch",
                        services: [
                            {
                                Service: "Classic Full Set Retouch",
                                Category: "Lashes",
                                Subcategory: "Lash Retouch",
                                Duration: "1 hr",
                                Price: 500,
                                Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Classic Full Set (for ex. Hybrid Lashes, Wet Set or Volume Lashes), you will be charged with a new set price.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hybrid Lashes Retouch",
                                Category: "Lashes",
                                Subcategory: "Lash Retouch",
                                Duration: "1 hr",
                                Price: 600,
                                Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Hybrid Lashes (for ex. Classic Full Set, Wet Set or Volume Lashes), you will be charged with a new set price.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Wet Mascara Set Retouch",
                                Category: "Lashes",
                                Subcategory: "Lash Retouch",
                                Duration: "1 hr",
                                Price: 680,
                                Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Wet Mascara Set (for ex. Classic Full Set, Hybrid Lashes, or Volume Lashes), you will be charged with a new set price.",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Volume Lashes Retouch",
                                Category: "Lashes",
                                Subcategory: "Lash Retouch",
                                Duration: "2 hr",
                                Price: 700,
                                Description: "Please take note that this service is only eligible for clients who had their initial set done by Lash Out MNL Beauty Lounge. If you had previous lashes from a different artist, or have an existing set that is not Volume Lashes (for ex. Classic Full Set, Hybrid Lashes, or Wet Mascara Set), you will be charged with a new set price.",
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
        <h1>For your <u><i>Flawless Lashes</i></u></h1>
        <p> <!-- TODO: Add category description -->
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