<template>
  <label
    class="el-checkbox"
    :class="[
      isChecked ? 'is-checked' : '',
      isDisabled ? 'is-disabled' : '',
      border ? 'is-border' : ''
    ]">
    <span
      :class="[
        'el-checkbox__input',
        isChecked ? 'is-checked' : ''
      ]">
      <span class="el-checkbox__inner"></span>
      <input
        v-if="!ElCheckboxGroup"
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
    <span class="el-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElCheckbox',
  inject: {
    ElCheckboxGroup: {
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
      const parent = this.ElCheckboxGroup;
      const trueLabel = this.trueLabel;
      const value = this.inputValue;
      return parent
        ? Array.isArray(parent.value)
          ? parent.value.includes(this.label)
          : false
        : trueLabel
          ? value === trueLabel
          : typeof value === 'boolean' && value;
    },
    isDisabled() {
      const parent = this.ElCheckboxGroup;
      return (parent && parent.disabled) || this.disabled;
    },
    inputValue: {
      get() {
        const parent = this.ElCheckboxGroup;
        // 利用checkbox v-model为数组时，会自动去除数组中对应的checkbox value值
        return parent ? parent.value : this.value;
      },
      set(value) {
        const parent = this.ElCheckboxGroup;
        parent ? parent.$emit('input', value) : this.$emit('input', value);
      }
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        const parent = this.ElCheckboxGroup;
        const value = this.inputValue;
        parent && parent.$emit('checkboxChange', value);
        this.$emit('change', value);
      });
    }
  }
};
</script>
