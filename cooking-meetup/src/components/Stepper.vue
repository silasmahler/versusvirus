<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" :title="$t('selectPeopleGroup.title')" icon="settings" :done="step > 1">
        {{ $t('stepper.selectPeopleGroup.text') }}
        <q-stepper-navigation>
          <q-btn @click="() => {step = 2; peopleGroup = 'friends'}" color="primary" :label="$t('stepper.people.friends')" />
          <q-btn @click="() => {step = 4; peopleGroup = 'strangers'}" color="primary" :label="$t('stepper.people.strangers')" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" title="Create an ad group" caption="Optional" icon="create_new_folder" :done="step > 2">
        {{ $t('stepper.cookWanted.text') }}

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Ad template" icon="assignment" disable>
        This step won't show up because it is disabled.
      </q-step>

      <q-step :name="4" title="Create an ad" icon="add_comment">
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <div>
      {{ step }}
      {{ peopleGroup }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "Stepper",
        data () {
            return {
              step: 1,
              peopleGroup: 'friends',
              chefWanted: false,
            }
        }
    }
</script>

<style scoped>

</style>
