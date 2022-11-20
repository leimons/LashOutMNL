<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FooterClient from '@/components/Navigation/FooterClient.vue';
    import ServiceCard from '@/components/ServiceView/ServiceCard.vue';
    import ScrollButton from '@/components/ServiceView/ScrollButton.vue';

    import ServiceGridLayout from '@/layouts/ServiceGridLayout.vue';

    import axios from 'axios';

    export default {
        name: 'BrowsView',
        title: 'Brows – LashOut MNL',
        components: {
            NavClient,
            FooterClient,
            ServiceCard,
            ScrollButton,
            ServiceGridLayout
        },
        data() {
            return {
                apiData: []
            }
        },
        mounted() {
            axios
                .get('/api/services', { params: {category: 'Brows'} })
                .then((response) => {
                    this.apiData = response.data
                });
        },
        computed: {
            subcategories() {
                var subcategories_list = this.apiData
                    .map(service => service.Subcategory)        // Get list of subcategories
                    .filter((v, i, a) => a.indexOf(v) === i);   // Keep unique values only

                return subcategories_list.map(subcategory => {
                    return {
                        name: subcategory,
                        services: this.apiData.filter(service => service.Subcategory == subcategory)
                    }
                })
            }      
        }
    }
</script>

<template>
    <NavClient style="position: relative;" />

    <div class="center-layout" id="category-header">
        <h1>Up your <u><i>Brows Game</i></u></h1>
        <p>
            Brows are one of the first things people notice about your face, and you want them to be 
            the best they can be. We offer two different types of brows: microblading and phi shading, 
            and both are totally painless. Talk to us about which option is right for you!
        </p>
    </div>

    <ServiceGridLayout :heading="subcategory.name" v-for="subcategory in subcategories" :key="subcategory.name">
        <ServiceCard v-for="service in subcategory.services" :key="service.Name" :content="service" />
    </ServiceGridLayout>

    <ScrollButton
        :threshold=800 
        style="top: 20px; left: 20px;" 
        @click="() => { this.$router.push('/services') }"
    >
        &#8592; Explore other services
    </ScrollButton>

    <ScrollButton
        :threshold=800 
        style="top: 20px; right: 20px;" 
        @click="() => { this.$router.push('/book') }"
    >
        Proceed to booking &#8594;
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

        #category-header > p {
            width: 90%;
            max-width: 680px;
        }
</style>