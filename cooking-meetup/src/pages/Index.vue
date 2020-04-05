<template>
  <q-page>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="landing">
        <div class="flex flex-center">
          <q-card class="welcome-card" v-if="!clickedJoinARoom">
            <q-img
              src="../assets/dinner_party_logo.png"
              spinner-color="white"
              style="height: 200px; max-width: 200px; position:absolute; right: 0; z-index:99"
            />
            <img
              src="https://st.focusedcollection.com/9163412/i/650/focused_125210828-stock-photo-happy-people-cooking-together.jpg"
              style="z-index:1"
            />
            <q-separator />
            <q-card-actions vertical>
              <q-btn @click="clickedJoinARoom = true" color="secondary">{{ $t('tabs.join.title') }}</q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <JoinStepper v-if="clickedJoinARoom" />
      </q-tab-panel>

      <q-tab-panel name="join">
        <div class="text-h4"></div>
        <q-card class="my-card" v-if="!clickedJoinARoom">
          <img
            src="https://st.focusedcollection.com/9163412/i/650/focused_125210828-stock-photo-happy-people-cooking-together.jpg"
          />
          <q-separator />
          <q-card-actions vertical>
            <q-btn @click="clickedJoinARoom = true" color="secondary">{{ $t('tabs.join.title') }}</q-btn>
          </q-card-actions>
        </q-card>
        <JoinStepper v-if="clickedJoinARoom" />
      </q-tab-panel>

      <q-tab-panel name="create" animated>
        <div class="text-h4">{{ $t('tabs.create.title') }}</div>
        <CreateRoom />
      </q-tab-panel>

      <q-tab-panel name="calendar" animated>
        <div class="text-h4">{{ $t('tabs.calendar.title') }}</div>
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
      tab: "landing",
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
