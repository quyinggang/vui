<template>
  <main class="main">
    <header class="header">
      <div class="nav--left">
        <img />
        VUI
      </div>
      <div class="nav--right">
        <el-button type="text">组件</el-button>
      </div>
    </header>
    <article>
      <router-view></router-view>
    </article>
  </main>
</template>

<style lang="scss" scoped>
.main {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid #d3dce6;
  }
}
</style>
