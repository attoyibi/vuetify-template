<template>
  <div>
    <li v-for="item in data" :key="item.name">
      <router-link :to="{ name: 'users', params: { id: item.id } }"
        >{{ item.id }} - {{ item.name }}
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "ListUser",

  data() {
    return {
      data: [
        {
          id: 1,
          name: "Muchson",
          email: "Muchson@gmail,com",
        },
        {
          id: 2,
          name: "Muchson2",
          email: "Muchson2@gmail,com",
        },
        {
          id: 3,
          name: "Muchson3",
          email: "Muchson3@gmail,com",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>
