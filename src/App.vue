<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from "components/m-header/index";
import Tab from "components/tab/index"
export default {
  name: "App",
  components: {
    MHeader,
    Tab
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
import "~common/stylus/variable"
import "~common/stylus/base"
 #app
    color: $color-theme;
</style>
