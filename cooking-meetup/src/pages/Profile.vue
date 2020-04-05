<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col-auto">
        <q-avatar size="200px">
          <q-img :src="profile.image" alt="Test" v-if="profile.image" />
          <q-img
            src="../assets/userfotos/placeholder.png"
            alt="Test"
            v-if="!profile.image"
          />
        </q-avatar>
      </div>
      <div class="col-1"></div>
      <div class="col">
        <div class="text-h3">{{ profile.name }}</div>
        <div>
          <p>{{ profile.vitae }}</p>
        </div>
        <div class="text-h6">
          <q-icon
            name="restaurant"
            class="text-primary"
            style="font-size: 32px;"
          />
          {{ profile.niche }}
        </div>
        <div class="text-h6">
          <div v-for="device in recordingDevices" v-bind:key="device.label">
            <div v-if="device.active">
              <q-icon
                name="check"
                class="text-primary"
                style="font-size: 32px;"
              />
              {{ device.label }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="q pa-md">
      <q-input v-model="profile.name" :label="$t('profile.name')" />
      <q-input
        v-model="profile.vitae"
        type="textarea"
        :label="$t('profile.vitae')"
      />
      <q-input v-model="profile.niche" :label="$t('profile.niche')" />
      <div class="q-gutter-sm">
        <q-checkbox
          v-for="device in recordingDevices"
          v-bind:key="device.label"
          :name="device.value"
          v-model="device.active"
          :label="device.label"
          color="primary"
        />
      </div>
    </div>

    <q-btn color="primary" :label="$t('buttons.save')" @click="save" />
  </q-page>
</template>

<script>
import {
  getProfile,
  isAuthenticated,
  setProfile
} from "../services/storage-service";
import { Notify } from "quasar";

export default {
  name: "Profile",
  data() {
    return {
      profile: {
        image: "Alfonds",
        name: "",
        vitae: "",
        niche: "",
        recordingDevices: []
      },
      recordingDevices: [
        {
          value: "smartphone",
          label: this.$i18n.t("profile.devices.smartphone.label"),
          hint: this.$i18n.t("profile.devices.smartphone.hint"),
          active: false
        },
        {
          value: "camera",
          label: this.$i18n.t("profile.devices.camera.label"),
          hint: this.$i18n.t("profile.devices.camera.hint"),
          active: false
        },
        {
          value: "notebook",
          label: this.$i18n.t("profile.devices.notebook.label"),
          hint: this.$i18n.t("profile.devices.notebook.hint"),
          active: false
        }
      ]
    };
  },
  methods: {
    save: function() {
      this.recordingDevices
        .filter(device => device.active)
        .forEach(device => this.profile.recordingDevices.push(device.value));
      setProfile(this.profile);
      Notify.create("Profile updated!");
    }
  },
  mounted() {
    this.authenticated = isAuthenticated();
    if (!this.authenticated) {
      this.$router.push({ path: "login" });
    } else {
      if (getProfile()) {
        this.profile = getProfile();
        this.recordingDevices.forEach(device => {
          if (this.profile.recordingDevices.includes(device.value)) {
            device.active = true;
          }
        });
        this.profile.recordingDevices = [];
      }
    }
  }
};
</script>
