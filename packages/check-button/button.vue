<template>
  <el-checkbox class="el-checkbox-button" :label="label" :disabled="isDisabled">
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: 'ElCheckboxButton',
  inject: {
    elCheckboxGroup: {
      default: null
    }
  },
  props: {
    label: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      const parent = this.elCheckboxGroup;
      return parent ? parent.disabled : this.disabled;
    }
  }
};
</script>
