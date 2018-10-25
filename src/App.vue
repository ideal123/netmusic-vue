<template>
  <div id="app">
    <div class="page-view">
      <router-view/>
    </div>
    <FooterNav/>
  </div>
</template>

<script>
import FooterNav from "@/components/FooterNav";

export default {
  components: {
    FooterNav
  }
}
</script>


<style lang="less">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
ul,
ol {
  // margin: 0;
  list-style: none;
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
