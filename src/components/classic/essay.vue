<template>
  <div class="index">
    <div class="container">
    <img class="class-img" :src="img" alt />
    <img class="tag" src="./images/essay@tag.png" alt />
    <span class="content">{{content}}</span>
  </div>
  </div>
</template>

<script>
import {behavior} from './mixin'

export default {
  name: "essay",
  mixins: [behavior]
};
</script>

<style lang='scss' scoped>
</style>