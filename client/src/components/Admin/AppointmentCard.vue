<script>
    export default {
        name: 'AppointmentCard'
    }
</script>

<template>
    <div class="appointment-card">
        <div class="items">
            <span class="details">ID</span>
            <span class="details">Name</span>
            <span class="details">Email</span>
            <span class="details">Phone Number</span>
            <span class="details">Time</span>
            <span class="details">Date</span>
            <span class="details">Service</span>
        </div>
    </div>
</template>

<style>
    .appointment-card {
        position: relative;
        width: full auto;
        height: 50px;
        margin-top: 0px;
        background-color: #F0EDE4;
        border: 1px solid black;
        border-radius: 15px;
    }

    .items{
        margin-top: -10px;
        margin-left: 10px;
        display: grid;
        width: full;
        height: 70px;
        grid-template-columns: auto auto auto auto auto auto auto;
        align-items: center;
        
    }
</style>