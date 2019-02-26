<template>
  <div id="app">
    <div @click="show=true" style="width: 200px;height: 20px;background: aqua">{{num}}</div>
    <num-keyboard v-model="show" @cb="cb" ></num-keyboard>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        num: '',
        show: false
      }
    },
    methods: {
      cb(v) {
        this.num = v
      },
      confirm(v){
        console.log(v)
      }
    }
  }
</script>

<style>

</style>
