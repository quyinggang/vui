<template>
  <div class="ui-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiButtonGroup',
  provide() {
    return {
      uiButtonGroup: this
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
