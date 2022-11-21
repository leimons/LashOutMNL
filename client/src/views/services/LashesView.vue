<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';
    import ServiceCard from '@/components/ServiceCard.vue';
    import ScrollButton from '@/components/ScrollButton.vue';
    import dbFunctions from '@/dbFunctions.js';
    import axios from 'axios'

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
                subcategories:[]
            }
        },

        created(){
          axios
            .get(`/api/services/Lashes`)
            .then((response)=>{
                this.subcategories = response.data
            })
            .catch((e) => {
                console.log(e)
            })
        },

        methods: {
            chooseService (value, price){
                dbFunctions.addAppointment (value, price);
            }
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

    <CenterLayout id="category-header">
        <h1>For your <u><i>Flawless Lashes</i></u></h1>
        <p style="width: 680px;">
            Become a stylish woman with our range of beautiful, professional quality lashes.<br />
            With a simple yet stylish design and high-quality materials, our lashes are carefully 
            crafted to ensure that you have the perfect amount of volume, length and curl.
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
                @click="chooseService(service.Service, service.Price)"
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
        text-align: center;
    }

        #category-header > h1 {
            width: 600px;
            margin-bottom: 20px;
        
            font-weight: 500;
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