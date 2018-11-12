<template>
  <div class="fm">
    <FuzzBg :src="'http://p1.music.126.net/SJaaWVbYS-y7p6DjNbm6ZA==/109951163653441372.jpg'" />
    <TitleBar>私人FM</TitleBar>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import FuzzBg from "@/components/base/FuzzBg";

export default {
  components: {
    FuzzBg,
    TitleBar
  }
};
</script>

<style lang="less" scoped>
.fm {
  z-index: 1012;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.fuzz-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
