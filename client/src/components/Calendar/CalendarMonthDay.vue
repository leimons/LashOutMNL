<script>
import dayjs from "dayjs";

export default {
    name: "CalendarDayItem",

    props: {
        day: {
            type: Object,
            required: true
        },

        isCurrentMonth: {
            type: Boolean,
            default: false
        },

        isToday: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        label() {
            return dayjs(this.day.date).format("D");
        }
    }
};
</script>

<template>
    <ul
        class="calendar-day"
        :class ="{
            'calendar-day-not-current': !day.isCurrentMonth,
            'calendar-day-today': isToday
        }"
    >
        <span>{{ label }}</span>
    </ul>
</template>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #D9D9D9;;
  color: black;
  padding: 5px;
  border: 1px solid #1F4D3D;  /** CURRENT MONTH DAYS */
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
  padding-right: 5px;
  
}

.calendar-day-not-current { /** SHOULD BE PREV AND NEXT MONTH DAYS */
    background-color: #D9D9D9;
    color: black;
    opacity: 60%;
}

.calendar-day-today { /** CURRENT DAY */
  padding-top: 4px;
  background: #ffa69a;
}

.calendar-day-today > span {
  color: black;
 
}
</style>