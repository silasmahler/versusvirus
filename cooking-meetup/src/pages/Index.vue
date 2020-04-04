<template>
  <q-page>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="join">
        <div class="text-h4">{{ $t('tabs.join') }}</div>
        <JoinStepper />
      </q-tab-panel>

      <q-tab-panel name="create" animated>
      <div class="text-h4">Mails</div>
        Create Room
      </q-tab-panel>
    </q-tab-panels>

    <q-tabs v-model="tab" dense class="text-grey tab-buttons" active-color="primary" indicator-color="primary" align="justify" narrow-indicator>
      <q-tab name="join" label="Join Room"></q-tab>
      <q-tab name="create" label="Create Room"></q-tab>
    </q-tabs>
  </q-page>
</template>

<script>
import JoinStepper from "../components/JoinStepper";
export default {
  name: "PageIndex",
  components: { JoinStepper },
  data () {
    return {
      tab: 'join'
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