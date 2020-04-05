<template>
  <div>
    <div class="q-pa-md">
      <div class="col-6">
        <q-img src="../assets/unsplash/people-in-kitchen.jpg" 
               native-context-menu
               style="height: 500px;"
        >
          <div class="absolute-top text-center">
            <div class="text-h3">{{ $t('tabs.join.title') }}</div>
          </div>
        </q-img>
      </div>
      <q-separator />
      <div class="q-gutter-md q-pa-md">
        <q-btn @click="updateClickedJoinARoom(true)" 
               color="secondary"
               :label="$t('tabs.join.title')">  
        </q-btn>
      </div>
    </div> 
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