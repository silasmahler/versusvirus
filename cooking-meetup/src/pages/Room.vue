<template>
  <div>
    <q-btn
      class="drawer-open"
      @click="drawer = !drawer"
      label="<"
      v-if="!drawer"
    />
    <!--  TODO button beschriftung  -->
    <q-btn
      class="bg-red text-white leave-button"
      @click="leaveConfirm = true"
      label="x"
    />
    <q-drawer
      v-model="drawer"
      :width="400"
      :breakpoint="500"
      overlay
      side="right"
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div>
          <q-btn @click="drawer = !drawer" label=">" v-if="drawer" />
        </div>
        <div class="drawer-content">
          <div class="text-h5">{{ $t("room.currentRecipe") }}</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
          praesentium molestias a adipisci, dolore vitae odit, quidem
          consequatur optio voluptates asperiores pariatur eos numquam rerum
          delectus commodi perferendis voluptate?
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-dialog v-model="leaveConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">{{ $t("room.leaveRoomMessage") }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            :label="$t('buttons.cancel')"
            color="primary"
            v-close-popup
          ></q-btn>
          <q-btn
            flat
            :label="$t('buttons.leave')"
            @click="leaveRoom"
            color="red"
            v-close-popup
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import {isAuthenticated} from "../services/storage-service";
  import eyeson from 'eyeson';
  export default {
    name: "Room",
    data() {
      return {
        drawer: false,
        leaveConfirm: false
      };
    },
    methods: {

      init: function(key) {
        console.log(key);
        if (key.length !== ACCESS_KEY_LENGTH) {
          return;
        }
        eyeson.start(key);
      },

      leaveRoom: function () {
        this.$router.push({path: "/"});
      },


      handleEvent: function(event) {
        if (event.type !== 'accept') {
          console.debug('[App]', 'Ignore received event:', event.type);
          return;
      }
      }

    },
    mounted() {
      this.authenticated = isAuthenticated();
      if (!this.authenticated) {
        this.$router.push({path: "login"});
      }
    }
  },
  mounted() {
    this.authenticated = isAuthenticated();
    if (!this.authenticated) {
      this.$router.push({ path: "login" });
    }
  }
};
</script>

<style scoped>
.drawer-open {
  position: absolute;
  right: 0;
}
.leave-button {
  font-size: large;
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 40px;
}
.drawer-content {
  margin: 10px;
}
</style>
