<template>
  <q-page>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="join">
        <div class="text-h4">{{ $t('tabs.join.title') }}</div>
        <JoinStepper />
      </q-tab-panel>

      <q-tab-panel name="create" animated>
        <div class="text-h4">{{ $t('tabs.create.title') }}</div>
        <CreateRoom />
      </q-tab-panel>
    </q-tab-panels>

      <q-footer>
        <q-toolbar class="bg-white">
         <q-tabs v-model="tab" 
            dense 
            class="bg-white text-grey tab-buttons" 
            active-color="accent" 
            indicator-color="accent" 
            align="justify" 
            narrow-indicator>
           <q-tab name="join" :label="$t('tabs.join.tabTitle')"></q-tab>
           <q-tab name="create" :label="$t('tabs.create.tabTitle')"></q-tab>
         </q-tabs>
        </q-toolbar>
      </q-footer>

   
  </q-page>
</template>

<script>
import JoinStepper from "../components/JoinStepper";
import CreateRoom from "../components/CreateRoom";
export default {
  name: "PageIndex",
  components: { JoinStepper, CreateRoom },
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