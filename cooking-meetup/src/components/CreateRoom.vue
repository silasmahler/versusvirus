<template>
  <div class="q pa-md">
    <q-input v-model="topic" :label="$t('createRoom.topicName')" :rules="[val => !!val || 'Field is required']"></q-input>
    <q-select v-model="category" :options="categories" :label="$t('createRoom.categorySelect')" emit-value map-options />
    <q-input v-model="description" type="textarea" :label="$t('createRoom.description')"/>

    <div>
      <q-btn
        @click="createRoom"
        color="primary"
        :label="$t('createRoom.createButton')"
      />
    </div>
  </div>
</template>

<script>
import qs from 'qs';
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
      desription: ''
    }
  },
  methods: {
    createRoom: async function(event) {
      let {
        data: {
          links: {
            gui: roomUrl
          }
        }
      } = await this.$axios.post('/rooms', qs.stringify({
        user: {
          name: this.topic
        }
      }));

      window.open(roomUrl, '_blank');
    }
  }
}
</script>
