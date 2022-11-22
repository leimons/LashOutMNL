<script>

    import axios from "axios";

    export default {
        name: 'InclusionView',

        data() {
            return {
                Inclusions: ["Inclusion1", "Inclusion2"],
                chosenInclusions: []
            }
        },

    /*    created(){
            axios
                .get(`/api/getInclusions`)
                .then((response)=>{
                    this.Inclusions = response.data
                })
                .catch((e) => {
                    console.log(e)
                })
        }*/

        methods: {
            chooseInclusions(){
                console.log(this.chosenInclusions);
            }
        }
    }
</script>
<template>
    <h1>Inclusions Page!</h1>
    <div class="Inlcusion-Container">
        <div class="Inclusions"
        v-for="(inclusions, index) in Inclusions"
        v-bind:item="inclusions"
        v-bind:key="index"
        >
            <input type="checkbox" :value="inclusions" v-model="chosenInclusions" :id="inclusions"/>
            <label :for= "inclusions" >{{inclusions}}</label>
        </div>
        <button v-on:click="chooseInclusions">Confirm</button>  
    </div>
</template>