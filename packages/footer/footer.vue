<template>
  <footer :class="['el-footer', 'is' + align]" :style="{height: height}">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'ElFooter',
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
