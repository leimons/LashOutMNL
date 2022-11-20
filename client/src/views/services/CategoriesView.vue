<script>
    import NavClient from '@/components/Navigation/NavClient.vue';
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';

    export default {
        name: 'CategoriesView',
        title: 'Services – LashOut MNL',
        components: {
            NavClient,
            FullscreenLayout
        }
    }
</script>

<template>
   <FullscreenLayout id="explore-category" direction="column" centerVertical centerHorizontal>
        <NavClient style="position: relative;" />

        <div class="center-layout" style="flex: 1;">
            <h1>Explore our <u>services</u></h1>

            <div id="category-services">

                <a class="category" href="/services/lashes">
                    <img src="@/assets/images/category_lashes.png" />

                    <div>
                        <h2>Lashes</h2>
                        <u>read more</u> &#8594;
                    </div>
                </a>

                <a class="category" href="/services/brows">
                    <img src="@/assets/images/category_brows.png" />
                    
                    <div>
                        <h2>Brows</h2>
                        <u>read more</u> &#8594;
                    </div>
                </a>

                <a class="category" href="/services/nails">
                    <img src="@/assets/images/category_nails.png" />
                    
                    <div>
                        <h2>Nails</h2>
                        <u>read more</u> &#8594;
                    </div>
                </a>

            </div>
        </div>
    </FullscreenLayout>
</template>

<style>
    h1 {
        font: 400 40px 'Lora';
    }

    #explore-category {
        background-color: var(--primary50);
    }

    #category-services {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;
        margin-top: 40px;

        color: var(--secondary900);
    }

    .category {
        position: relative;
        text-shadow: 0px 0px 8px var(--primary100);
    }

        .category > div {
            position: absolute;
            left: 25px;
            bottom: 25px;
        }

        .category > img {
            max-height: 540px;
            max-width: 342px;
            width: 100%;
        }
</style>