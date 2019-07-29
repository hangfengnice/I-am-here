<template>
  <div @click="toTell" class="img-container">
    <slot name='img'></slot>
    <slot name='text'></slot>
  </div>
</template>

<script>
export default {
  name: "imgButton",
  methods: {
    toTell() {
      this.$emit("fromChild");
    }
  }
};
</script>

<style lang='scss' scoped>
.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border: none;
}
</style>
