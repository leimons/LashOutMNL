<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    import CenterLayout from '@/layouts/CenterLayout.vue';

    export default {
        name: 'CategoriesView',
        title: 'Services – LashOut MNL',
        components: {
            NavClient,
            FullscreenLayout,
            CenterLayout
        }
    }
</script>

<template>
   <FullscreenLayout direction="column" centerVertical centerHorizontal>
        <NavClient style="position: relative;" />

        <CenterLayout style="flex: 1;">
            <div id="heading">
                <h1>You <i>deserve</i> to be <u>pampered</u></h1>
                <h3>only here at Lash Out MNL Beauty Lounge</h3>
                <p>*Each service is booked separately.</p>
            </div>

            <div id="category-services">

                <a class="category" href="/book/lashes">
                    <div class="image-wrapper">
                        <img src="@/assets/images/category_lashes.png" style="top: -150px;" />
                    </div>

                    <div class="category-info">
                        <h2>Lash Services</h2>
                        <u>book now</u> &#8594;
                    </div>
                </a>

                <a class="category" href="/book/brows">
                    <div class="image-wrapper">
                        <img src="@/assets/images/category_brows.png" style="top: -80px;" />
                    </div>
                    
                    <div class="category-info">
                        <h2>Brow Services</h2>
                        <u>book now</u> &#8594;
                    </div>
                </a>

                <a class="category" href="/book/nails">
                    <div class="image-wrapper">
                        <img src="@/assets/images/category_nails.png" style="top: -200px;" />
                    </div>
                    
                    <div class="category-info">
                        <h2>Nail Services</h2>
                        <u>book now</u> &#8594;
                    </div>
                </a>

            </div>
        </CenterLayout>
    </FullscreenLayout>
</template>

<style>
    body {
        background-color: var(--primary100);
    }

    h1 {
        font: 400 40px 'Lora';
    }

    /* || SECTION – Heading */
    #heading {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 200px;
        width: 100%;

        justify-content: center;
        align-items: center;
        text-align: center;
    }

        #heading > p {
            position: absolute;
            right: 20px;
            bottom: 20px;
            font-style: italic;
        }

        #heading > h1 {
            font: 400 48px 'Lora';
        }

        #heading > h3 {
            font: 300 24px 'Lora';
        }

    h2 {
        font: 300 36px 'Lora';
        font-style: italic;
    }

    /* || SECTION – Category */
    #category-services {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;

        margin-top: 40px;
        padding: 50px;

        color: var(--secondary900);
    }

    .category {
        position: relative;
        display: flex;
        width: 100%;
        max-width: 1200px;
        align-items: center;

        background-color: var(--primary50);
        border: 2pt solid var(--secondary900);
    }

        .image-wrapper {
            position: relative;
            width: 370px;
            height: 350px;
            overflow: hidden;
        }

            .image-wrapper > img {
                position: absolute;
                left: -3px;
            }

        .category-info {
            flex: 1;
            text-align: right;
            padding: 50px;
        }
</style>