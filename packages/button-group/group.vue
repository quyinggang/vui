<script>
export default {
  name: 'UiButtonGroup',
  provide() {
    return {
      uiButtonGroup: this
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  render() {
    return <div class="ui-button-group">{this.$slots.default}</div>;
  }
};
</script>
