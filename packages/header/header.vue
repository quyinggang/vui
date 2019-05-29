<template>
  <header :class="['el-header', 'is-' + align]" :style="{height: height}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'ElHeader',
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
