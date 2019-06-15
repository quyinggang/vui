<script>
export default {
  name: 'UiLayout',
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator: function(value) {
        return ['vertical', 'horizontal'].includes(value);
      }
    }
  },
  render() {
    return <div class={['ui-layout', `is-${this.direction}`]}>{this.$slots.default}</div>;
  }
};
</script>
