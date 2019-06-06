<template>
  <label
    class="ui-radio"
    :class="{
      'is-checked': inputValue === label,
      'is-disabled': isDisabled,
      'is-border': border
    }"
  >
    <span class="ui-radio__input" :class="{ 'is-checked': inputValue === label }">
      <span class="ui-radio__inner"></span>
      <input
        class="ui-radio--origin"
        type="radio"
        v-model="inputValue"
        :disabled="isDisabled"
        :value="label"
        @change.stop="handleChange"
      >
    </span>
    <span class="ui-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'UiRadio',
  inject: {
    uiRadioGroup: {
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
      const parent = this.uiRadioGroup;
      return (parent && parent.disabled) || this.disabled;
    },
    inputValue: {
      get() {
        const parent = this.uiRadioGroup;
        return parent ? parent.value : this.value;
      },
      set(value) {
        const parent = this.uiRadioGroup;
        parent ? parent.$emit('input', value) : this.$emit('input', value);
      }
    }
  },
  methods: {
    handleChange() {
      // nextTick是保证input事件改变了value值，否则value就是上一个状态下的值
      this.$nextTick(() => {
        const parent = this.uiRadioGroup;
        const value = this.inputValue;
        parent && parent.$emit('radioValueChange', value);
        this.$emit('change', value);
      });
    }
  }
};
</script>
