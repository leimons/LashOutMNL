<script>
    import NavClient from '@/components/NavClient.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    import FooterClient from '@/components/FooterClient.vue';

    export default {
        name: 'HomeView',
        title: 'LashOut MNL | Home',
        components: {
            NavClient,
            FullscreenLayout,
            FooterClient
        }
    }
</script>

<template>
    <!-- HERO -->
    <FullscreenLayout id="hero" direction="column">
        <NavClient isHomePage style="position: relative;" />

        <div id="content">
            <div>
                <p>
                    Step in, relax and let our beauticians make you <i>look</i> and <i>feel</i> great.
                </p>
                
                <button @click="() => { this.$router.push('/book') }">Book Now</button>
            </div>

            <div id="carousel-container">
                <img src="@/assets/images/carousel.gif" height="" />
            </div>
        </div>
    </FullscreenLayout>

    <!-- EXPLORE BY CATEGORY -->
    <FullscreenLayout id="explore-category" direction="column" centerVertical centerHorizontal>
        <h1>Explore our <u>services</u></h1>

        <div id="category-services">

            <a class="category" href="services/lashes">
                <img src="@/assets/images/category_lashes.png" />

                <div>
                    <h2>Lashes</h2>
                    <u>read more</u> &#8594;
                </div>
            </a>

            <a class="category" href="services/brows">
                <img src="@/assets/images/category_brows.png" />
                
                <div>
                    <h2>Brows</h2>
                    <u>read more</u> &#8594;
                </div>
            </a>

            <a class="category" href="services/nails">
                <img src="@/assets/images/category_nails.png" />
                
                <div>
                    <h2>Nails</h2>
                    <u>read more</u> &#8594;
                </div>
            </a>

        </div>
    </FullscreenLayout>

    <!-- APPOINTMENT RULES -->
    <img src="../assets/images/appointment.png" class="infoImg" />

    <!-- PROTOCOLS & POLICIES -->
    <img src="../assets/images/protocols.png" class="infoImg" />

    <!-- LOCATION -->
    <img src="../assets/images/location.png" id="location" class="infoImg" />

    <!-- FOOTER -->
    <FooterClient />
</template>

<style scoped>
    /* || General styles */
    h1 {
        font: 400 40px 'Lora';
    }

    h2 {
        font: 600 32px 'Lora';
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
        gap: 50px 5%;
        
        padding: 80px 50px;
    }

        #content p {
            width: 480px;
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

    .category {
        position: relative;
        max-height: 600px;
        width: 27vw;
        text-shadow: 0px 0px 8px var(--primary100);
    }

        .category > div {
            position: absolute;
            left: 25px;
            bottom: 25px;
        }

        .category > img {
            max-height: 600px;
            max-width: 380px;
            width: 100%;
            opacity: 0.95;
        }

    /* || SECTION – Appointment Ryles, Protocols, Location */
    .infoImg {
        width: 100vw;
    }
</style>