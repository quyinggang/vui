<template>
  <label
    class="ui-checkbox"
    :class="[
      isChecked ? 'is-checked' : '',
      isDisabled ? 'is-disabled' : '',
      border ? 'is-border' : ''
    ]">
    <span
      :class="[
        'ui-checkbox__input',
        isChecked ? 'is-checked' : ''
      ]">
      <span class="ui-checkbox__inner"></span>
      <input
        v-if="!uiCheckboxGroup"
        type="checkbox"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        v-model="inputValue"
        @change.stop="handleChange"
      >
      <input
        v-else
        type="checkbox"
        :disabled="isDisabled"
        :value="label"
        v-model="inputValue"
        @change.stop="handleChange"
      >
    </span>
    <span class="ui-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'UiCheckbox',
  inject: {
    uiCheckboxGroup: {
      default: null
    }
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    trueLabel: [String, Number],
    falseLabel: [String, Number],
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
    isChecked() {
      const parent = this.uiCheckboxGroup;
      const trueLabel = this.trueLabel;
      const value = this.inputValue;
      // label属性只会在group存在时有效
      return parent
        ? Array.isArray(parent.value)
          ? parent.value.includes(this.label)
          : false
        : trueLabel
          ? value === trueLabel
          : typeof value === 'boolean' && value;
    },
    isDisabled() {
      const parent = this.uiCheckboxGroup;
      return (parent && parent.disabled) || this.disabled;
    },
    inputValue: {
      get() {
        const parent = this.uiCheckboxGroup;
        // 利用checkbox v-model为数组时，会自动去除数组中对应的checkbox value值
        return parent ? parent.value : this.value;
      },
      set(value) {
        const parent = this.uiCheckboxGroup;
        parent ? parent.$emit('input', value) : this.$emit('input', value);
      }
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        const parent = this.uiCheckboxGroup;
        const value = this.inputValue;
        parent && parent.$emit('checkboxValueChange', value);
        this.$emit('change', value);
      });
    }
  }
};
</script>
