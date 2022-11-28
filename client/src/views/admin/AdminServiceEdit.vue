<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import ToggleSwitch from '@/components/ToggleSwitch.vue';
    
    import axios from 'axios';

    export default {
        name: 'AdminServicesEdit',
        title: `Edit Service – LashOut MNL`,
        components: {
            AdminLayout,
            ToggleSwitch
        },
        data() {
            return {
                service: {},
                edit: {}
            }
        },
        created() {
            axios
                .get(`/api/services`, { params: {id: this.$route.params.id} })
                .then((response) => {
                    this.service = response.data;
                    this.edit = response.data;

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
            toggleSwitch() {
                this.edit.OnSale = !this.edit.OnSale;
            },
            visibility(v) {
                return { visibility: v ? 'visible' : 'hidden' }
            }
        },
        computed: {
            hasChanges() {
                var columns = Object.keys(this.service);
                var hasChanges = columns.some(column => this.service[column] == this.edit[column]);
                console.log(hasChanges)

                return hasChanges;
            }
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
                    <h1><input v-model="edit.Service" /></h1>
                    <h3>{{ service.Category }} ({{ service.Subcategory }})</h3>
                </div>

                <h2>₱<input type="number" step=".01" v-model="service.Price" /></h2>

                <div id="info-grid">
                    <b>Duration</b>
                    <input v-model="edit.Duration" />

                    <b>Description</b>
                    <textarea v-model="edit.Description" style="height: 82px;"></textarea>

                    <b>OnSale</b>
                    <p><ToggleSwitch @toggle="toggleSwitch" :on="this.edit.OnSale" /></p>

                    <b :style="visibility(edit.OnSale)">Sale Price</b>
                    <p :style="visibility(edit.OnSale)">
                        ₱<input type="number" step=".01" v-model="edit.SalePrice" />
                    </p>
                </div>

                <div id="actions">
                    <button class="small dark">
                        Save
                    </button>
                    <button class="small grey" @click="() => { this.$router.push(`/admin/services/${service._id}`) }">
                        Cancel
                    </button>
                </div>
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

    input, textarea {
        width: 100%;
        resize: none;
        border-radius: 0;
        
        font: 300 16px 'Lora';
        color: var(--secondary900);
        background: none;
    }

    input {
        padding: 0;
        border-width: 0 0 1px 0;
    }

    textarea {
        padding: 5px;
        border: 1px solid var(--secondary900);
        overflow: scroll;
    }

    h1 > input, h2 > input {
        font-size: 1em;
        font-weight: 500;
    }

    input[type="number"] {
        width: min-content;
    }

    #actions button {
        float: right;
        margin-right: 10px;
    }
</style>