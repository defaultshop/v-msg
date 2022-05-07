<template>
  <div v-if="show" class="toast">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "toast",
  data(){
    return {
      msg: '',
      show: false
    }
  },
  methods: {
    message(msg = "成功", time = 1000){
      this.msg = msg;
      this.show = true;
      setTimeout(()=>{
        this.msg = "";
        this.show = false;
      },time)
    }
  }
}
</script>

<style>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 3px;
  line-height: 20px;
  max-width: 100px;
  text-align: center;
}
</style>