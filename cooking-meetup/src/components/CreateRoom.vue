<template>
  <div class="q pa-md">
    <q-page-container>
        <q-page padding>
            <q-input v-model="topic" :label="$t('createRoom.topicName')"></q-input>
            <q-select v-model="category" :options="categories" :label="$t('createRoom.categorySelect')" />
            <q-input v-model="description" type="textarea" option-value="id" option-label="$t(`createRoom.categories.${desc}`)"  :label="$t('createRoom.description')" emit-value map-options/>
        </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
    name: 'CreateRoom',
    data () {
    return {
      topic: '',
      categories: [
        // 'vegan', 'traditional'
        {id: 'vegan', desc: 'vegan'},
        {id: 'traditional', desc: 'traditional'},
      ],
      category: '',
      desription: ''
    }
  }
}
</script>