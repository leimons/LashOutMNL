<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import BookingServiceCard from '@/components/Booking/ServiceCard.vue';
    import ScrollButton from '@/components/ScrollButton.vue';
    import MyCart from '@/components/Booking/MyCart.vue';

    import axios from 'axios';

    export default {
        name: 'NailsView',
        title: 'Nails – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            CenterLayout,
            BookingServiceCard,
            ScrollButton,
            MyCart
        },

        data() {
            return {
                subcategories: [],
                cart: {
                    services: [],
                    refs: []
                },
                showCart: false
            }
        },

        created(){
            axios
                .get(`/api/services/Nails`)
                .then((response)=>{
                    this.subcategories = response.data
                })
                .catch((e) => {
                    console.log(e)
                })
        },

        methods: {
            addToCart(service, ref) {
                function selectItem (ref) {
                    ref.innerHTML = "Selected";
                    ref.classList.value = ref.classList.value.replace('light', 'dark');
                }

                function deselectItem(ref) {
                    ref.innerHTML = "Select";
                    ref.classList.value = ref.classList.value.replace('dark', 'light');
                }
            

                let isSelected = this.cart.refs.includes(ref);
                console.log(isSelected);
                
                if (isSelected) {
                    deselectItem(ref);
                    this.cart = {
                        ...this.cart,
                        services: this.cart.services.filter(v => v !== service), 
                        refs: this.cart.refs.filter(v => v !== ref)
                    };
                } else {
                    selectItem(ref);
                    this.cart = {
                        ...this.cart,
                        services: [...this.cart.services, service], 
                        refs: [...this.cart.refs, ref]
                    };
                }
            }
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

    <div
        id="overlay-dark" 
        @wheel.prevent @touchmove.prevent @scroll.prevent
        v-show="showCart && this.cart.services.length > 0">
    </div>
    <MyCart
        category="Nails" 
        :services="this.cart.services" 
        v-show="showCart && this.cart.services.length > 0"
        @hide-cart="() => { this.showCart = false; }"
    />

    <CenterLayout id="category-header">
        <h1>Picture Perfect <u><i>Nails</i></u></h1>
        <p style="width: 680px;">
            You deserve a relaxing and rejuvenating experience, and we are equipped to provide all 
            of the polish, tools, and techniques you need. Our friendly staff provides excellent 
            customer service and our relaxing environment creates a comfortable space just for you.
        </p>
    </CenterLayout>

    <div class="subcategory text-secondary900" v-for="subcategory in subcategories" :key="subcategory.name">
        <div class="subcategory-heading">
            <h1>{{ subcategory.name }}</h1>
        </div>

        <div class="service-container">
            <BookingServiceCard
                v-for="service in subcategory.services"
                :key="service._id"
                :ref="service._id"

                :data="service"
                @add-to-cart="addToCart"
            />
        </div>
    </div>

    <button
        id="cart-btn" 
        v-if="this.cart.services.length > 0" 
        @click="() => { this.showCart = !this.showCart; }"
    >
        Show Top Picks
    </button>

    <ScrollButton :threshold=400 
        @click="() => { this.$router.push('/book') }" 
        v-else
    >
        &#8592; Explore other services
    </ScrollButton>

    <FooterClient />
</template>

<style>
    body {
        background-color: var(--primary50);
    }
    
    /* || SECTION – Header */
    #category-header {
        height: 300px;
        text-align: center;
    }

        #category-header > h1 {
            width: 600px;
            margin-bottom: 20px;
        
            font-weight: 500;
        }

    /* || SECTION – Subcategory */
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

    /* || SECTION – Floating Buttons */
    #cart-btn {
        position: fixed;
        left: auto;
        top: auto;
        bottom: 20px;
        right: 20px;
        width: 200px;

        font: 300 20px 'Lora';
        font-style: italic;
        text-transform: none;

        background-color: #D9D9D9;
    }

    button {
        z-index: 3;
    }

    /* || SECTION – Cart Overlay */
    #cart-overlay {
        z-index: 10;
    }

    #overlay-dark {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;

        opacity: 0.7;
        z-index: 4;
    }
</style>