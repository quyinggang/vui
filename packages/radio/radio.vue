<template>
  <label
    class="el-radio"
    :class="[
      inputValue === label ? 'is-checked' : '',
      isDisabled ? 'is-disabled' : '',
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
        :disabled="isDisabled"
        :value="label"
        @change.stop="handleChange"
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
  inject: {
    elRadioGroup: {
      default: null
    }
  },
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
    isDisabled() {
      const parent = this.elRadioGroup;
      return (parent && parent.disabled) || this.disabled;
    },
    inputValue: {
      get() {
        const parent = this.elRadioGroup;
        return parent ? parent.value : this.value;
      },
      set(value) {
        const parent = this.elRadioGroup;
        parent ? parent.$emit('input', value) : this.$emit('input', value);
      }
    }
  },
  methods: {
    handleChange() {
      // nextTick是保证input事件改变了value值，否则value就是上一个状态下的值
      this.$nextTick(() => {
        const parent = this.elRadioGroup;
        const value = this.inputValue;
        parent && parent.$emit('radioChange', value);
        this.$emit('change', value);
      });
    }
  }
};
</script>
