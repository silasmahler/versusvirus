<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" label="Primary" />
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="accent" label="accent" />
    <q-btn color="dark" label="dark" />
    <q-btn color="positive" label="positive" />
    <q-btn color="negative" label="negative" />
    <q-btn color="info" label="info" />
    <q-btn color="warning" label="warning" />
  </div>
</template>

<script>
import { isAuthenticated } from "../services/storage-service";

export default {
  name: "Colors",
  mounted() {
    this.authenticated = isAuthenticated();
    if (!this.authenticated) {
      this.$router.push({ path: "login" });
    }
  }
};
</script>

<style>
</style>
