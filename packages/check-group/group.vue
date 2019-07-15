<script>
export default {
  name: 'UiCheckboxGroup',
  provide() {
    return {
      uiCheckboxGroup: this
    };
  },
  props: {
    value: Array,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$on('_checkboxChange', this.handleChange);
  },
  render() {
    return <div class="ui-checkbox-group">{this.$slots.default}</div>;
  },
  methods: {
    handleChange(value) {
      this.$emit('change', value);
    }
  }
};
</script>
