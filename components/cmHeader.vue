<template>
  <div class="header">
    <div class="left">
      <svg-icon icon-class="Arrow-Left" class="Arrow-Left" />
    </div>
    <div class="middle">预定页面</div>
    <div class="right">
      <svg-icon icon-class="Home" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: #fff;
  @include flex;
  height: 90px;
  .left,
  .right {
    flex: 1;
    font-size: 40px;
    color: #333;
  }
  .middle {
    flex: 5;
    font-size: 32px;
  }
  > div {
    height: 100%;
    @include flex(center);
  }
}
</style>
