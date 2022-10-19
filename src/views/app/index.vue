<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

        <v-btn @click="$router.push('/')" text> Dashboard </v-btn>
        <v-btn @click="$router.push('/products')" text> Products </v-btn>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn @click="logout" outlined color="red"> Logout </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app="app">
      <v-flex class="text-xs-center">© 2022. All rights reserved.</v-flex>
    </v-footer>
  </v-app>
</template>
  
  <script>
export default {
  data: () => ({
    links: ["Dashboard", "Products"],
  }),
  methods: {
    logout() {
      this.$store.dispatch("signOut").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>