<script>
    import NavBar from '@/components/NavBar.vue';
    import CategoryItem from '@/components/CategoryItem.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';

    import axios from 'axios';

    export default {
        name: 'HomeView',
        components: {
            NavBar,
            CategoryItem,
            FullscreenLayout
        },

        data() {
            return {
                categories: []
            }
        },

        created() {
            axios
                .get(`/api/services`)
                .then((response) => {
                    this.categories = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }
</script>

<template>
    <!-- HERO -->
    <FullscreenLayout direction="column" id="hero">
        <NavBar isHomePage />

        <div id="content">
            <div>
                <p>
                    Lorem ipsum <i>dolor</i> sit amet, <br>
                    consectetur <i>adipiscing</i> elit, <br>
                    integer <u>sodales</u> elit finibus.
                </p>
                
                <button>Book Now</button>
            </div>

            <div id="carousel-container">
                <img src="../assets/images/carousel1.png" height="500" />
            </div>
        </div>
    </FullscreenLayout>

    <!-- EXPLORE BY CATEGORY -->
    <FullscreenLayout direction="column" id="explore-category">
        <h2>Explore by Category</h2>

        <div id="category-services">

            <CategoryItem
                v-for="category in categories"
                :key="category.name"

                :name="category.name"
                :description="category.description"
                :priceDescription="category.priceDescription"    
            />

        </div>
    </FullscreenLayout>

    <!-- APPOINTMENT RULES -->
    <img src="../assets/images/appointment.png" class="infoImg" />

    <!-- PROTOCOLS & POLICIES -->
    <img src="../assets/images/protocols.png" class="infoImg" />

    <!-- LOCATION -->
    <img src="../assets/images/location.png" id="location" class="infoImg" />

    <!-- FOOTER -->
    <footer>
        <img src="../assets/images/footer_quote.png"/>

        <div>
            <a href="#location">Location</a>
            <a href="#">Book an Appointment</a> <!-- TODO: Update anchor link -->
            <a href="#">Terms & Conditions</a>  <!-- TODO: Update anchor link -->

            <a href="https://www.instagram.com/lashout.mnl/" id="icon-ig">
                <img src="../assets/images/icons_instagram.png" />
                LashOut.MNL
            </a>
        </div>
    </footer>
</template>

<style scoped>
    /* || General styles */
    h2 {
        font: 600 32px 'Nunito';
        text-transform: uppercase;
    }

    /* || SECTION – Hero */
    #hero {
        background-color: var(--primary100);
    }

    #content {
        display: flex;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 50px 10%;
        
        padding: 80px 50px;
    }

        #content p {
            margin-bottom: 50px;
            font: 300 36px 'Lora';
        }

    /* || SECTION – Explore by Category */
    #explore-category {
        padding: 80px 50px;
        background-color: var(--primary50);
    }

    #category-services {
        margin-top: 60px;
        gap: 40px 15px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        color: var(--secondary900);
    }

    /* || SECTION – Appointment Ryles, Protocols, Location */
    .infoImg {
        width: 100vw;
    }

    /* || SECTION – Footer */
    footer {
        position: relative;
        width: 100%;
        height: 450px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: rgba(223, 174, 174, 0.63); /* pink100 w/ 63% opacity */
    }

        footer a {
            font: 700 16px 'Nunito';
            color: var(--pink800);
            line-height: 22px;
            text-transform: uppercase;
        }

        footer > div {
            position: absolute;
            bottom: 0;
            padding: 20px 40px;
            gap: 30px;

            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        footer > img {
            width: 750px;
            max-width: 90%;
        }

    #icon-ig {
        margin-left: auto; 
        gap: 5px; 
        color: black;

        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>