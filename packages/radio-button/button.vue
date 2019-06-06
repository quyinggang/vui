<template>
  <ui-radio class="ui-radio-button" :label="label" :disabled="isDisabled">
    <slot></slot>
  </ui-radio>
</template>

<script>
export default {
  name: 'UiRadioButton',
  inject: {
    uiRadioGroup: {
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
      const parent = this.uiRadioGroup;
      return (parent && parent.disabled) || this.disabled;
    }
  }
};
</script>
