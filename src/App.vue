<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" @click="btn">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    btn(){
      console.log(this)
      console.log(this.$toast)
      this.$toast.message('hello',3000)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
