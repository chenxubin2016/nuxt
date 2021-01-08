<template>
  <nav class="cmFooter">
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/admin">管理</nuxt-link>
    <nuxt-link to="/login" no-prefetch>购物车</nuxt-link>
  </nav>
</template>

<script>
export default {
  name:'cmFooter',
};
</script>

<style lang="scss" scoped>
.cmFooter {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  @include flex;
  height: 100px;
  background-color: #e7e7e7;
  >a{
    flex: 1;
    @include flex(center);
    height: 100%;
  }
}
</style>
