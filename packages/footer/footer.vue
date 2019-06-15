<script>
export default {
  name: 'UiFooter',
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
      class: ['ui-footer', `is-${this.align}`],
      style: {
        height: this.height
      }
    };
    return <footer {...data}>{this.$slots.default}</footer>;
  }
};
</script>
