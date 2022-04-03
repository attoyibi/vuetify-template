import Vue from "vue";
import { Vuex } from "vuex";
Vue.use(Vuex);
const store = Vuex.Store({
  state: {
    appName: "Vue 2 vuex",
  },

  getters: {
    appName: (state) => state.appName,
  },
});

export default store;
