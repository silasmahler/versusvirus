<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import {isAuthenticated} from "./services/storage-service";

export default {
  name: 'App',
  data() {
    return {
      authenticated: false
    }
  },
  mounted() {
    this.authenticated = isAuthenticated();
    if(!this.authenticated) {
      this.$router.push({ path: "login" });
    }
  }
}
</script>
