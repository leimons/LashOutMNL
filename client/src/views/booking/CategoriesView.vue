<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import CollapsibleItem from '@/components/custom/Collapsible.vue';
    import BookingServiceCard from '@/components/Booking/ServiceCard.vue';

    import axios from 'axios';

    export default {
        name: 'BookingCategories',
        title: 'Services – LashOut MNL',
        components: {
            NavClient,
            FullscreenLayout,
            FooterClient,
            CollapsibleItem,
            BookingServiceCard
        },

        data() {
            return {
                isMounted: false,
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
                ],
                cart: {
                    service: {},    // service info
                    ref: null,
                    inclusions: []
                },
                overlay: {
                    show: false,
                    service: {
                        Name: '',
                        Category: '',
                        Subcategory: '',
                        Price: 0,
                        Duration: '',
                        Description: ''
                    }
                }
            }
        },

        created() {
            this.categories.forEach((category, index) => {
                axios
                    .get(`/api/services/${category.name}`)
                    .then((response) => {
                        var subcategories = response.data.map((subc) => {
                            return {name: subc.name, services: subc.services};
                        });

                        this.categories[index] = {...this.categories[index], subcategories};
                    })
            })
        },

        mounted() {
            this.isMounted = true;
        },

        methods: {
            formatPrice(num) {
                return Number(num).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            },
            toggleOverlay() {
                this.overlay = {...this.overlay, show: !this.overlay.show};
            },
            showOverlay(serviceData) {
                this.overlay = {...this.overlay, service: serviceData}
                this.toggleOverlay();
            },
            addToCart(service, ref) {
                this.cart.service = service;

                console.log(ref.classList.value)

                function selectItem(ref) {
                    ref.innerHTML = "Selected";
                    ref.classList.value = ref.classList.value + ' dark';
                }

                function deselectItem(ref) {
                    ref.innerHTML = "Select";
                    ref.classList.value = ref.classList.value.replace(' dark','');
                }
                
                
                if ( this.cart.ref ) {    // Check if cart is not empty
                    deselectItem(this.cart.ref)

                    if (this.cart.ref == ref)   // deselect current item
                        this.cart = {...this.cart, ref: null};
                    else {
                        selectItem(ref);        // select new item
                        this.cart = {...this.cart, ref};
                    }
                } else {
                    selectItem(ref);    // select new item
                    this.cart = {...this.cart, ref};
                }

            }
        },

        computed: {
            overlayStyle() {
                return {
                    width: this.overlay.show ? '400px' : '0'
                }
            }
        }
    }
</script>

<template>
    <FullscreenLayout direction="column">

        {{ cart }}

        <NavClient style="position: relative; width: 100%" />

        <div id="container">
            <div id="heading">
                <h1>You <i>deserve</i> to be <u>pampered</u></h1>
                <h3>only here at Lash Out MNL Beauty Lounge</h3>
                <p>*Each service is booked separately.</p>
            </div>

            <!-- Category View -->
            <CollapsibleItem
                v-for="category in categories" 
                :key="category.name" 
                :title="category.title"
            >

                <!-- Subcategory View -->
                <div
                    class="subcategory text-secondary900" 
                    v-for="subcategory in category.subcategories" 
                    :key="subcategory.name"
                >
                    <div class="subcategory-heading">
                        <h2 style="font-size: 28px;">{{ subcategory.name }}</h2>
                    </div>

                    <!-- Service Items -->
                    <div class="service-container">
                        <BookingServiceCard
                            v-for="service in subcategory.services"
                            :key="service._id"
                            :ref="service._id"

                            :data="service"
                            @show-overlay="showOverlay"
                            @add-to-cart="addToCart"
                        />
                    </div>
                </div>

            </CollapsibleItem>
            
        </div>

    </FullscreenLayout>

    <div id="overlay-container" :style="overlayStyle">
        <div id="service-overlay">
            <button id="close" @click="toggleOverlay">×</button>
            <i style="opacity: 0.5;">{{ overlay.service.Category }} > {{ overlay.service.Subcategory }}</i>

            <div>
                <h2 style="margin-bottom: 8px;">{{ overlay.service.Service }}</h2>

                <p v-if="!overlay.service.OnSale">{{ formatPrice(overlay.service.Price) }}</p>
                <p v-else>
                    <s>{{ formatPrice(overlay.service.Price) }}</s>
                    &nbsp;  {{ formatPrice(overlay.service.SalePrice) }}
                </p>
            </div>

            <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder image. TODO: Replace with service image -->

            <p><b>Duration</b>: {{ overlay.service.Duration }}</p>
            <p style="flex: 1; overflow: scroll;">{{ overlay.service.Description }}</p>

            <button class="text-secondary900" style="margin-top: auto;">Select</button>
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
        gap: 10px;
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
        .service-container .service-item:last-child:nth-child(3n-2) {
            grid-column: span 1;
        }
    
    /* || SECTION – Service Overlay */
    #overlay-container {
        position: fixed;
        left: -1.2pt;
        top: 0;
        z-index: 5;

        height: 100vh;
        width: 400px;
        overflow-x: hidden;
        transition: width 0.2s ease-out;

        background-color: var(--primary50);
        color: var(--secondary900);
        border-right: 1.2pt solid var(--secondary900);
    }

    #service-overlay {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-inline: auto;

        width: 400px;
        height: 100%;
        padding: 20px;
    }

        #service-overlay p {
            text-align: justify;
        }

        #service-overlay #close {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 6;

            font-size: 30px;
            border: none;
        }
</style>