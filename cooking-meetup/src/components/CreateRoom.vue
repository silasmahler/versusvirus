<template>
  <div class="q pa-md">
    <q-input v-model="topic" :label="$t('createRoom.topicName')" :rules="[val => !!val || 'Field is required']"></q-input>
    <q-select v-model="category" :options="categories" :label="$t('createRoom.categorySelect')" emit-value map-options />
    <q-input v-model="description" type="textarea" :label="$t('createRoom.description')"/>

    <div>
      <q-btn
        v-if="!roomUrl"
        @click="createRoom"
        color="primary"
        :label="$t('createRoom.createButton')"
      />

      <q-btn
        v-if="roomUrl"
        @click="openRoom"
        color="primary"
        :label="$t('createRoom.openButton')"
      />

      <q-btn
        v-if="inviteUrl"
        @click="copyRoom"
        color="primary"
        :label="$t('createRoom.copyButton')"
      />
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import { copyToClipboard } from 'quasar'
export default {
  name: 'CreateRoom',
  data () {
    return {
      topic: '',
      categories: [
        {value: 'vegan', label: this.$i18n.t('createRoom.categories.vegan')},
        {value: 'vegan', label: this.$i18n.t('createRoom.categories.traditional')},
        {value: 'vegan', label: this.$i18n.t('createRoom.categories.french')},
        {value: 'vegan', label: this.$i18n.t('createRoom.categories.german')},
        {value: 'vegan', label: this.$i18n.t('createRoom.categories.italian')},
      ],
      category: null,
      desription: '',
      roomUrl: '',
      inviteUrl: ''
    }
  },
  methods: {
    createRoom: async function(event) {
      let {
        data: {
          links: {
            gui: roomUrl,
            guest_join: inviteUrl
          }
        }
      } = await this.$axios.post('/rooms', qs.stringify({
        user: {
          name: this.topic
        }
      }));

      this.roomUrl = roomUrl;
      this.inviteUrl = inviteUrl;
    },
    openRoom: function(event) {
      window.open(this.roomUrl, '_blank');
    },
    copyRoom: function(event) {
      copyToClipboard(this.inviteUrl);
    }
  }
}
</script>
