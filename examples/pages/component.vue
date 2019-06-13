<template>
  <div class="section--component">
    <ui-switch
      v-model="switchValue"
      active-text="成功"
      inactive-text="失败"
      active-color="red"
      inactive-color="black"
      @change="handleChange"
    >
    </ui-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchValue: true,
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
