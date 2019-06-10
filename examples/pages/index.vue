<template>
  <div class="section--homepage">
    <h1 class="h1">VUI</h1>
    <p>个人级别的基于Vue 2.0的UI库，主要用于学习构建相关知识点。</p>
    <section class="action">
      <ui-button>开始使用</ui-button>
      <ui-button @click="handleRouteChange">
        Github
      </ui-button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handleRouteChange() {
      window.open('https://github.com/quyinggang/vui');
    }
  }
};
</script>

<style lang="scss" scoped>
.section--homepage {
  text-align: center;
  .h1 {
    font-size: 2em;
  }
  .action {
    margin-top: 2em;
  }
}
</style>
