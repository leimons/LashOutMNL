<script>
    export default {
        name: 'InclusionsCard',

        DataTransfer() {
            return {
                chosenInclusions: []
            }
        }
    }
</script>
<template>
        <input type="checkbox" value="Inclusion1" v-model="chosenInclusions" id="Inclusion1"/>
        <label for="Inclusion1">"Inclusion1"</label> <br><br>
</template>