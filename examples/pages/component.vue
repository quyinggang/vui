<template>
  <div>
    <el-radio-group v-model="radio">
      <el-radio-button :label="1">测试1</el-radio-button>
      <el-radio-button :label="2" disabled>测试2</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 1
    };
  }
};
</script>
