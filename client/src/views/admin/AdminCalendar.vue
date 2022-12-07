<script>
    import CalendarCard from '@/components/Admin/CalendarCard.vue';
    import CalendarMonth from "@/components/Calendar/CalendarMonth.vue";
    import AdminLayout from '@/layouts/AdminLayout.vue';

    export default {
        name: 'AdminDashboard',
            components: {
        AdminLayout,
        CalendarCard,
        CalendarMonth
        }
    }
</script>

<template>
    <AdminLayout>
        <div class="container">

            <!-- LEFT: CALENDAR PART -->
            <div class="cont-left"> 
                <div class="calendar">

                    <CalendarMonth/>

                </div>
            </div>


            <!-- RIGHT: SCHEDULES PART -->
            <div class="cont-right">
                <div class="schedules">

                    <div class="current-date">
                        <div class="sched-day"> Day </div>
                        <div class="sched-date"> 12th december 2022</div>
                    </div>


                     <!-- TO DO: add appointments card -->
                    <div class="calendar-card">
                        <CalendarCard    />
                    </div>

                </div>
            </div>
            

            
        </div>
    </AdminLayout>
</template>

<style>
    .container{
        position: relative;
        width: 1300px;
        min-height: 750px;
        margin: 1px auto;
        padding: 20px;
        color: rgb(0, 0, 0);
        display: flex;
        
    }

    /** SEPARATE CONTAINER */
    .cont-left {
        width: 60%;
        padding: 20px;
        background: #F9E6E3;
        border: 1px solid #000000;
    }
    .container .cont-right {
        position: relative;
        width: 40%;
        min-height: 100%;
        padding: 20px 0;
    }


    /** LEFT : CALENDAR PART */
    .calendar {
        position: relative;
        width: 100%;
        height: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        color: #000000;
        border-radius: 5px;
        background-color: #F9E6E3;
    }


    /** RIGHT: SCHEDULES PART */
    .container .cont-right {
        position: relative;
        width: 40%;
        min-height: 100%;
        padding: 20px 0;
    }

    .cont-right .current-date {
        width: 100%;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
        text-transform: capitalize;
        
    }
    .cont-right .current-date .sched-day {
        font-size: 50px;
        font-weight: 500;
        color: #000000;
    }
    .cont-right .current-date .sched-date {
        font-size: 20px;
        font-weight: 600;
        padding-left: 80px;
        color: #000000;
    }

    /** PER APPOINTMENT CARD */
    .calendar-card{
        margin-top:30px;
        display: flex;
        flex-direction: column;
    }



</style>