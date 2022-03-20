<template>
  <v-app class="grey lighten-4">
    <NavBar />

    <v-content>
      <router-view></router-view>
      <BodyComponent />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BodyComponent from "./components/BodyComponent.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    NavBar,
    BodyComponent,
  },
};
</script>
