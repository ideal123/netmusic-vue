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
  height: 100%;
  line-height: 1.3;
  font-size: 42px;
  font-family: pingfangsc-regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #333;
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
.iconfont {
  font-size: 36px;
}

.page-view {
  min-height: 100%;
  padding-bottom: 128px;
  // background: gray;
}
.font-bold {
  font-family: pingfangsc-medium, sans-serif;
}
.pic-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
