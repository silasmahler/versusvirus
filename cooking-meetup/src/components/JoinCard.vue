<template>
  <div class="flex flex-center">
    <q-card class="welcome-card">
      <img
        src="https://st.focusedcollection.com/9163412/i/650/focused_125210828-stock-photo-happy-people-cooking-together.jpg"
        style="z-index:1"
      />
      <q-separator />
      <q-card-actions vertical>
        <q-btn @click="updateClickedJoinARoom(true)" color="secondary">
                  <div class="text-h4">{{ $t('tabs.join.title') }}</div>       
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "JoinCard",
  props: {
    clickedJoinARoom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateClickedJoinARoom(bool){
      this.clickedJoinARoom = bool;
      this.$emit('emitclickedJoinARoom', this.clickedJoinARoom);
    }
  }
};
</script>