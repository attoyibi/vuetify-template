import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const state = {
  appName: "Muchson vuex",
  count: 0,
};
export default new Vuex.Store({
  state,
  getters: {
    appName: (state) => state.appName,
    count: (state) => state.count,
  },
  //mutation adalah cara kita untuk merubah state
  mutations: {
    gantiAngka1: (state, payload) => {
      console.log("state di dalam muation", state); //mengerluarkan state yang kita buat dalam getter
      console.log("state di dalam payload", payload); //mengerluarkan payload yang kita kirim dari actions
      state.count = payload;
    },
  },
  //action adalah cara kita untuk memasukkah payload(masukan user) ke dalam mutation sehingga terjadi perubahan state. agak muter ya ges ya haha
  actions: {
    gantiAngka: (context, payload) => {
      //payload1 merujuk ke mutation ganti angka 1
      //payload sebelahnya gantiangka 1 merupakan inputan dari user yang nanti dikirim ke mutation sebagai payload juga
      context.commit("gantiAngka1", payload);
    },
  },
});
