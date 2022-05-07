
import toast from './toast.vue';

let obj = {};
obj.install = function (Vue, options) {
  console.log(options,'options')
  const ToastCon = Vue.extend(toast)
  const ins = new ToastCon()
  // 挂载 dom
  ins.$mount()
  // 添加到 body 后面
  document.body.appendChild(ins.$el)


  Vue.prototype.$toast = ins

  return ins
}

export default obj