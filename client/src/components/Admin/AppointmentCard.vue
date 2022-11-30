<script>
    export default {
        name: 'AppointmentCard'
    }
</script>

<template>
    <div class="appointment-card">
        <div class="items">
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
        width: full;
        height: 75px;
        margin-top: 10px;
        background-color: white;
        border: 2px solid black;
    }
    .items{
        margin-left: 10px;
        display: grid;
        width: full;
        height: 75px;
        grid-template-columns: auto auto auto auto auto auto;
        align-items: center;
    }
</style>