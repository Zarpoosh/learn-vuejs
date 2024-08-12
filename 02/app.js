const app = Vue.createApp({
  //data , function , template ,...
  // template: "<h2>this is a test text </h2>",
  data() {
    return {
      showbooks: true,
      books: [
        { title: "boof koor", price: 12000 },
        { title: "sag velgard", price: 2300 },
        { title: "kelidar", price: 65000 },
      ],
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
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
