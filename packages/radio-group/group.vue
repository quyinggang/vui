<template>
  <div class="ui-radio-group" :class="{'is-disabled': disabled}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiRadioGroup',
  provide() {
    return {
      uiRadioGroup: this
    };
  },
  props: {
    value: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$on('radioGroup', this.handleChange);
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
