<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <p>welcome ....</p>
  <button @click="handleEvent">click</button>
  <div v-if="ShowModal">
    <Modal :header="header" :text="text" theme="sale" @close="changeModal"/>
  </div>
  <button @click.ctrl="changeModal">show modal (ctrl)</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "my modal content",
      header: "Sign up for a give away",
      text: "please signup ! :))",
      ShowModal:false
    };
  },
  methods: {
    handleEvent() {
      console.log("event");
      console.log(this.$refs.name);
      this.$refs.name.classList.add("minoo");
    },
    changeModal(){
        this.ShowModal=!this.ShowModal;
    }
  },
};
</script>

<style></style>
