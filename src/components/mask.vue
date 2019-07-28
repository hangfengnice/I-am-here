<template>
  <div class="mask_container"></div>
</template>

<script>
export default {
  name: "maskfull"
};
</script>

<style lang='scss' scoped>
.mask_container{
  background-color: #000;
  position: fixed;
  top: 0;
  opacity: .6;
  width: 550px;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
}
</style>