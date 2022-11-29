
<script>
import dayjs from "dayjs"
import CalendarDateIndicator from "@/components/Calendar/CalendarDateIndicator.vue";
import CalendarDateSelector from "@/components/Calendar/CalendarDateSelector.vue";
import CalendarWeekDays from "@/components/Calendar/CalendarWeekDays.vue";
import CalendarMonthDay from "@/components/Calendar/CalendarMonthDay.vue";
import weekday from "dayjs/plugin/weekday"
import weekOfYear from "dayjs/plugin/weekOfYear";
import dbFunctions from '@/dbFunctions.js';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
    name: "CalendarMonth",

    components: {
        CalendarDateIndicator,
        CalendarDateSelector,
        CalendarWeekDays,
        CalendarMonthDay
    },

    computed:{
        days() {
            return [
                ...this.previousMonthDays,
                ...this.currentMonthDays,
                ...this.nextMonthDays
            ];
        },

        DaysInMonth() {
            return dayjs(this.selectedDate).daysInMonth();
        },
        today() {
            return dayjs().format("YYYY-MM-DD");
        },

        month() {
            return Number(this.selectedDate.format("M"));
        },

        year() {
            return Number(this.selectedDate.format("YYYY"));
        },

        currentMonthDays(){
            return [...Array(this.DaysInMonth)].map((day,index) => {
                return {
                    date: dayjs(`${this.year}-${this.month}-${index + 1}`).format("YYYY-MM-DD"),
                    isCurrentMonth: true
                };
            });
        },
        previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );

      // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() +
                1}-${previousMonthLastMondayDayOfMonth + index}`
            ).format("YYYY-MM-DD"),
            isCurrentMonth: false
          };
        }
      );
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isCurrentMonth: false
        };
      });
    }
    },

    data() {
       return {
        selectedDate: dayjs(),
       }; 
    },

    methods: {
        selectDate(newSelectedDate){
            this.selectedDate = newSelectedDate;
        },

        getWeekday(date){
            return dayjs(date).weekday();
        },

        getChosenDate(date){
          console.log(date.date)
          dbFunctions.addAppointmentDate(date.date)

        },
    }
};
</script>

<template>
    <h1>Calendar Page</h1>
    <div class="calendar-month">
        <div class="calendar-month-header">
            <CalendarDateIndicator 
                :selected-date="selectedDate"
                class="selected-month" 
            />
            <CalendarDateSelector 
                :current-date="today"
                :selected-date="selectedDate"
                @dateSelected="selectDate"
            />
        </div>

        <CalendarWeekDays />
        <ol class="days-grid">
            <CalendarMonthDay 
                v-for="day in days"
                :key="day.date"
                :day="day"
                :is-today="day.date === today" 
                @click="getChosenDate(day)"
            />
        </ol>
        <button v-on:click="getChosenTime('1:00')">1:00</button>
    </div>
</template>

<style scoped>
.calendar-month {
  position: relative;
  background-color: var(--grey-200);
  border: solid 1px var(--grey-300);
}

.weekdays {
  color: var(--grey-800);
  font-size: 18px;
  background-color: #fff;
  padding-bottom: 5px;
  padding-top: 10px;
}

.weekdays,
.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.weekdays > * {
  text-align: right;
  padding-right: 5px;
}

.days-grid {
  height: 100%;
  width: 95%;
  position: relative;
  grid-column-gap: var(--grid-gap);
  grid-row-gap: var(--grid-gap);
  border-top: solid 1px var(--grey-200);
}
</style>

