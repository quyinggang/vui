<template>
  <div class="ui-input-container" :class="{ 'is-compound': $slots.prepend || $slots.append}">
    <div class="ui-input__prepend">
      <slot name="prepend"></slot>
    </div>
    <div
      class="ui-input"
      :class="{
        'is-focus': isFocus,
        'is-readonly': readonly,
        'is-disabled': disabled,
        'is-prepend' : $slots.prepend,
        'is-append': $slots.append
      }"
    >
      <span class="icon--prefix">
        <i :class="prefixIcon"></i>
        <slot name="prefix"></slot>
      </span>
      <input
        class="ui-input--origin ui-input__inner"
        :type="type"
        v-model="inputValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :minlength="minlength"
        :readonly="readonly"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <span class="icon--suffix">
        <i :class="suffixIcon"></i>
        <slot name="suffix"></slot>
      </span>
    </div>
    <div class="ui-input__append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiInput',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'password'].includes(value);
      }
    },
    maxlength: Number,
    minlength: Number,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String
  },
  data() {
    return {
      isFocus: false
    };
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
  },
  watch: {
    inputValue(newVal) {
      this.handleChange(newVal);
    }
  },
  methods: {
    handleFocus(e) {
      this.isFocus = true;
      this.$emit('focus', e);
    },
    handleBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e);
    },
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
