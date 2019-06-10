<template>
  <transition name="fade-out">
    <span
      class="ui-tag"
      :class="[
        'is-' + type,
        { 'is-closeable': closeable }
      ]"
    >
      <slot></slot>
      <span v-show="closeable" class="icon--close" @click="handleClose">
        x
      </span>
    </span>
  </transition>
</template>

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
  methods: {
    handleClose() {
      this.$emit('close');
    }
  }
};
</script>
