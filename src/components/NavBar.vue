<template>
  <nav>
    <v-toolbar app>
      <v-container>
        <v-row>
          <v-toolbar-title class="text-uppercase grey--text">
            <v-btn icon class="ml-2"><v-icon>vue</v-icon></v-btn>
          </v-toolbar-title>
          <v-row align="center" justify="space-around">
            <v-btn text> Normal </v-btn>
            <v-btn text color="primary"> Primary </v-btn>
            <v-btn text color="error"> Error </v-btn>
            <v-btn text disabled> Disabled </v-btn>
          </v-row>
        </v-row>
      </v-container>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
