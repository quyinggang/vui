<template>
  <aside class="ui-aside" :style="{width: width}">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'UiAside',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
};
</script>
