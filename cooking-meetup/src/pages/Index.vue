<template>
  <q-page>
    <q-tab-panels v-model="tab" animated>
      <!-- JOIN-PANEL -->
      >
      <q-tab-panel name="join">
        <JoinStepper />
      </q-tab-panel>

      <!-- CREATE-PANEL -->
      >
      <q-tab-panel name="create" animated>
        <CreateRoom />
      </q-tab-panel>

      <!-- CALENDAR-PANEL -->
      >
      <q-tab-panel name="calendar" animated>
        <Calendar />
      </q-tab-panel>
    </q-tab-panels>

    <q-footer>
      <q-toolbar class="bg-white">
        <q-tabs
          v-model="tab"
          dense
          class="bg-white text-grey tab-buttons"
          active-color="accent"
          indicator-color="accent"
          align="justify"
          narrow-indicator
        >
          <q-tab name="join" :label="$t('tabs.join.tabTitle')"></q-tab>
          <q-tab name="create" :label="$t('tabs.create.tabTitle')"></q-tab>
          <q-tab name="calendar" :label="$t('tabs.calendar.tabTitle')"></q-tab>
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import JoinStepper from "../components/stepper/JoinStepper";
import CreateRoom from "../components/CreateRoom";
import { isAuthenticated } from "../services/storage-service";
import Calendar from "../components/Calendar";
export default {
  name: "PageIndex",
  components: { JoinStepper, CreateRoom, Calendar },
  data() {
    return {
      tab: "join",
      clickedJoinARoom: false
    };
  },
  mounted() {
    this.authenticated = isAuthenticated();
    if (!this.authenticated) {
      this.$router.push({ path: "login" });
    }
  }
};
</script>

<style scoped>
.tab-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
