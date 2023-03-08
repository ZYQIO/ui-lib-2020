<template>
  <input
    type="text"
    class="my-input"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    value: String,
  },
};
</script>

<style lang="less">
.my-input {
  border: none;
  outline: none;
  height: 34px;
  line-height: 34px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 0 15px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
