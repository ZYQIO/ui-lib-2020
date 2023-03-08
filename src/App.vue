<template>
  <div class="app-page">
    <!-- 这是app.vue页面 , 数量: {{ count }}
    <button class="btn" @click="add">+</button> -->
  
    <router-view />
  </div>
</template>

<script>
import HelloWord from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWord,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style lang="less" scoped>
.app-page {
  color: red;
  font-size: 20px;
  .btn {
    cursor: pointer;
    padding: 3px 15px;
    outline: none;
    border: none;
    border-radius: 4px;
    border: 1px solid #dedede;
  }
}
</style>
