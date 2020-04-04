<template>
  <div class="q pa-md">
    <q-input v-model="topic" :label="$t('createRoom.topicName')"></q-input>
    <q-select v-model="category" :options="categories" :label="$t('createRoom.categorySelect')" emit-value map-options />
    <q-input v-model="description" type="textarea" :label="$t('createRoom.description')"/>
  </div>
</template>

<script>

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
  }
}
</script>