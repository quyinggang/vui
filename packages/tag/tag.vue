<script>
export default {
  name: 'UiTag',
  props: {
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'success', 'info', 'warning', 'danger'].includes(value);
      }
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const { type, closeable } = this;
    return (
      <transition name="fade-out">
        <span class={['ui-tag', `is-${type}`, { 'is-closeable': closeable }]}>
          {this.$slots.default}
          {
            closeable && (
              <span class="icon--close" onClick={this.handleClose}>
                <i class="i-close"></i>
              </span>
            )
          }
        </span>
      </transition>
    );
  },
  methods: {
    handleClose(e) {
      e.stopPropagation();
      this.$emit('close');
    }
  }
};
</script>
