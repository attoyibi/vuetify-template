<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Go to Home</router-link>
      <router-link to="/home">Go to About</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      title: "Default Title",
      deskripsi: "Default deskripsi",
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.title.value !== "" && this.$refs.deskripsi.value !== "") {
        console.log(this.$refs.title.value);
        this.title = this.$refs.title.value;
        this.deskripsi = this.$refs.deskripsi.value;
        this.$refs.title.value = "";
        this.$refs.deskripsi.value = "";
      }
    },
  },
};
</script>
