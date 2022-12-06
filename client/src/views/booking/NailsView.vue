<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import BookingServiceCard from '@/components/Booking/ServiceCard.vue';
    
    import bookingMixin from '@/mixins/bookingMixin';
    import cartMixin from '@/mixins/cartMixin';

    export default {
        name: 'NailsView',
        title: 'Nails – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            CenterLayout,
            BookingServiceCard
        },
        mixins: [cartMixin, bookingMixin],
        data() {
            return {
                category: 'Nails'
            }
        },
        methods: {
            nextStep() {
                this.$router.push('/book/checkout')
            }
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

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

    <button id="schedule-btn" @click="nextStep" v-show="this.cart.service">
        Pick a Schedule &#8594;
    </button>

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

    /* others */
    #schedule-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;

        text-transform: none;
        background-color: var(--primary50);
        z-index: 5;
    }
</style>