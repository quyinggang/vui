<template>
  <div class="section--component">
    <ui-progress direction="horizontal" :percentage="percentage"></ui-progress>
    <ui-button @click="handleAdd">+</ui-button>
    <ui-tag closeable>测试</ui-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '测试',
      tags: ['测试1', '测试2'],
      percentage: 10
    };
  },
  methods: {
    handleAdd() {
      this.percentage += 10;
    }
  }
};
</script>

<style lang="scss" scoped>
.section--component {
  padding: 20px;
}
</style>
