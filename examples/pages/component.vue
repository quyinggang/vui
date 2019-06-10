<template>
  <div class="section--component">
    <ui-tag v-for="(item, i) in tags" :key="i" closeable @close="handleClose(i)">
      {{ item }}
    </ui-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '测试',
      tags: ['测试1', '测试2']
    };
  },
  methods: {
    handleClose(i) {
      this.tags.splice(i, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.section--component {
  padding: 20px;
}
</style>
