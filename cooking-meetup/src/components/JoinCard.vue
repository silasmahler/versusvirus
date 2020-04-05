<template>
  <div class="flex flex-center">
    <q-card class="welcome-card" v-if="!clickedJoinARoom">
      <q-img
        src="../assets/dinner_party_logo.png"
        spinner-color="white"
        style="height: 200px; max-width: 200px; position:absolute; right: 0; z-index:99"
      />
      <img
        src="https://st.focusedcollection.com/9163412/i/650/focused_125210828-stock-photo-happy-people-cooking-together.jpg"
        style="z-index:1"
      />
      <q-separator />
      <q-card-actions vertical>
        <q-btn @click="clickedJoinARoom = true" color="secondary">{{ $t('tabs.join.title') }}</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "JoinCard",
  props: {
    clickedJoinARoom: {
      type: boolean,
      default: false
    }
  }
};
</script>