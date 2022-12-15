<script>
    import FullscreenLayout from '@/layouts/FullscreenLayout.vue';
    //import axios from 'axios';
    import adminfunctions from '@/adminfunctions.js';

    export default {
        name: 'AdminLogin',
        components: {
            FullscreenLayout
        },
        data() {
            return {
                password: '',
                errorMsg: ''
            }
        },
        methods: {
            login() {
				var answer = adminfunctions.login(this.password);
				answer.then((response)=>{
					console.log(response);
                    this.$router.push('admin/home'); 
                })
                .catch(() => {
                    this.errorMsg = "Wrong Password";
                })
            }
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
                <label for="password">Password:</label>
                <input @keyup.enter="login()" type="password" id="password" v-model="password" />
            </div>

            <div>
                <small class="text-primary900" v-if="!errorMsg">&nbsp;</small>
                <small class="text-primary900" v-if="errorMsg">{{ errorMsg }}</small>
                <button class="small hover" @click="login()">Login</button>
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

        height: 250px;
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
