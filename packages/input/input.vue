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
  render() {
    const {
      isFocus,
      readonly,
      disabled,
      $slots,
      prefixIcon,
      type,
      inputValue,
      suffixIcon,
      minlength,
      maxlength,
      placeholder
    } = this;
    const inputData = {
      class: {
        'ui-input': true,
        'is-focus': isFocus,
        'is-readonly': readonly,
        'is-disabled': disabled,
        'is-prepend': $slots.prepend,
        'is-append': $slots.append
      }
    };
    const inputOriginData = {
      class: 'ui-input--origin ui-input__inner',
      attrs: {
        type,
        disabled,
        maxlength,
        minlength,
        readonly,
        placeholder
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
      <div class={['ui-input-container', { 'is-compound': $slots.prepend || $slots.append }]}>
        <div class="ui-input__prepend">{$slots.prepend}</div>
        <div {...inputData}>
          <span class="icon--prefix">
            <i class={prefixIcon}></i>
            {$slots.prefix}
          </span>
          <input {...inputOriginData} />
          <span class="icon--suffix">
            <i class={suffixIcon}></i>
            {$slots.suffix}
          </span>
        </div>
        <div class="ui-input__append">{$slots.append}</div>
      </div>
    );
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
