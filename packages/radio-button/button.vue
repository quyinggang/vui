<template>
  <el-radio class="el-radio-button" :label="label" :disabled="isDisabled">
    <slot></slot>
  </el-radio>
</template>

<script>
export default {
  name: 'ElRadioButton',
  inject: ['ElRadioGroup'],
  props: {
    label: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      const parent = this.ElRadioGroup;
      return (parent && parent.disabled) || this.disabled;
    }
  }
};
</script>
