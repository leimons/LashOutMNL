<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';

    import axios from 'axios';
    import adminfunctions from '@/adminfunctions.js';

    export default {
        name: 'AdminServices',
        title: 'Services (Admin) – LashOut MNL',
        components: {
            AdminLayout
        },
        data() {
            return {
                categories: {
                    'Lashes': [],
                    'Nails': [],
                    'Brows': []
                }
            }
        },
        created() {
            Object.keys(this.categories).forEach(category => {
                axios
                    .get(`/api/services/${category}`)
                    .then((response) => {
                        var subcategories = response.data;
                        var services = [];

                        subcategories.forEach(subcateg => {
                            services = [...services, ...subcateg.services];
                        })

                        this.categories[category] = services;
                    })   
            })
        },
        computed: {
            services() {
                return [...this.categories['Lashes'], ...this.categories['Nails'], ...this.categories['Brows']];
            }
        },
        methods: {
            deleteService(service) {
                if ( confirm(`Are you sure you want to delete "${service.Service}"?`) ) {
                    adminfunctions.deleteService(service._id, service.Service);

                    // Remove deleted service from view
                    this.categories[service.Category] = this.categories[service.Category].filter(
                        service_ => service_._id != service._id
                    );
                }
            }
        }
    }
</script>

<template>
    <AdminLayout>
        <div id="container">
            <h1>Services 
                <button class="adding-btn"> <a href="/admin/add-service" > Add Service </a> </button> <!-- TEMP ONLY!! WILL CREATE A STICKY CALL TO ACTION BUTTON -->
            </h1> 
            
            <br />

            <div class="grid-container">
                <div class="service-container" v-for="service in this.services" :key="service._id">
                    <button class="uil uil-trash-alt" @click="deleteService(service)"></button>
                    <a :href="`/admin/services/${service._id}`">
                        <img src="https://via.placeholder.com/280x176/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->
                        
                        <h3>{{ service.Service }}</h3>
                        <div>
                            <span class="bg-primary200">{{ service.Category }}</span>
                            <span class="bg-secondary200">{{ service.Subcategory }}</span>
                        </div>
                    </a>
                </div>
                <a class="service-container" id="add-service-btn" href="/admin/add-service" >
                    <i class="uil uil-plus"></i>
                </a>
            </div>
        </div>
    </AdminLayout>

    <div id="confirmation-popup">

    </div>
</template>

<style>
    #container {
        width: 100%;
        height: 100%;
        background-color: var(--primary50);
        padding: 40px;
    }

    .grid-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;

        margin-inline: auto;
        width: 100%;
        max-width: 1550px;
    }

    .service-container {
        position: relative;
        display: flex;
        flex-direction: column;

        width: 280px;
        min-height: 250px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-color: white;
    }

        .service-container h3 {
            font-weight: 500;
            flex: 1;
        }

        .service-container span {
            padding: 2px 8px;
            margin-right: 4px;
        }

        .service-container h3, .service-container > a > div {
            padding: 12px;
        }

    .service-container button.uil {
        position: absolute;
        right: 5px;
        top: 5px;
        width: min-content;
        padding: 6px;

        font-size: x-large;
        color: grey;
        border: none;
        z-index: 4;
    }

    #add-service-btn {
        border: none;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='grey' stroke-width='4' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

        font-size: 80pt;
        font-weight: 300;
        opacity: 0.75;
    }

        #add-service-btn > i {
            margin-inline: auto;
            line-height: 280px;
            opacity: 0.5;
        }
    
    .adding-btn{
        position: absolute;
        width: 160px;
        height: 24px;
        margin-top: 10px;
        margin-left: 900px;
        background: #F5CEC7;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: none;
        font-size: 12px;
        padding: 3px 24px;

    }
    .adding-btn:hover {
        cursor: pointer;
        background: #f5b3c7;
    }
</style>
