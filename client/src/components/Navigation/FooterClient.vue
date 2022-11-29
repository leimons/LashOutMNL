<script>
    export default {
        name: 'FooterClient'
    }
</script>

<template>
    <footer>
        <img src="@/assets/images/footer_quote.png" id="quote" />

        <div>
            <a href="#location">Location</a>
            <a href="/book">Book an Appointment</a>
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
        height: min-content;
        padding: 60px 0;
        padding-bottom: 90px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: rgba(223, 174, 174, 0.63); /* pink100 w/ 63% opacity */
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

    #quote {
        width: 55%;
        min-width: 350px;
        max-width: 600px;
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