<template>
  <main class="main">
    <el-header class="header">
      <div class="nav--left">
        <img />
        VUI
      </div>
      <div class="nav--right">
        <el-button type="text" @click="handleRouteJump">组件</el-button>
      </div>
    </el-header>
    <article>
      <router-view></router-view>
    </article>
  </main>
</template>

<script>
export default {
  methods: {
    handleRouteJump() {
      this.$router.push({ path: '/component' });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d3dce6;
  }
}
</style>
