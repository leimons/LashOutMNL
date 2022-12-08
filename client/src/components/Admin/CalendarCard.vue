<script>
    export default {
        name: 'CalendarCard'
    }
</script>

<template>
    <div class="calendar-appcard">
        <div class="items">
            <div class="details-time">00am</div>
            <div class="details-service"> Service Name </div>
            <div class="details-customer"> Customer Name </div>
            <div class="details-beautician"> Beautician Name </div>
            
        </div>
    </div>
</template>

<style>
    .calendar-appcard {
        position: absolute;
        width: 400px;
        height: 80px;
        margin-top: 10px;
        margin-left: 70px;
        background-color: #F9E6E3;
        border: 1px solid black;
        background: #F9E6E3;
        box-shadow: 0px 4px 4px rgba(179, 88, 88, 0.479);
    }


    .items{
        margin-top: 10px;
        margin-left: 20px;
        display: grid;
        width: full;
        height: 70px;        
    }

    .items .details-time{
        position: absolute;
        left: 1.97%;
        right: 79.93%;
        top: 30px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        text-transform: uppercase;

        color: #000000;
    }

    .items .details-service{
        position: absolute;
        left: 24.01%;
        top: 19.3%;

        font-family: 'Lora';
        font-style: italic;
        font-weight: 600;
        font-size: 20px;
        line-height: 140%;

        color: #000000;
    }

    .items .details-customer{
        position: absolute;
        left: 24.01%;
        top: 71.93%;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 11px;

        text-transform: uppercase;

        color: #000000;
    }

    .items .details-beautician{
        position: absolute;
        left: 65%;
        top: 71.93%;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 11px;

        text-transform: uppercase;

        color: #000000;
    }

    


</style>