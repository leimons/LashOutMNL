<script>
    import NavBar from '@/components/NavBar.vue';

    export default {
        name: 'HomeView',
        components: {
            NavBar
        }
    }
</script>

<template>
    <!-- HERO -->
    <div id="hero">
        <NavBar />

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
    </div>

    <!-- EXPLORE BY CATEGORY -->
    <div id="explore-category">
        <h2>Explore by Category</h2>

        <div id="category-services">

            <a href="services#lashes" id="categ1">
                <div class="category-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed consectetur 
                    ligula. Integer vel augue at nisl interdum auctor id a odio. Suspendisse lacus est, 
                    aliquet ut luctus eget, auctor a nibh.
                </div>

                <img src="../assets/images/lashes1.png" />
                <h3>Lashes</h3>
                <i>starts at ₱550.00</i>
            </a>

            <a href="services#lashes-retouch" id="categ2">
                <div class="category-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed consectetur 
                    ligula. Integer vel augue at nisl interdum auctor id a odio. Suspendisse lacus est, 
                    aliquet ut luctus eget, auctor a nibh.
                </div>

                <img src="../assets/images/lashes2.png" />
                <h3>Lashes Retouch</h3>
                <i>starts at ₱500.00</i>
            </a>

            <a href="services#nails" id="categ3">
                <div class="category-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed consectetur 
                    ligula. Integer vel augue at nisl interdum auctor id a odio. Suspendisse lacus est, 
                    aliquet ut luctus eget, auctor a nibh.
                </div>

                <img src="../assets/images/nails1.png" />
                <h3>Nails</h3>
                <i>starts at ₱150.00</i>
            </a>

            <a href="services#brows" id="categ4">
                <div class="category-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed consectetur 
                    ligula. Integer vel augue at nisl interdum auctor id a odio. Suspendisse lacus est, 
                    aliquet ut luctus eget, auctor a nibh.
                </div>

                <img src="../assets/images/brows1.png" />
                <h3>Brows</h3>
                <i>starts at ₱4,000.00</i>
            </a>

            <a href="services#brows-retouch" id="categ5">
                <div class="category-overlay">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed consectetur 
                    ligula. Integer vel augue at nisl interdum auctor id a odio. Suspendisse lacus est, 
                    aliquet ut luctus eget, auctor a nibh.
                </div>

                <img src="../assets/images/brows2.png" />
                <h3>Brows Retouch</h3>
                <i>starts at ₱1,500.00</i>
            </a>

        </div>

    </div>

    <!-- APPOINTMENT RULES -->
    <div id="appointment">
        <img src="../assets/images/appointment.png" style="object-fit: contain;" />
    </div>

    <!-- PROTOCOLS & POLICIES -->
    <div id="protocols">
        <img src="../assets/images/protocols.png" />
    </div>

    <!-- LOCATION -->
    <div id="location">
        <img src="../assets/images/location.png" />
    </div>

    <!-- FOOTER -->
    <footer>
        <img src="../assets/images/footer_quote.png"/>

        <div>
            <a href="#">Location</a>
            <a href="#">Book an Appointment</a>
            <a href="#">Terms & Conditions</a>

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

    h3 {
        font: 300 30px 'Lora';
    }

    /* || SECTION – Hero */
    #hero {
        display: flex;
        flex-direction: column;

        width: 100%;
        min-height: 100vh;
        overflow: hidden;

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
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        padding: 80px 50px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

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

        #category-services > a {
            display: inline-block;
            position: relative;
            width: 240px;
        }

        #category-services img { margin-bottom: 20px; }

        #category-services i { font: 400 20px 'Nunito'; }

    .category-overlay {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 15px;
        width: 240px;
        height: 320px;

        font: 400 15px 'Nunito';
        text-align: center;
        line-height: 160%;

        background-color: var(--secondary100); 
        opacity: calc(0.8 * 0.85);
    }

    /* || SECTION – Appointment Ryles, Protocols, Location */
    #appointment, #protocols, #location {
        width: 100%;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--primary100);
    }

    .view-fullscreen > img {
        width: 100%;
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