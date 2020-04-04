<template>
  <q-page class="flex flex-center">
    <Stepper />
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="Primary" />
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="accent" label="accent" />
      <q-btn color="dark" label="dark" />
      <q-btn color="positive" label="positive" />
      <q-btn color="negative" label="negative" />
      <q-btn color="info" label="info" />
      <q-btn color="warning" label="Silas mag Kochsalz" />
    </div>
  </q-page>
</template>

<script>
import Stepper from "../components/Stepper";
export default {
  name: "PageIndex",
  components: { Stepper }
};
</script>
