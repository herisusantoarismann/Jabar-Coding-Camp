<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Heri Susanto Arisman</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1" @click="login">
            <v-icon left>
              mdi-lock
            </v-icon>
            Login
          </v-btn>
          <v-btn block color="success">
            <v-icon left>
              mdi-account
            </v-icon>
            Register
          </v-btn>
        </div>
        <v-divider class="mb-1"></v-divider>
        <v-list-item
          v-for="(item, i) in menus"
          :key="`menu-${i}`"
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append v-if="!guest">
        <div class="pa-2">
          <v-btn block color="red" dark @click="logout">
            <v-icon left>mdi-lock</v-icon>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="success" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SabercodeApp</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-slide-y-transition>
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-main>

    <v-footer app>
      @Sanbercode | VueJS
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    drawer: true,
    menus: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Blogs", icon: "mdi-note", route: "/blogs" },
    ],
    guest: true,
    snackbarStatus: true,
    snackbarText: "Berhasil Login",
  }),
  methods: {
    logout() {
      this.guest = true;
      this.setAlert({
        status: true,
        color: "success",
        text: "Anda Berhasil Logout",
      });
    },
    login() {
      this.setDialogComponent({ component: "login" });
      console.log(this.$store.state);
    },
    ...mapActions({
      setAlert: "alert/set",
      setDialogComponent: "dialog/setComponent",
    }),
  },
};
</script>
