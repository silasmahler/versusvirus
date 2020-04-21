<template>
  <div>
    <q-btn
      class="drawer-open button-overlay bg-white"
      @click="drawer = !drawer"
      label="<"
      v-if="!drawer"
    />
    <!--  TODO button beschriftung  -->
    <q-btn
      class="bg-red text-white leave-button button-overlay"
      @click="leaveConfirm = true"
      label="x"
    />
    <iframe class="mock-video" src="https://www.youtube.com/embed/fQallQyxAfw?controls=0&modestbranding=1"
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen/>
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
          <q-separator/>
          <div class="chat">
            <ul class="chat-message-list">
              <li class="chat-message">User1 [19:36]: Hey guys</li>
              <li class="chat-message">User2 [19:36]: Hello</li>
              <li class="chat-message">You [19:36]: Evening</li>
              <li class="chat-message">User1 [19:37]: Nice recipe!</li>
              <li class="chat-message">User2 [19:37]: Yeah! Looking forward to it!</li>
              <li class="chat-message">User3 [19:45]: Looks great!</li>
            </ul>
            <textarea class="chat-message-input" :placeholder="$t('conferenceRoom.chat.messagePlaceholder')"></textarea>
          </div>
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
import { isAuthenticated } from "../services/storage-service";

export default {
  name: "Room",
  data() {
    return {
      drawer: false,
      leaveConfirm: false
    };
  },
  methods: {
    leaveRoom: function() {
      this.$router.push({ path: "/" });
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
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 40px;
}
.drawer-content {
  margin: 10px;
}

.mock-video {
  border: 0;
  z-index: 1;
  height: calc(100% - 50px);
  width: 100%;
  left: 0;
  right: 0;
  position: absolute;
  top: 50px;
}

.button-overlay {
  z-index: 999;
}

.chat-message-list {
  list-style-type: none;
  padding-left: 0;
}

.chat-message {
  margin-bottom: 2px;
}

.chat-message-input {
  position: fixed;
  bottom: 2rem;
}
</style>
