<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>data from store.appName : {{ this.$store.getters.appName }}</h4>
    <h4>data from store.count : {{ this.$store.getters.count }}</h4>

    {{ newInputValue }}

    <!-- ========== Start Section ========== -->
    <input v-model.number="newInputValue" />

    <!-- ========== End Section ========== -->
    <button @click="gantiAngka">+</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return { newInputValue: 0 };
  },
  methods: {
    gantiAngka() {
      console.log(this.newInputValue);
      this.$store.dispatch("gantiAngka", this.newInputValue);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
