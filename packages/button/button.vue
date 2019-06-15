<script>
export default {
  name: 'UiButton',
  inject: {
    uiButtonGroup: {
      default: null
    }
  },
  props: {
    size: {
      type: String,
      validator: (value) => {
        return ['mini', 'small', 'medium'].includes(value);
      }
    },
    type: {
      type: String,
      validator: (value) => {
        return ['primary', 'info', 'warning', 'success', 'danger', 'text'].includes(value);
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: String
  },
  computed: {
    isDisabled() {
      const parent = this.uiButtonGroup;
      return (parent && parent.disabled) || this.disabled;
    }
  },
  render() {
    const { type, size, round, circle, isDisabled, icon } = this;
    const data = {
      class: [
        'ui-button',
        type ? 'ui-button--' + type : '',
        size ? 'ui-button--' + size : '',
        { 'is-round': round },
        { 'is-circle': circle },
        { 'is-disabled': isDisabled }
      ],
      attrs: {
        disabled: isDisabled
      },
      on: {
        click: this.handleBtnClick
      }
    };
    return <button {...data}><i class={icon}></i>{this.$slots.default}</button>;
  },
  methods: {
    handleBtnClick() {
      this.$emit('click');
    }
  }
};
</script>
