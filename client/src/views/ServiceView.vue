<script>
    import NavBar from '@/components/NavBar.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    import dbFunctions from '../dbFunctions';

    import axios from 'axios';

    export default {
        name: 'ServiceView',
        components: {
            NavBar,
            FullscreenLayout
        },

        data(){
            return{
                services: []
            } 
        },

        created(){
            axios
                .get(`/api/services`)
                .then((response) => {
                    this.services = response.data
                })
                .catch((e)=>{
                    console.log(e);
                });
        },

        methods:{
            async addAppointment(value) {
                await dbFunctions.addAppointment(value);
            }
        }
    }
</script>

<template>
    <FullscreenLayout id="hero" direction="column">
        <NavBar isHomePage />
        <h1>Available Services</h1>
        <div class="service-container" v-for="(service, index) in services"
          v-bind:item="service"
          v-bind:index="index"
          v-bind:key="service._id" 
        >
            <p class="service">{{ service.Name }}</p>
            <button v-on:click="addAppointment(service.Name)"> Select </button>
        </div>
    </FullscreenLayout>
</template>

<style scoped>
    h2 {
        font: 600 32px 'Nunito';
        text-transform: uppercase;
    }

    /* || SECTION – Hero */
    #hero {
        background-color: var(--primary100);
    }
</style>
