<template>
  <div>
    <p>Title : {{ this.title }}</p>
    <p>Deskripsi : {{ this.deskripsi }}</p>
    <input required type="text" ref="title" />
    <input required type="text" ref="deskripsi" />
    <button v-on:click="onSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "FormSubmit",
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
