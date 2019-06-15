<script>
export default {
  name: 'UiRadioButton',
  inject: {
    uiRadioGroup: {
      default: null
    }
  },
  props: {
    label: [String, Number, Boolean],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isDisabled() {
      const parent = this.uiRadioGroup;
      return (parent && parent.disabled) || this.disabled;
    }
  },
  render() {
    const { label, isDisabled } = this;
    const data = {
      class: ['ui-radio-button'],
      props: {
        label,
        disabled: isDisabled
      }
    };
    return <ui-radio {...data}>{this.$slots.default}</ui-radio>;
  }
};
</script>
