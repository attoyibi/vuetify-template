<template>
  <div>
    {{ title }}
    <input type="text" id="nameField" ref="nameField" />
    <input type="text" id="ageField" ref="ageField" />
    <button v-on:click="writeData()">Submit</button>
    <br />
    <input type="text" id="deteleteField" ref="deleteField" />
    <button v-on:click="deleteData()">Delete</button>
  </div>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHF8IaAmvmr4uj4iue-jt3ORXKSfM2rNA",
  authDomain: "custom-bdcb0.firebaseapp.com",
  databaseURL: "https://custom-bdcb0-default-rtdb.firebaseio.com",
  projectId: "custom-bdcb0",
  storageBucket: "custom-bdcb0.appspot.com",
  messagingSenderId: "1014173285269",
  appId: "1:1014173285269:web:1d9dafd7f86cf6e5e3d49c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
//init services
const db = getFirestore();

//collection ref
const colRef = collection(db, "books");

export default {
  name: "App",
  components: {},
  data: function () {
    return {
      title: "",
    };
  },
  created() {
    getDocs(colRef).then((snapshot) => {
      let books = [];
      snapshot.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      this.title = books;
      console.log("create", books);
      return books;
    });
  },
  methods: {
    writeData() {
      // e.preventDefault();
      console.log(this.$refs.nameField.value);
      addDoc(colRef, {
        title: this.$refs.nameField.value,
        author: this.$refs.ageField.value,
      }).then(() => {});
    },
    deleteData() {
      const docRef = doc(db, "books", this.$refs.deleteField.value);
      deleteDoc(docRef).then(() => {
        this.$refs.deleteField.value.reset();
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
