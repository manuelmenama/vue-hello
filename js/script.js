console.log("hello-vue loaded");

//destrutturo Vue e prendo "create app"
const {createApp} = Vue;

//in createApp inserisco tutte le mie informazioni
createApp ({

  //data ritorna quelle che saranno le mie variabili
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
  //nell'oggetto methods inserisco quelle che saranno le mie funzioni
  methods: {
    //utilizzo due toggle inversi per gestire img e testo
    toggleImgTxt() {
      this.toggleImg = !this.toggleImg;
      this.toggleText = !this.toggleText;
    }

  }
//in mount inserisco quale sarà l'elemento del dom in cui scriverò le mie istruzioni di vue
}).mount("#app")