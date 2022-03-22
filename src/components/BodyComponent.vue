<template>
  <v-container>
    <v-row align="center" justify="right">
      <v-col>
        <v-card height="371" style="color: white" class="mx-auto background">
          <v-container fill-height fluid>
            <v-col style="margin-left: 50%" cols="12" align="left">
              <h1 style="font-size: 50px">The Art Of Travel</h1>
              <h4>Finding Beauty, one flight at a time</h4>
              <v-btn style="margin-top: 20px" small color="warning" dark>
                Normal Button
              </v-btn>
            </v-col>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
/* ✓ GOOD */
export default {
  name: "BodyComponent",
  data: () => ({
    //
  }),
  // ...
};
</script>
<style>
.card {
  background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
    no-repeat center center fixed !important;
  background-size: cover !important;
}
.background {
  background: url("https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg")
    no-repeat center center fixed !important;
  background-size: cover !important;
}
.white {
  color: white;
}
.btn-color {
  background-color: red !important;
  color: red !important;
}
</style>
