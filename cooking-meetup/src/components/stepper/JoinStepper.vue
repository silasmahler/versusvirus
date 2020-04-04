<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <Step1 :step="step"
             :peopleGroup="peopleGroup"
             @stepChanged="step = $event"
             @peopleGroupChanged="peopleGroup = $event"
       />
      <Step2 
          :step="step"
          :peopleGroup="peopleGroup"
          :chefWanted="chefWanted"
          @stepChanged="step = $event"
      />
      <Step3
          :step="step"
          :topics="topics"
          @stepChanged="step = $event"
      />
    </q-stepper>
  </div>
</template>

<script>
import Step1 from "./Step1.vue";
import Step2 from "./Step2.vue";
import Step3 from "./Step3.vue";

export default {
  name: "JoinStepper",
  components: { Step1, Step2, Step3 },
  data() {
    return {
      step: 1,
      peopleGroup: "friends",
      chefWanted: false,
      topics: [{ title: "leaf_to_root" }, { title: "urban_agriculture" }]
    };
  }
};
</script>
