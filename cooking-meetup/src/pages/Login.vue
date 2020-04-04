<template>
  <div class="flex flex-center">
    <q-card class="login-card">
      <q-card-section>
        <q-input v-model="form.username" :label="$t('login.username')" />
        <q-input v-model="form.password" type="password" :label="$t('login.password')" />
        <q-btn class="login-button" color="primary" :label="$t('buttons.login')" @click="login" />
        <q-banner v-if="error" class="bg-red text-white error">
          {{$t('login.error')}}
        </q-banner>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
  import {login} from "../services/storage-service";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    login() {
      this.error = false;
      let authenticated = login(this.form.username, this.form.password);
      if (authenticated) {
        this.$router.push({ path: '/' });
      } else {
        this.error = true;
      }
    }
  }
}
</script>

<style scoped>
.login-button {
  margin-top: 10px;
}
.login-card {
  width: 30rem;
  margin-top: 10rem
}
.error {
  margin-top: 10px;
}
</style>
