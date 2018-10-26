<template>
  <div id="app">
    <div class="page-view">
      <router-view/>
    </div>
    <NavTab/>
  </div>
</template>

<script>
import NavTab from "@/components/NavTab";

export default {
  components: {
    NavTab
  }
};
</script>


<style lang="less">
html,
body,
#app {
  overflow: hidden;
  height: 100%;
  line-height: 1.3;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
.font-bold {
  font-family: pingfangsc-medium, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: pingfangsc-regular, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.page-view {
  overflow-y: auto;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
</style>
