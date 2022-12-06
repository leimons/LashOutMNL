<script>
    import CalendarCard from '@/components/Admin/CalendarCard.vue';
    import AdminLayout from '@/layouts/AdminLayout.vue';

    export default {
        name: 'AdminDashboard',
            components: {
        AdminLayout,
        CalendarCard
        }
    }
</script>

<template>
    <AdminLayout>
        <div class="container">

            <!-- LEFT: CALENDAR PART -->
            <div class="cont-left"> 
                <div class="calendar">

                    <!-- MONTH -->
                    <div class="month">
                        <i class="uil uil-angle-left prev"></i>
                        <div class="month-year">Month 0000</div>
                        <i class="uil uil-angle-right next"></i>
                    </div>
                    
                    <!-- WEEKDAYS -->
                    <div class="calendar-weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>

                    <!-- DATES -->
                    <div class="days"></div>

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
        width: 1200px;
        min-height: 750px;
        margin: 1px auto;
        padding: 5px;
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

    /** MONTH PART */
    .calendar .month {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: capitalize;
    }


    /** CHANGING MONTH BUTTONS */
    .calendar .month .prev,
    .calendar .month .next {
        cursor: pointer;
    }
    .calendar .month .prev:hover,
    .calendar .month .next:hover {
        color: black;
    }


    /** CALENDAR WEEKDAYS */
    .calendar .calendar-weekdays {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    .calendar-weekdays div {
        width: 14.28%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /** CALENDAR DATES */
    .calendar .days {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .calendar .days .day {
        width: 14.28%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--primary-clr);
        border: 1px solid #000000;
    }

    /** ADDS PER DAY */
    .calendar .days .day:nth-child(7n + 1) {
        border-left: 2px solid #a51818;
    }
    .calendar .days .day:nth-child(7n) {
        border-right: 2px solid #35833f;
    }
    .calendar .days .day:nth-child(-n + 7) {
        border-top: 2px solid #342ca7;
    }
    .calendar .days .day:nth-child(n + 29) {
        border-bottom: 2px solid #cf20a4;
    }

    /** EFFECTS */
    .calendar .days .day:not(.prev-date, .next-date):hover {
    color: rgb(18, 189, 231);
    background-color: blueviolet;
    }

    .calendar .days .prev-date,
    .calendar .days .next-date {
        color: #b3b3b3;
    }
    .calendar .days .active {
        position: relative;
        font-size: 2rem;
        color: #fff;
        background-color: blue;
    }
    .calendar .days .active::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px 2px royalblue;
    }
    .calendar .days .today {
        font-size: 2rem;
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