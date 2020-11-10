<!--
 * @Author: your name
 * @Date: 2020-11-10 16:37:13
 * @LastEditTime: 2020-11-10 20:34:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \下拉\dome\src\view\Home\index.vue
-->
<template>
  <div class="home">
    <header>
      <Select :selectData='selectData'></Select>
    </header>
    <main>
        
    </main>
    <footer></footer>
  </div>
</template>

<script>
import Select from "@/components/Select";
import axios from "axios"

export default {
  name: "Home",
  components: {
    Select
  },
  data() {
    return {
      selectData: [
        {
          name: "霸神响哥",
          id: 1
        },
        {
          name: "雷神索尔",
          id: 2
        }
      ],
      list:[]
    };
  },
  created() {
      
  },
};
</script>

<style lang='css' scoped>
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.home header{
    width: 100%;
    height: 50px;
    background: skyblue;
}
.home main{
    flex: 1;
    overflow-y: scroll;
}
</style>
