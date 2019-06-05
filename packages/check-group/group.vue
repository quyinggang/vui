<template>
  <div class="el-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElCheckboxGroup',
  provide() {
    return {
      ElCheckboxGroup: this
    };
  },
  props: {
    value: Array,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$on('checkboxChange', this.handleChange);
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
