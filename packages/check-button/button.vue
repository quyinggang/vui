<template>
  <ui-checkbox class="ui-checkbox-button" :label="label" :disabled="isDisabled">
    <slot></slot>
  </ui-checkbox>
</template>

<script>
export default {
  name: 'UiCheckboxButton',
  inject: {
    uiCheckboxGroup: {
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
      const parent = this.uiCheckboxGroup;
      return parent ? parent.disabled : this.disabled;
    }
  }
};
</script>
