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
  render() {
    const {
      getResize,
      isFocus,
      readonly,
      disabled,
      cols,
      rows,
      placeholder,
      maxlength,
      minlength,
      inputValue
    } = this;
    const containerData = {
      class: [
        'ui-textarea',
        { 'is-focus': isFocus },
        { 'is-readonly': readonly },
        { 'is-disabled': disabled },
        `is-${getResize}`
      ]
    };
    const textareaData = {
      class: ['ui-textarea--origin', 'ui-textarea__inner'],
      attrs: {
        type: 'textarea',
        cols,
        rows,
        disabled,
        placeholder,
        maxlength,
        minlength,
        readonly
      },
      domProps: {
        value: inputValue
      },
      on: {
        input: e => {
          this.inputValue = e.target.value;
        },
        focus: this.handleFocus,
        blur: this.handleBlur
      }
    };
    return (
      <div {...containerData}>
        <textarea {...textareaData} />
      </div>
    );
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
