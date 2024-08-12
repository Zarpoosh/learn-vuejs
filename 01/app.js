const app = Vue.createApp({
  //data , function , template ,...
  // template: "<h2>this is a test text </h2>",
  data() {
    return {
      x:0,
      y:0,
      showBooks: true,
      title: "masnavi",
      author: "molavi",
      age: 23,
    };
  },

  methods: {
    changeTitle(newbook) {
      // console.log("clicked")
      this.title = newbook;
    },
    changeShowBook() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log("event");
      console.log(e);
      
    },
    handleMouseMove(e){
      this.x=e.offsetX
      this.y=e.offsetY
    }
  },
});

app.mount("#app");
