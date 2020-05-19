<template>
  <div class="flex flex-center">
    <q-card class="welcome-card" style="width:80%">
      <q-img src="../../assets/unsplash/people-in-kitchen.jpg">
        <div class="absolute-top">
          <div class="text-h6">{{ $t("tabs.join.title") }}</div>
        </div>
      </q-img>
      <q-separator />
      <q-section>
        <q-stepper flat v-model="step" vertical color="primary" animated>
          <Step1
            :step="step"
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
          <Step3 :step="step" :topics="topics" @stepChanged="step = $event" />
        </q-stepper>
      </q-section>
    </q-card>
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
      topics: [{ title: "leaf_to_root", image: "img/leaf_to_root.jpg" }, { title: "urban_agriculture", image: "img/urban_agriculture.jpg" }]
    };
  }
};
</script>
