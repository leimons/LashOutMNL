<script>

const WeekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default {
    name: 'CalendarDays',

    computed: {
        weekdays() {
            return WeekDays
        }
    }
}
</script>

<template>
    <ol class="weekdays">
        <ul
            v-for = "weekday in weekdays"
            :key = "weekday"
        >
        {{ weekday }}
    </ul>
    </ol>
</template>

<style scoped>
.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.weekdays > * {
  text-align: center;
  padding-right: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>