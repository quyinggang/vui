<template>
  <button
    class="ui-button"
    :class="[
      type ? 'ui-button--' + type : '',
      size ? 'ui-button--' + size : '',
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': isDisabled }
    ]"
    :disabled="isDisabled"
    @click="handleBtnClick"
  >
    <i :class="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  inject: {
    uiButtonGroup: {
      default: null
    }
  },
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
    icon: String
  },
  computed: {
    isDisabled() {
      const parent = this.uiButtonGroup;
      return (parent && parent.disabled) || this.disabled;
    }
  },
  methods: {
    handleBtnClick() {
      this.$emit('click');
    }
  }
};
</script>
