<template>
  <!-- App.vue -->

  <v-app>
    <!-- -->
    <NavBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <BodyComponent />
        <CardList />

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
      <h1>Welcome</h1>
    </v-footer>
  </v-app>
</template>

<script>
import BodyComponent from "./components/BodyComponent.vue";
import NavBar from "./components/NavBar.vue";
import CardList from "./components/CardList.vue";

export default {
  data: () => ({
    reveal: false,
    show: false,
  }),
  components: {
    BodyComponent,
    NavBar,
    CardList,
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
