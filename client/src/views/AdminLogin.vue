<script>
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';

    export default {
        name: 'AdminLogin',
        components: {
            FullscreenLayout
        }
    }
</script>

<template>
    <FullscreenLayout class="bg-primary50" centerVertical centerHorizontal>
        <nav>
            <img src="@/assets/images/logo.png" height="70" />
        </nav>

        <div id="card">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" />
            </div>

            <div>
                <label for="password">Password:</label>
                <input type="password" id="username" />
            </div>

            <div>
                <small class="text-primary900">&nbsp;</small>
                <button class="small hover">Login</button>
            </div>
        </div>
    </FullscreenLayout>

</template>

<style scoped>
    nav {
        position: absolute;
        top: 0;

        padding: 10px 30px;
        width: 100%;
        background-color: var(--primary100);
    }

    #card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        height: 350px;
        width: 460px;
        padding: 50px;
        border: 1pt solid black;
        border-radius: 10px;
        background-color: var(--primary100);

        font: 20px 'Nunito';
    }

    label, input, #card > div {
        width: 100%;
    }

    small {
        margin-bottom: 6px;
    }

    #card > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>