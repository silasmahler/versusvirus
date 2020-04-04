<template>
  <div>
    <daykeep-calendar-month
      :start-date="new Date()"
      :event-array="eventData"
      calendar-locale="de"
      calendar-timezone="Europe/Berlin"
      :allow-editing="false"
      :render-html="true"
    />
  </div>
</template>

<script>
  import { DaykeepCalendarMonth } from '@daykeep/calendar-quasar';
  import eventdata from '../data/eventdata';

  export default {
    name: "Calendar",
    components: { DaykeepCalendarMonth },
    data() {
      return {
        eventData: eventdata
      }
    }
  }
</script>

<style scoped>

</style>
