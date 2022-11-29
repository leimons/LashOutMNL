<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';

    import axios from 'axios';

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
        }
    }
</script>

<template>
    <AdminLayout>
        <div id="container">
            <h1>Services</h1><br />

            <div class="grid-container">
                <a class="service-container" :href="`/admin/services/${service._id}`" v-for="service in this.services" :key="service._id">
                    <img src="https://via.placeholder.com/280x176/cccccc/fdf8f4?text=LashOut" /> <!-- Placeholder. TODO: Replace with service image -->
                    
                    <h3>{{ service.Service }}</h3>
                    <div>
                        <span class="bg-primary200">{{ service.Category }}</span>
                        <span class="bg-secondary200">{{ service.Subcategory }}</span>
                    </div>
                </a>
            </div>
        </div>
    </AdminLayout>
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

        .service-container h3, .service-container > div {
            padding: 12px;
        }
</style>