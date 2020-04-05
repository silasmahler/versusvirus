<template>
  <div class="q-pa-md">
     <div class="col-6">
        <q-img src="../assets/unsplash/dinner-party-friends.jpg" 
               native-context-menu
               style="height: 270px;"
        >
          <div class="absolute-top text-center">
            <div class="text-h3">{{ $t('tabs.create.title') }}</div>
          </div>
        </q-img>
      </div>
      <q-img src=""
       />
    <div class="q-gutter-md">
        <q-input v-model="topic" :label="$t('createRoom.topicName')" :rules="[val => !!val || 'Field is required']"></q-input>
        <q-select v-model="category" :options="categories" :label="$t('createRoom.categorySelect')" emit-value map-options />
        <q-input v-model="description" type="textarea" :label="$t('createRoom.description')"/>
   </div>
    
    <div>
      <div class="q-pa-md">
        <div class="row col" v-if="!roomUrl">
          <q-btn
            
            @click="createRoom"
            color="secondary"
            :label="$t('createRoom.createButton')"
          />
        </div>
        <div class="row" v-if="(roomUrl && inviteUrl)">
          <div class="col">
            <q-btn
              v-if="roomUrl"
              @click="openRoom"
              color="secondary"
              :label="$t('createRoom.openButton')"
            />
          </div>
          <div class="col">
            <q-btn
              v-if="inviteUrl"
              @click="copyRoom"
              color="secondary"
              :label="$t('createRoom.copyButton')"
            />
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs';
import { copyToClipboard } from 'quasar'
import { Notify } from 'quasar'

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
      Notify.create('Creating a Room for you!');
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
