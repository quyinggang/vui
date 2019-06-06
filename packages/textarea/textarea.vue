<template>
  <div
    class="ui-textarea"
    :class="[
      { 'is-focus': isFocus },
      { 'is-readonly': readonly },
      { 'is-disabled': disabled },
      'is-' + getResize
    ]"
  >
    <textarea
      class="ui-textarea--origin ui-textarea__inner"
      type="textarea"
      v-model="inputValue"
      :cols="cols"
      :rows="rows"
      :disabled="disabled"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'UiTextarea',
  props: {
    value: [String, Number],
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
    rows: Number,
    cols: Number,
    resize: {
      type: String,
      default: 'both',
      validator: (value) => {
        return ['both', 'none', 'vertical', 'horizontal'].includes(value);
      }
    }
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
    },
    getResize() {
      const rows = this.rows;
      const resize = this.resize;
      return resize !== 'both'
        ? resize
        : this.cols
          ? rows
            ? 'none'
            : 'vertical'
          : rows
            ? 'horizontal'
            : resize;
    }
  },
  watch: {
    inputValue(newVal) {
      this.handleChange(newVal);
    }
  },
  methods: {
    handleFocus() {
      this.isFocus = true;
      this.$emit('focus');
    },
    handleBlur(e) {
      this.isFocus = false;
      this.$emit('blur', e.target.value);
    },
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
