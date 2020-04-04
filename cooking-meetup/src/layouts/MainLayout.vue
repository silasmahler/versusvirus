<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/FORKnKNIFE.png" />
        </q-avatar>

        <q-toolbar-title>
          <router-link to="/" class="toolbar-title-link">Dinner Party</router-link>
        </q-toolbar-title>

        <q-space />

        <q-btn flat round dense icon="more_vert">
          <q-menu>
            <q-list style="min-width: 100px">
              <EssentialLink v-for="link in menu" :key="link.title" v-bind="link" />
              <q-seperator />
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-btn flat dense @click="logout" :label="$t('buttons.logout')"/>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import {logout} from "../services/storage-service";

export default {
  name: "MainLayout",
  components: {
    EssentialLink
  },
  data() {
    return {
      languages: ["english", "french", "german", "italian"],
      leftDrawerOpen: false,
      menu: [
        {
          title: "Profile",
          icon: "account_box",
          link: "#/profile"
        },
        {
          title: "Colors",
          icon: "palette",
          link: "#/colors"
        }
      ]
    };
  },
  methods: {
    logout: function () {
      logout();
      this.$router.push({ path: '/login' });
    }
  }
};
</script>
