<template>
  <div @click="onTap" class="tag_container">
    <slot name="before"></slot>
    <span>{{text}}</span>
    <!-- 插槽 -->
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "tag",
  props: {
    text: String
  },
  methods: {
    onTap() {
      this.$emit("tapping", this.text);
    }
  }
};
</script>

<style lang='scss' scoped>
.tag_container {
  padding: 3px 4px;
  background-color: #f5f5f5;
  color: #666;
  border-radius: 2px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>