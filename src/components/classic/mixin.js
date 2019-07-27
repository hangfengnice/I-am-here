let behavior = {
  computed: {
    img(){
      return this.$store.getters.classic.image
    },
    content(){
      return this.$store.getters.classic.content
    }
  }
}

export {behavior}
