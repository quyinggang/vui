<script>
export default {
  name: 'UiSwitch',
  props: {
    value: [String, Number, Boolean],
    activeColor: {
      type: String,
      default: '#409EFF'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: true
    },
    inactiveValue: {
      type: [String, Number, Boolean],
      default: false
    },
    activeText: String,
    inactiveText: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isActive() {
      return this.value === this.activeValue;
    },
    getStyle() {
      const color = this.isActive ? this.activeColor : this.inactiveColor;
      return {
        backgroundColor: color,
        borderColor: color
      };
    }
  },
  render() {
    const {
      isActive,
      getStyle,
      activeText,
      inactiveText,
      disabled
    } = this;
    return (
      <div class={['ui-switch', isActive ? 'is-active' : 'is-inactive', { 'is-disabled': disabled }]}>
        <span
          class="ui-switch__container"
          onClick={this.handleSwitchChange}
          style={getStyle}
        >
          <span class="ui-switch__bar"></span>
        </span>
        <transition name="slide" mode="out-in">
          <span key={isActive ? 'active' : 'inactive'} class="ui-switch__text">
            {isActive ? activeText : inactiveText}
          </span>
        </transition>
      </div>
    );
  },
  methods: {
    handleSwitchChange(e) {
      e.stopPropagation();
      if (this.disabled) return;
      const activeValue = this.activeValue;
      const inactiveValue = this.inactiveValue;
      const value = this.value === activeValue ? inactiveValue : activeValue;
      this.$emit('input', value);
      this.$emit('change', value);
    }
  }
};
</script>
