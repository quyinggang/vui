<template>
  <div class="el-radio-group" :class="{'is-disabled': disabled}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRadioGroup',
  provide() {
    return {
      ElRadioGroup: this
    };
  },
  props: {
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
