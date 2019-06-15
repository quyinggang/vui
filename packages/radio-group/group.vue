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
  render() {
    return <div class={['ui-radio-group', { 'is-disabled': this.disabled }]}>{this.$slots.default}</div>;
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
