<template>
  <div class="home">
    这是home页面

    <my-button>按钮组件</my-button>
    <my-input v-model="value">按钮组件</my-input>
    <p>{{ value }}</p>
  </div>
</template>

<script>
// import MyButton from "../plugins/Button/index.vue";
// import MyInput from "../plugins/Input/index.vue";
import HelloWord from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWord,
    // MyButton,
    // MyInput,
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>

<style></style>
