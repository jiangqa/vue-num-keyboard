import vueNumKeyboard from './numKeyboard' // 导入组件

const install = function (Vue) {
  Vue.component(vueNumKeyboard.name, vueNumKeyboard)  // vuePayKeyboard.name 组件的name属性
}


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
