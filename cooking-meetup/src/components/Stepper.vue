<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <q-step :name="1" :title="$t('stepper.selectPeopleGroup.title')" icon="settings" :done="step > 1">
        {{ $t("stepper.selectPeopleGroup.text") }}
        <q-stepper-navigation class="row">
          <div class="col">
            <q-btn @click="() => {step = 2; peopleGroup = 'friends';}" color="primary" :label="$t('stepper.people.friends')" />
          </div>
          <div class="col">
            <q-btn @click="() => {step = 3; peopleGroup = 'strangers';}" color="primary" :label="$t('stepper.people.strangers')" />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" :title="$t('stepper.chefWanted.title')" icon="create_new_folder" :done="step > 2">
        {{ $t("stepper.chefWanted.text") }}<br />
        <q-checkbox v-model="chefWanted" />

        <q-stepper-navigation class="row">
          <div class="col">
            <q-btn @click="step = 3" color="primary" :label="$t('stepper.buttons.continue')" />
          </div>
          <div class="col">
            <q-btn flat @click="step = 1" color="primary" :label="$t('stepper.buttons.back')" class="q-ml-sm" />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('stepper.topics.title')" icon="add_comment">
        {{ $t("stepper.topics.text") }}<br />

        <div class="row">
         <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card" flat bordered>
            <q-img
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />

            <q-card-section>
              <div class="text-overline text-green-9">{{ $t('stepper.topics.categories.vegan')}}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ $t('stepper.topics.leaf_to_root')}}</div>
              <div class="text-caption text-grey">
                {{ $t('stepper.topics.leaf_to_root_desc')}}
              </div>
            </q-card-section>

            <q-card-actions>
              <q-checkbox v-model="topic1" />
            </q-card-actions>
          </q-card>
        </div>
        </div>
                
        <q-stepper-navigation class="row">
           <div class="col">
            <q-btn @click="step = 2" color="primary" :label="$t('stepper.buttons.continue')" />
          </div>
          <div class="col">
            <q-btn flat @click="step = 2" color="primary" :label="$t('stepper.buttons.back')" class="q-ml-sm" />
          </div>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
    <div>
      {{ step }}<br />
      {{ peopleGroup }}<br />
      {{ chefWanted }}<br />
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  data() {
    return {
      step: 1,
      peopleGroup: "friends",
      chefWanted: false
    };
  }
};
</script>

<style scoped>
</style>
