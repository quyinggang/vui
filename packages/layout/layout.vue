<template>
  <div :class="['el-layout', 'is-' + direction]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElLayout',
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
