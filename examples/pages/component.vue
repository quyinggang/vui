<template>
  <div class="section--component">
    {{ percentage }}
    <ui-upload action="https://jsonplaceholder.typicode.com/posts/">
      <ui-button type="primary">上传</ui-button>
    </ui-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue: true,
      value: true,
      inputValue: '测试',
      tags: ['测试1', '测试2'],
      percentage: 10
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.section--component {
  padding: 20px;
}
</style>
