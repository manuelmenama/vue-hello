console.log("hello-vue loaded");

const {createApp} = Vue;

createApp ({

  data(){

    return {

      nome: "Manuel",
      cognome: "Mena",
      fontWeight: "strong",
      loremPicsum: "",
      output: "https://picsum.photos/seed/",
      toggleImg: true,
      toggleText: false
    }

  },

  methods: {

    toggleImgTxt() {
      this.toggleImg = !this.toggleImg;
      this.toggleText = !this.toggleText;
    }

  }

}).mount("#app")