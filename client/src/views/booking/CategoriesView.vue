<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import CollapsibleItem from '@/components/custom/Collapsible.vue';

    import axios from 'axios';

    export default {
        name: 'BookingCategories',
        title: 'Services – LashOut MNL',
        components: {
            NavClient,
            FullscreenLayout,
            FooterClient,
            CollapsibleItem
        },

        data() {
            return {
                categories: [
                    {
                        name: 'Lashes',
                        title: 'Lash Services',
                        subcategories: []
                    },
                    {
                        name: 'Brows',
                        title: 'Brow Services',
                        subcategories: []
                    },
                    {
                        name: 'Nails',
                        title: 'Nail Services',
                        subcategories: []
                    },
                ]
            }
        },

        created() {
            this.categories.forEach((category, index) => {
                axios
                    .get(`/api/services/${category.name}`)
                    .then((response) => {
                        var subcategories = response.data;
                        subcategories = subcategories.map((subc) => {
                            return {name: subc.name, services: subc.services};
                        });

                        this.categories[index] = {...this.categories[index], subcategories};
                    })
            })
        },

        methods: {
            formatPrice: (num) => {
                return Number(num).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            }
        }
    }
</script>

<template>
    <FullscreenLayout direction="column">

        <NavClient style="position: relative; width: 100%" />

        <div id="container">
            <div id="heading">
                <h1>You <i>deserve</i> to be <u>pampered</u></h1>
                <h3>only here at Lash Out MNL Beauty Lounge</h3>
                <p>*Each service is booked separately.</p>
            </div>

            <CollapsibleItem v-for="category in categories" :key="category.name" :title="category.title">
                <div class="subcategory text-secondary900" v-for="subcategory in category.subcategories" :key="subcategory.name">
                    <div class="subcategory-heading">
                        <h2 style="font-size: 28px;">{{ subcategory.name }}</h2>
                    </div>

                    <div class="service-container">

                        <div class="service-item" v-for="service in subcategory.services" :key="service._id">
                            <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" />
                            
                            <div class="service-heading">
                                <h3>{{ service.Service }}</h3>
                                <p v-if="!service.OnSale">{{ formatPrice(service.Price) }}</p>
                                <p v-else>
                                    <s>{{ formatPrice(service.Price) }}</s>
                                    &nbsp;  {{ formatPrice(service.SalePrice) }}
                                </p>
                            </div>

                            <div class="service-actions">
                                <a v-if="service.Description">Read more</a>
                                <button class="small">Select</button>
                            </div>
                        </div>

                    </div>
                </div>
            </CollapsibleItem>
            
        </div>

    </FullscreenLayout>

    <FooterClient />
</template>

<style>
    body {
        background-color: var(--primary100);
    }

    #container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 50px;
    }

        #container > * {
            width: 100%;
        }

    /* || SECTION – Heading */
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

        #heading > p {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-style: italic;
        }

        #heading > h1 {
            font: 400 48px 'Lora';
        }

        #heading > h3 {
            font: 300 24px 'Lora';
        }

    h2 {
        font: 300 36px 'Lora';
        font-style: italic;
    }

    /* || SECTION – Subcategory View */

    .subcategory-heading {
        width: 100%;
        padding: 5px 20px;
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
        grid-template-columns: repeat(auto-fit, 350px) !important;
        grid-gap: 40px;

        padding: 30px;
        margin-inline: auto;
        justify-content: center;
        width: 100%;
        max-width: 1250px;
    }
        .service-container > .service-item:last-child:nth-child(3n-2) {
            grid-column: span 1;
        }

    /* || SECTION – Service Card */
    .service-item {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 380px;

        background-color: var(--primary50);
    }

    .service-heading {
        flex: 1;
        padding: 10px 20px;
    }

        .service-heading s {
            opacity: 0.33;
        }

        .service-heading p {
            line-height: 28px;
        }

    .service-actions {
        display: flex;
        align-items: center;
        padding: 0 20px 20px 20px;
    }

        .service-actions > a {
            font-family: 'Nunito';
            font-style: italic;
        }

        .service-actions > button {
            margin-left: auto;
        }

    @media screen and (max-width: 900px) {

        h1 {
            line-height: 48px;
            margin-bottom: 30px;
        }
    }
</style>