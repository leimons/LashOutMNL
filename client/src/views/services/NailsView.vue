<script>
    import NavClient from '@/components/NavClient.vue';
    import FooterClient from '@/components/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import ServiceCard from '@/components/ServiceCard.vue';
    import ScrollButton from '@/components/ScrollButton.vue';

    export default {
        name: 'NailsView',
        title: 'Nails – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            CenterLayout,
            ServiceCard,
            ScrollButton
        },
        data() {
            return {
                subcategories: [
                    {
                        name: "Regular",
                        services: [
                            {
                                Service: "Regular Manicure",
                                Category: "Nails",
                                Subcategory: "Regular",
                                Duration: "30 min",
                                Price: 150,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Regular Pedicure",
                                Category: "Nails",
                                Subcategory: "Regular",
                                Duration: "30 min",
                                Price: 200,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Regular Manicure-Pedicure Set",
                                Category: "Nails",
                                Subcategory: "Regular",
                                Duration: "1 hr",
                                Price: 300,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },
                    {
                        name: "Gel",
                        services: [
                            {
                                Service: "Gel Manicure",
                                Category: "Nails",
                                Subcategory: "Gel",
                                Duration: "40 min",
                                Price: 450,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Gel Pedicure",
                                Category: "Nails",
                                Subcategory: "Gel",
                                Duration: "40 min",
                                Price: 500,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Gel Manicure-Pedicure Set",
                                Category: "Nails",
                                Subcategory: "Gel",
                                Duration: "1.5 hr",
                                Price: 800,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },
                    {
                        name: "Hard Gel",
                        services: [
                            {
                                Service: "Hard Gel Manicure",
                                Category: "Nails",
                                Subcategory: "Hard Gel",
                                Duration: "2 hr",
                                Price: 600,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hard Gel Manicure with Nail Polish",
                                Category: "Nails",
                                Subcategory: "Hard Gel",
                                Duration: "2 hr",
                                Price: 750,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },
                    {
                        name: "Nail Extensions",
                        services: [
                            {
                                Service: "Nail Extensions (Soft Gel, Polygel, Hardgel)",
                                Category: "Nails",
                                Subcategory: "Nail Extensions",
                                Duration: "2 hr",
                                Price: 1200,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Nail Extensions Manicure and Regular Pedicure",
                                Category: "Nails",
                                Subcategory: "Nail Extensions",
                                Duration: "2 hr",
                                Price: 1350,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Nail Extensions Manicure and Gel Pedicure",
                                Category: "Nails",
                                Subcategory: "Nail Extensions",
                                Duration: "2 hr",
                                Price: 1500,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                        ]
                    },
                    {
                        name: "Other Nail Services",
                        services: [
                            {
                                Service: "Regular Manicure - Gel Pedicure",
                                Category: "Nails",
                                Subcategory: "Other Nail Services",
                                Duration: "1 hr",
                                Price: 600,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Gel Manicure and Regular Pedicure",
                                Category: "Nails",
                                Subcategory: "Other Nail Services",
                                Duration: "1 hr",
                                Price: 600,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hard Gel Manicure and Gel Pedicure",
                                Category: "Nails",
                                Subcategory: "Other Nail Services",
                                Duration: "1 hr",
                                Price: 1050,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hard Gel Manicure with Nail Polish and Regular Pedicure",
                                Category: "Nails",
                                Subcategory: "Other Nail Services",
                                Duration: "1 hr",
                                Price: 900,
                                Description: "",
                                OnSale: false,
                                SalePrice: 0
                            },
                            {
                                Service: "Hard Gel Manicure with Nail Polish and Gel Pedicure",
                                Category: "Nails",
                                Subcategory: "Other Nail Services",
                                Duration: "1 hr",
                                Price: 1200,
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
        <h1>Picture Perfect <u><i>Nails</i></u></h1>
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
                :onSale="service.OnSale"
                :salePrice="service.SalePrice"
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