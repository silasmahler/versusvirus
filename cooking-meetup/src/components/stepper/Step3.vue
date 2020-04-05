<template>
  <div>
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
            @click="updateStep(2)"
            color="positive"
            :label="$t('buttons.back')"
            class="q-ml-sm"
          />
        </div>
      </q-stepper-navigation>
    </q-step>
  </div>
</template>

<script>
export default {
  name: "Step3",
  props: {
    step: {
      type: Number,
      default: 1
    },
    topics: {
      type: Array,
      default: () => [{ title: "leaf_to_root" }, { title: "urban_agriculture" }]
    }
  },
  methods: {
    updateStep(step) {
      this.step = step;
      this.$emit("stepChanged", this.step);
    }
  }
};
</script>

<style>
</style>
