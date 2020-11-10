<!--
 * @Author: your name
 * @Date: 2020-11-10 16:57:32
 * @LastEditTime: 2020-11-10 20:02:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \下拉\dome\src\components\Select.vue
-->
<template>
  <div class="select">
    <div class="content">
      <p>{{ text }}</p>
      <div class="names" v-if="isShow">
        <ul v-for="item in selectData" :key="item.id">
          <li @click="handleClick(item.name)">{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <button @click="show">{{isShow?'收起':'展开'}}</button>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    selectData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      text: "请选择",
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    },
    handleClick(name){
       this.text=name;
       this.isShow=false;
    }
  }
};
</script>

<style lang="css" scoped>
.select {
  width: 100%;
  height: 100%;
  display: flex;
}
.select button{
    height: 21px;
}
</style>
