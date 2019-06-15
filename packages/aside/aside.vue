<script>
export default {
  name: 'UiAside',
  props: {
    width: {
      type: String,
      default: '200px'
    }
  },
  render() {
    const data = {
      'class': ['ui-aside'],
      style: {
        width: this.width
      }
    };
    return <aside {...data}>{this.$slots.default}</aside>;
  }
};
</script>
