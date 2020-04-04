<template>
  <q-page>
    <div class="q pa-md">
      <q-input v-model="name" label="t('profile.name')" />
      <q-input v-model="vitae" type="textarea" :label="$t('profile.vitae')"/>
      <q-input v-model="niche" label="t('profile.niche')" />
      <div class="q-gutter-sm">
        <q-checkbox v-for="device in recordingDevices" v-bind:key="device.label" v-model="device.active" label="device.label" />
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'CreateRoom',
  data () {
    return {
      name: '',
      vitae: '',
      niche: '',
      recordingDevices: [
        { label: 'smartphone', hint: 'TODO', active: false},
        { label: 'notebook', hint: 'TODO', active: false},
        { label: 'camera', hint: 'TODO', active: false},
      ]
    }
  }
}
</script>