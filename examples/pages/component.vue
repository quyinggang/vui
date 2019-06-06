<template>
  <div class="section--component">
    <ui-textarea v-model="inputValue" placeholder="请填写内容"></ui-textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '测试'
    };
  }
};
</script>

<style lang="scss" scoped>
.section--component {
  padding: 20px;
}
</style>
