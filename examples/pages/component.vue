<template>
  <div class="section--component">
    <ui-progress :percentage="percentage" type="circle" :width="300"></ui-progress>
    <ui-button @click="handleAdd">+</ui-button>
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
