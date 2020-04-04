<template>
  <q-page class="q-pa-md">
    <p>{{$t('profile.name')}}: {{profile.name}}</p>
    <p>{{$t('profile.vitae')}}: {{profile.vitae}}</p>
    <p>{{$t('profile.niche')}}: {{profile.niche}}</p>
    <div>
      {{$t('profile.devices.title')}}:
      <div v-for="device in recordingDevices" v-bind:key="device.label">
        <span v-if="device.active">{{device.hint}}</span>
      </div>
    </div>

    <div class="q pa-md">
      <q-input v-model="profile.name" :label="$t('profile.name')" />
      <q-input v-model="profile.vitae" type="textarea" :label="$t('profile.vitae')"/>
      <q-input v-model="profile.niche" :label="$t('profile.niche')" />
      <div class="q-gutter-sm">
        <q-checkbox v-for="device in recordingDevices" v-bind:key="device.label" :name="device.value" v-model="device.active" :label="device.label" />
      </div>
    </div>

    <q-btn color="primary" :label="$t('buttons.save')" @click="save" />
  </q-page>
</template>

<script>
  import {getProfile, isAuthenticated, setProfile} from "../services/storage-service";

export default {
  name: 'Profile',
  data () {
    return {
      profile: {
        name: '',
        vitae: '',
        niche: '',
        recordingDevices: []
      },
      recordingDevices: [
        { value: 'smartphone', label: this.$i18n.t('profile.devices.smartphone.label'), hint: this.$i18n.t('profile.devices.smartphone.hint'), active: false},
        { value: 'camera', label: this.$i18n.t('profile.devices.camera.label'), hint: this.$i18n.t('profile.devices.camera.hint'), active: false},
        { value: 'notebook', label: this.$i18n.t('profile.devices.notebook.label'), hint: this.$i18n.t('profile.devices.notebook.hint'), active: false},
      ]
    }
  },
  methods: {
    save: function () {
      this.recordingDevices.filter(device => device.active).forEach(device => this.profile.recordingDevices.push(device.value));

      console.log(this.profile);
      setProfile(this.profile);
    }
  },
  mounted() {
    this.authenticated = isAuthenticated();
    if(!this.authenticated) {
      console.log('go to login');
      this.$router.push({ path: "login" });
    }
    if (getProfile()) {
      this.profile = getProfile();
      this.recordingDevices.forEach(device => {
        if (this.profile.recordingDevices.includes(device.value)) {
          device.active = true;
        }
      });
      this.profile.recordingDevices = [];
      console.log(this.profile);
    }
  }
}
</script>
