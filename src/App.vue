<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link class="margin10" to="/">Go to Form Submit</router-link>
      <router-link class="margin10" to="/home">Go to Default</router-link>
      <router-link class="margin10" to="/users">Go to List User</router-link>
      <!-- baris di bawah merupakan dynamic router pada app -->
      <router-link class="margin10" :to="{ name: 'users', params: { id: id } }"
        >Go to Dynamic Router {{ id }}</router-link
      >
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->

    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      id: 2,
    };
  },
};
</script>

<style>
.margin10 {
  margin: 10px;
}
</style>
