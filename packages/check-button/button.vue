<script>
export default {
  name: 'UiCheckboxButton',
  inject: {
    uiCheckboxGroup: {
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
      const parent = this.uiCheckboxGroup;
      return parent ? parent.disabled : this.disabled;
    }
  },
  render() {
    const data = {
      'class': ['ui-checkbox-button'],
      props: {
        label: this.label,
        disabled: this.isDisabled
      }
    };
    return <ui-checkbox {...data}>{this.$slots.default}</ui-checkbox>;
  }
};
</script>
