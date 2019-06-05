<template>
  <div>
    <el-checkbox-group v-model="radio">
      <el-checkbox-button label="上海">上海</el-checkbox-button>
      <el-checkbox-button label="北京">北京</el-checkbox-button>
      <el-checkbox-button label="天津">天津</el-checkbox-button>
      <el-checkbox-button label="青岛">青岛</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: ['上海']
    };
  }
};
</script>
