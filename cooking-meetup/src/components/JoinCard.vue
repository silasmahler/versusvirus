<template>
  <div class="flex flex-center">
    <q-card class="welcome-card" style="width:80%">
      <q-img src="../assets/unsplash/people-in-kitchen.jpg">
        <div class="absolute-top">
          <div class="text-h6">{{ $t("tabs.join.title") }}</div>
        </div>
      </q-img>
      <q-separator />
      <q-card-actions vertical>
        <q-btn @click="updateClickedJoinARoom(true)" color="accent" :label="$t('tabs.join.title')"></q-btn>
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
    updateClickedJoinARoom(bool) {
      this.clickedJoinARoom = bool;
      this.$emit("emitclickedJoinARoom", this.clickedJoinARoom);
    }
  }
};
</script>