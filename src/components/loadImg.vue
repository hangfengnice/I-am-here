<template>
  <div class="me_container">
    <img :src="showFileData" alt />

    <div class="inputWrap">
      <input @change="addFile" type="file" ref="myfile" multiple accept="img/*" />
    </div>
  </div>
</template>

<script>
export default {
  name: "loadImg",
  data() {
    return {
      showFileData: require("../assets/images/my/my.png")
    };
  },
  methods: {
    addFile() {
      let file = this.$refs.myfile.files[0];
      if (file) {
        let objUrl = this.getObjectURL(file);
        this.showFileData = objUrl;
      }
    },
    getObjectURL(file) {
      let url = window.URL.createObjectURL(file);
      return url;
    }
  }
};
</script>

<style lang='scss' scoped>
.me_container {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  .inputWrap {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    margin-top: -63px;
    position: absolute;
    input {
      display: inline-block;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>
