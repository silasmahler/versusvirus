<template>
  <div class="q-pa-md">
    <q-stepper v-model="step" vertical color="primary" animated>
      <Step1/>
      <Step2/>
      <Step3/>

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
              @click="step = 3"
              color="secondary"
              :label="$t('stepper.buttons.continue')"
            />
          </div>
          <div class="col">
            <q-btn
              flat
              @click="step = 1"
              color="secondary"
              :label="$t('stepper.buttons.back')"
              class="q-ml-sm"
            />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" :title="$t('stepper.topics.title')" icon="add_comment">
        {{ $t("stepper.topics.text") }}<br />

        <div class="row">
          <div v-for="topic in topics" :key="topic">
          <div class="col">
            <div class="q-pa-md row items-start q-gutter-md">
              <q-card class="my-card" flat bordered>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

                <q-card-section>
                  <div class="text-overline text-green-9">
                    {{ $t("stepper.topics.categories.vegan") }}
                  </div>
                  <div class="text-h5 q-mt-sm q-mb-xs">
                    {{ $t("stepper.topics." + topic.title) }}
                  </div>
                  <div class="text-caption text-grey">
                    {{ $t("stepper.topics." + topic.title + "_desc") }}
                  </div>
                </q-card-section>

                <q-card-actions>
                  <q-btn flat>{{ $t("stepper.topics.start_session") }}</q-btn>
                </q-card-actions>
              </q-card>
              </div>
              </div>
            </div>
        </div>

        <q-stepper-navigation class="row">
          <div class="col">
            <q-btn
              flat
              @click="step = 2"
              color="secondary"
              :label="$t('stepper.buttons.back')"
              class="q-ml-sm"
            />
          </div>
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { Step1 } from "./Step1.vue";
import { Step2 } from "./Step2.vue";
import { Step3 } from "./Step3.vue";

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