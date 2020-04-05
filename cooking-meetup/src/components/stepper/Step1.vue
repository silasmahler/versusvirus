<template>
  <div>
      <q-step
        :name="1"
        :title="$t('stepper.selectPeopleGroup.title')"
        icon="settings"
        :done="step > 1"
      >
        {{ $t("stepper.selectPeopleGroup.text") }}
        <q-stepper-navigation class="row">
          <div class="col">
            <q-btn
              @click="updateStepAndGroup(2, 'friends')"
              color="secondary"
              :label="$t('stepper.people.friends')"
            />
          </div>
          <div class="col">
            <q-btn
              @click="updateStepAndGroup(3, 'strangers')"
              color="secondary"
              :label="$t('stepper.people.strangers')"
            />
          </div>
        </q-stepper-navigation>
      </q-step>
  </div>
</template>

<script>
export default {
  name: "Step1",
  props: {
    step: {
      type: Number,
      default: 1
    },
    peopleGroup: {
      type: String,
      default: 'friends'
    },
  },
  methods:{
    updateStepAndGroup(step, group){
         this.step = step;
         this.peopleGroup = group;
         this.$emit('stepChanged', this.step);
         this.$emit('peopleGroupChanged', this.peopleGroup);

    }
  }

}
</script>

<style>

</style>