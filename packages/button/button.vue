<template>
  <button
    :class="[
      'el-button',
      type ? 'el-button--' + type : '',
      size ? 'el-button--' + size : '',
      round ? 'el-button--round' : '',
      circle ? 'el-button--circle' : '',
      disabled ? 'el-button--disabled' : '',
      customClass
    ]"
    :disabled="disabled"
    @click="handleBtnClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    size: {
      type: String,
      validator: (value) => {
        return ['mini', 'small', 'medium'].includes(value);
      }
    },
    type: {
      type: String,
      validator: (value) => {
        return ['primary', 'info', 'warning', 'success', 'danger', 'text'].includes(value);
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: String
  },
  methods: {
    handleBtnClick() {
      this.$emit('click');
    }
  }
};
</script>
