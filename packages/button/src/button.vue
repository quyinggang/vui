<template>
  <button
    :class="getClasses"
    :disabled="disabled"
    @click="handleBtnClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
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
    }
  },
  computed: {
    getClasses() {
      const type = this.type;
      const size = this.size;
      return [
        'el-button',
        type ? 'el-button--' + type : '',
        size ? 'el-button--' + size : '',
        this.round ? 'el-button--round' : '',
        this.circle ? 'el-button--circle' : ''
      ];
    }
  },
  methods: {
    handleBtnClick() {
      this.$emit('click');
    }
  }
};
</script>
