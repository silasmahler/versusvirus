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
  import { DaykeepCalendarMonth } from '@daykeep/calendar-quasar'

  export default {
    name: "Calendar",
    components: { DaykeepCalendarMonth },
    data() {
      return {
        eventData: [
          {
            id: 1,
            summary: 'VersusVirus Launch Dinner',
            description: 'Dinner Cooking after launch of VersusVirus Hackathon.',
            start: {
              dateTime: '2020-04-03T19:00:00', // ISO 8601 formatted
              timeZone: 'Europe/Berlin' // Timezone listed as a separate IANA code
            },
            end: {
              dateTime: '2020-04-03T21:00:00',
              timeZone: 'Europe/Berlin'
            },
            color: 'positive',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
