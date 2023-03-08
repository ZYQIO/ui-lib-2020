<template>
  <button :class="['my-btn', type]" @click="btnChange"><slot>默认按钮</slot></button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    type: String,
  },
  methods: {
    btnChange(e) {
        this.$emit('click', e)
    }
  }
};
</script>

<style lang="less">
.my-btn {
  height: 34px;
  border: none;
  outline: none;
  padding: 0 15px;
  border-radius: 4px;
  margin: 0 10px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: #fff;

  &.primary {
    border: 1px solid #ddd;
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
  }

  &.success {
    border: 1px solid #ddd;
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }

  &.danger {
    border: 1px solid #ddd;
    background-color: red;
    border-color: red;
    color: #fff;
  }

  &.warning {
    border: 1px solid #ddd;
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
</style>
