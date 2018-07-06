# vue2-num-keyboard

> A Vue.js numeric keyboard
## 样式
![样式](/keyboard.png)
## use
```
yarn add vue2-num-keyboard
or
npm install vue2-num-keyboard -save
```

```main.js```
```
import numKeyboard from 'vue2-num-keyboard'
Vue.use(numKeyboard)
```

```
<template>
  <div id="app">
    <div @click="show=true" style="width: 200px;height: 20px;background: aqua">{{num}}</div>
    <num-keyboard v-model="show" @cb="cb" @></num-keyboard>
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
```
## api

|参数|说明|默认值|
|:-:|:-:|:-:|
| :point | 是否显示小数点，默认显示| true |
| :decimalDigits  | 是否开启小数位数限制，默认两位小数| true |
| @confirm | 确认按钮回调 ，可选| -- |
