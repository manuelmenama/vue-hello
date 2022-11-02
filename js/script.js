console.log("hello-vue loaded");

const {createApp} = Vue;

createApp ({

  data(){

    return {

      nome: "Manuel",
      cognome: "Mena",
      fontWeight: "strong",
      loremPicsum: "",
      output: "https://picsum.photos/seed/"

    }

  }

}).mount("#app")