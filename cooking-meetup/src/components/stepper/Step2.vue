<template>
  <div>
          <q-step
        :name="2"
        :title="$t('stepper.chefWanted.title')"
        icon="create_new_folder"
        :done="step > 2 && peopleGroup === 'friends'"
      >
        {{ $t("stepper.chefWanted.text") }}<br />
        <q-checkbox color="info" v-model="chefWanted" />

        <q-stepper-navigation class="row">
          <div class="col">
            <q-btn
              @click="updateStep(3)"
              color="secondary"
              :label="$t('stepper.buttons.continue')"
            />
          </div>
          <div class="col">
            <q-btn
              flat
              @click="updateStep(1)"
              color="secondary"
              :label="$t('stepper.buttons.back')"
              class="q-ml-sm"
            />
          </div>
        </q-stepper-navigation>
      </q-step>
  </div>
</template>

<script>
export default {
  name: "Step2",
  props: {
    step: {
      type: Number,
      default: 1
    },
    peopleGroup: {
      type: String,
      default: 'friends'
    },
    chefWanted: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    updateStep(step){
        this.step = step;
        this.$emit('stepChanged', this.step);
    }
  }
};

</script>

<style>

</style>