<template>
  <div class="ui-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiCheckboxGroup',
  provide() {
    return {
      uiCheckboxGroup: this
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
    this.$on('checkboxValueChange', this.handleChange);
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
