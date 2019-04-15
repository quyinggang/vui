<template>
  <button :class="getClasses">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    getClasses () {
      const type = this.type;
      const size = this.size;
      return [
        'el-button',
        type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : ''
      ];
    }
  },
  methods: {
    handleClick () {
      this.$emit('click');
    }
  }
};
</script>
