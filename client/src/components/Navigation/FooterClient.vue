<script>
    export default {
        name: 'FooterClient'
    }
</script>

<template>
    <footer>
        <img src="@/assets/images/footer_quote.png"/>

        <div>
            <a href="#location">Location</a>
            <a href="#">Book an Appointment</a> <!-- TODO: Update anchor link -->
            <a href="#">Terms & Conditions</a>  <!-- TODO: Update anchor link -->

            <a href="https://www.instagram.com/lashout.mnl/" id="icon-ig">
                <img src="@/assets/images/icons_instagram.png" />
                LashOut.MNL
            </a>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: relative;
        width: 100%;
        height: 400px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: rgba(223, 174, 174, 0.63); /* pink100 w/ 63% opacity */
    }

        footer > img {
            width: 750px;
            max-width: 70%;
        }

    a {
        font: 700 16px 'Nunito';
        color: var(--pink800);
        line-height: 22px;
        text-transform: uppercase;
    }

    div {
        position: absolute;
        bottom: 0;
        padding: 20px 40px;
        gap: 30px;

        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #icon-ig {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px; 

        margin-left: auto;
        color: black;
    }
</style>