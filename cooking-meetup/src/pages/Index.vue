<template>
  <q-page>
    <div class="flex flex-center">
      <q-img
        src="../assets/dinner_party_logo.png"
        spinner-color="white"
        style="height: 200px; max-width: 200px"
      />
    </div>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="join">
        <div class="text-h4">{{ $t('tabs.join.title') }}</div>
        <JoinStepper />
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
import {isAuthenticated} from "../services/storage-service";
import Calendar from "../components/Calendar";
export default {
  name: "PageIndex",
  components: { JoinStepper, CreateRoom, Calendar },
  data () {
    return {
      tab: "join"
    };
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