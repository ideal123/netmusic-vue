<template>
  <div class="home">
    <div class="header-bg"></div>
    <div class="header-bar">
      <SearchBar/>
    </div>
    <SwitchTab/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SwitchTab from "@/components/SwitchTab";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    SearchBar,
    SwitchTab,
    HelloWorld
  }
};
</script>

<style lang="less" scoped>
@base: #d6463b;
.home {
  position: relative;
}
.header-bg {
  height: 602px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: @base;
}
.header-bar {
  padding-top: 70px;
  padding-bottom: 10px;
  text-align: center;
}
</style>
