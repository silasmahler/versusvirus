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
              @click="
                () => {
                  step = 2;
                  peopleGroup = 'friends';
                }
              "
              color="secondary"
              :label="$t('stepper.people.friends')"
            />
          </div>
          <div class="col">
            <q-btn
              @click="
                () => {
                  step = 3;
                  peopleGroup = 'strangers';
                }
              "
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
      required: true,
      default: 1
    },
  }
}
</script>

<style>

</style>