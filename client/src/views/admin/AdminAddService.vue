<script>
    import AdminLayout from '@/layouts/AdminLayout.vue';
    import ToggleSwitch from '@/components/ToggleSwitch.vue';
    import adminfunctions from '@/adminfunctions.js';
    import { formatPrice } from '@/utils/numbers';
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
                edit: {},
                image: "https://via.placeholder.com/350x220/cccccc/fdf8f4?text=LashOut" /* TODO: Replace with service image */
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
            formatPrice,
            toggleSwitch() {
                this.edit.OnSale = !this.edit.OnSale;
            },
            visibility(v) {
                return { visibility: v ? 'visible' : 'hidden' }
            },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)  return;

                this.image = URL.createObjectURL(files[0]);
            },
			sv_add()
			{
				var s_name = this.edit.Service;
				var s_category = "Nails" //this.edit.Category;
				var s_subcategory = "Other Nail Services" //this.edit.Subcategory;
				var s_duration = this.edit.Duration;
				var s_price = this.edit.Price;
				var s_description = this.edit.Description;
				var s_onsale = this.edit.OnSale;
				var s_saleprice = this.edit.SalePrice;
				adminfunctions.addService(s_name, s_category, s_subcategory, s_duration, s_price, s_description, s_onsale, s_saleprice);
				this.$router.push('/admin/services');
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

            <div id="image-section">
                <div id="image-container">
                    <img :src="image" />
                </div>

                <button class="small grey">
                    <label for="editImg">Add Image</label>
                </button>
				<input type="file" accept="image/png, image/jpg, image/jpeg" name="editImg" id="editImg" @change="onFileChange" />
            </div>

            <div id="service-info">
                <div>
                    <h1><input v-model="edit.Service" placeholder="Service Name"/></h1>
                    <h3>  </h3>
                    <!-- #TO DO: create drop down for service category -->
                </div>

                <h2>₱<input type="number" step=".01" v-model="service.Price" placeholder="0000"/></h2>

                <div id="info-grid">
                    <b>Duration</b>
                    <input v-model="edit.Duration" placeholder="Service Duration" />

                    <b>Description</b>
                    <textarea v-model="edit.Description" style="height: 82px;" placeholder="Service Description"></textarea>

                    <b>OnSale</b>
                    <p><ToggleSwitch @toggle="toggleSwitch" :on="this.edit.OnSale" /></p>

                    <b :style="visibility(edit.OnSale)">Sale Price</b>
                    <p :style="visibility(edit.OnSale)">
                        ₱<input type="number" step=".01" v-model="edit.SalePrice" />
                    </p>
                </div>

                <div id="actions">
                    <button class="small dark" @click="sv_add()">
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

    /* || SECTION – Service Information */
    #service-info {
        display: flex; 
        flex-direction: column; 
        gap: 30px; 
        flex: 1; 
        min-width: 480px;
    }

    /* || SUBSECTION – Heading (Title, Category, Subcategory, Price) */
    h1, h2 {
        font-weight: 500;
        color: var(--secondary900);
    }

    h3 {
        font-family: 'Nunito';
        font-weight: 300;
        font-style: italic;
    }

    /* || SUBSECTION – Other information */
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

        input[type="number"] {
            width: min-content;
        }

        input[type="file"] {
            display: none;
        }

        h1 > input, h2 > input {
            font-size: 1em;
            font-weight: 500;
        }

    textarea {
        padding: 5px;
        border: 1px solid var(--secondary900);
        overflow: scroll;
    }

    #actions > button {
        float: right;
        margin-right: 10px;
    }

    /* || SECTION – Image */
    #image-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    #image-container {
        width: calc(350px + 2.4pt);
        height: calc(220px + 2.4pt);
        border: 1.2pt solid var(--secondary900);
        overflow: hidden;
    }

        #image-container > image {
            max-width: 350px;
            max-height: 220px;
        }
</style>
