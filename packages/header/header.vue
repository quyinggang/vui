<script>
export default {
  name: 'UiHeader',
  props: {
    height: {
      type: String,
      default: '60px'
    },
    align: {
      type: String,
      default: 'center',
      validator: function(value) {
        return ['center', 'left', 'right'].includes(value);
      }
    }
  },
  render() {
    const data = {
      class: ['ui-header', `is-${this.align}`],
      style: { height: this.height }
    };
    return <header {...data}>{this.$slots.default}</header>;
  }
};
</script>
