<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/FORKnKNIFE.png" v-if="showLogo" />
        </q-avatar>

        <q-toolbar-title>
          <router-link to="/" class="toolbar-title-link">Dinner Party</router-link>
        </q-toolbar-title>

        <q-space />

        <q-btn flat dense v-if="profile" class="menu-profile">
          <q-avatar>
            <q-img :src="`../statics/${profile.image}`" alt="Test" v-if="profile.image" />
            <q-img src="../statics/img/userfotos/placeholder.png" alt="Test" v-if="!profile.image" />
          </q-avatar>
          &nbsp;
          {{ profile.name }}
          <q-menu>
            <q-list style="min-width: 100px">
              <EssentialLink v-for="link in menu" :key="link.title" v-bind="link" />
              <q-seperator />
              <q-item clickable v-close-popup tag="btn" @click="logout">{{ $t("buttons.logout") }}</q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn v-if="!profile" flat round dense icon="more_vert">
          <q-menu>
            <q-list style="min-width: 100px">
              <EssentialLink v-for="link in menu" :key="link.title" v-bind="link" />
              <q-seperator />
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-btn flat dense @click="login" :label="$t('buttons.login')" />
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
import {
  getCurrentUser,
  isAuthenticated,
  logout
} from "../services/storage-service";

export default {
  name: "MainLayout",
  components: {
    EssentialLink
  },
  data() {
    return {
      showLogo: true,
      profile: null,
      leftDrawerOpen: false,
      menu: [
        {
          title: "Profile",
          icon: "account_box",
          link: "#/profile"
        }
      ]
    };
  },
  methods: {
    logout: function() {
      logout();
      this.profile = null;
      this.$router.push({ path: "/login" });
    },
    login: function() {
      this.$router.push({ path: "/login" });
    }
  },
  beforeUpdate() {
    this.profile = getCurrentUser().profile;
    console.log(this.profile);
  }
};
</script>

<style scoped>
.menu-profile {
  margin: 0 10px;
}
.language-choose {
  width: 10rem;
}
</style>
