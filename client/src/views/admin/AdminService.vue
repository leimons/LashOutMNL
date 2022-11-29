<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import ToggleSwitch from '@/components/ToggleSwitch.vue';

    import axios from 'axios';

    export default {
        name: 'AdminServices',
        title: `Service – LashOut MNL`,
        components: {
            AdminLayout,
            ToggleSwitch
        },
        data() {
            return {
                service: {}
            }
        },
        created() {
            axios
                .get(`/api/services`, { params: {id: this.$route.params.id} })
                .then((response) => {
                    console.log(response.data)
                    this.service = response.data;

                    if ( !this.service )
                        this.$router.push('/admin/services');   // Redirect if invalid id
                })
        },
        methods: {
            formatPrice(num) {
                return Number(num).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'PHP',
                })
            },
        }
    }
</script>

<template>
    <AdminLayout>
        <div id="container" v-if="service">

            <a href="/admin/services">
                &#8592; Back to Services
            </a>

            <img src="https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" style="height: fit-content;" />

            <div id="service-info">
                <div>
                    <h1>{{ service.Service }}</h1>
                    <h3>{{ service.Category }} ({{ service.Subcategory }})</h3>
                </div>

                <h2>{{ formatPrice(service.Price || 0) }}</h2>

                <div id="info-grid">
                    <b>Duration</b>
                    <p>{{ service.Duration }}</p>

                    <b>Description</b>
                    <p v-if="service.Description">{{ service.Description }}</p>
                    <p v-else><i style="opacity: 0.6;">No description.</i></p>

                    <b>OnSale</b>
                    <p><ToggleSwitch disabled :on="service.OnSale" /></p>

                    <b v-if="service.OnSale">Sale Price</b>
                    <p v-if="service.OnSale">{{ service.SalePrice }}</p>
                </div>

                <button class="small grey" @click="() => { this.$router.push(`/admin/services/${service._id}/edit`) }">
                    Edit Service
                </button>
            </div>

        </div>
    </AdminLayout>
</template>

<style>
    #container {
        width: 100%;
        height: 100vh;
        padding: 40px;

        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        align-items: flex-start;

        background-color: var(--primary50);
    }

        #container > a {
            flex-basis: 100%;
            font-style: italic;
        }

    h1, h2 {
        font-weight: 500;
        color: var(--secondary900);
    }

    h3 {
        font-family: 'Nunito';
        font-weight: 300;
        font-style: italic;
    }

    #service-info {
        display: flex; 
        flex-direction: column; 
        gap: 30px; 
        flex: 1; 
        min-width: 480px;
    }

    #container button {
        margin-left: auto;
        text-align: right;
        justify-self: flex-end;
        opacity: 0.8;
    }

    #info-grid {
        display: grid;
        grid-template-columns: 20% auto;
        row-gap: 10px;
        width: 100%;
        
        color: var(--secondary900);
    }

    p {
        text-align: justify;
    }
</style>