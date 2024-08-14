<!--pass the template(many tags) ===> slot 
    pass a value ===> props
-->
<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  align-items: center;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: #9b9090;
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: rgb(72, 204, 94);
  padding: 0;
  border: none;
}
.modal p {
  font-style: normal;
}
.sale {
  background: rgb(146, 28, 28);
  color: #fff;
}
.sale h1 {
  color: #fff;
}
</style>
