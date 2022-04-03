// // import Vue from "vue";
// import { Vuex } from "vuex";
// // Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     appName: "Vue 2 vuex",
//   },

//   getters: {
//     appName: (state) => state.appName,
//   },
// });

// export default store;

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  appName: "Muchson vuex",
};
export default new Vuex.Store({
  state,
  getters: {
    appName: (state) => state.appName,
  },
});
