const app = Vue.createApp({
  //data , function , template ,...
  // template: "<h2>this is a test text </h2>",
  data() {
    return {
      url: "https://github.com/Zarpoosh?tab=repositories",
      showBooks: true,
      books: [
        {
          title: "boof koor",
          price: 12000,
          image: "./images/img1.png",
          isFav: false,
        },
        {
          title: "sag velgard",
          price: 2300,
          image: "./images/img2.png",
          isFav: true,
        },
        {
          title: "kelidar",
          price: 65000,
          image: "./images/img3.png",
          isFav: true,
        },
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
    activeMode(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
