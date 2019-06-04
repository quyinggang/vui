<template>
  <label
    :class="[
      'el-radio',
      inputValue === label ? 'is-checked' : '',
      disabled ? 'is-disabled' : '',
      border ? 'is-border' : ''
    ]">
    <span
      :class="[
        'el-radio__input',
        inputValue === label ? 'is-checked' : ''
      ]">
      <span class="el-radio__inner"></span>
      <input
        type="radio"
        v-model="inputValue"
        :disabled="disabled"
        :value="label"
      >
    </span>
    <span class="el-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElRadio',
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
};
</script>
