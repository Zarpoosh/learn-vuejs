const app = Vue.createApp({
  //data , function , template ,...
  // template: "<h2>this is a test text </h2>",
  data() {
    return {
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
  },
});

app.mount("#app");
