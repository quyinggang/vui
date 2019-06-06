<template>
  <header class="ui-header" :class="['is-' + align]" :style="{height: height}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'UiHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    },
    align: {
      type: String,
      default: 'center',
      validator: function(value) {
        return ['center', 'left', 'right'].includes(value);
      }
    }
  }
};
</script>
