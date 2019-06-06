<template>
  <div class="ui-layout" :class="['is-' + direction]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiLayout',
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator: function(value) {
        return ['vertical', 'horizontal'].includes(value);
      }
    }
  }
};
</script>
