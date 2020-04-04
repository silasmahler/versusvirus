<template>
  <div class="q pa-md">
    <q-input v-model="topic" :label="$t('createRoom.topicName')"></q-input>
    <q-select v-model="category" :options="categories" option-value="id" :option-label="$t('createRoom.categories.' + desc)" :label="$t('createRoom.categorySelect')" emit-value map-options />
    <q-input v-model="description" type="textarea" :label="$t('createRoom.description')"/>
    {{ category }}
  </div>
</template>

<script>
export default {
    name: 'CreateRoom',
    data () {
    return {
      topic: '',
      categories: [
        // {id: 'vegan', desc: $t('createRoom.categories.vegan')},
        {id: 'vegan', desc: 'vegan'},
        // {id: 'traditional', desc: $t('createRoom.categories.traditional')},
      ],
      category: null,
      desription: ''
    }
  }
}
</script>