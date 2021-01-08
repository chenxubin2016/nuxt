<template>
  <div>
    <cm-header />
    <nuxt />
    <cmFooter/>
  </div>
</template>
<script>
import cmHeader from "@/components/cmHeader";
import cmFooter from "@/components/cmFooter";
export default {
  name:'default-layout',
  components: { cmHeader, cmFooter }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  min-height: calc(100vh - 100px - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
<style lang="scss" scoped>
.footer {
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  @include flex;
  height: 100px;
  background-color: #e7e7e7;
  > a {
    flex: 1;
    @include flex(center);
    height: 100%;
  }
}
</style>
