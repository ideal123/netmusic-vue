<template>
  <div class="fm">
    <FuzzBg :src="'http://p1.music.126.net/SJaaWVbYS-y7p6DjNbm6ZA==/109951163653441372.jpg'" />
  </div>
</template>

<script>
import FuzzBg from "@/components/base/FuzzBg";

export default {
  components: {
    FuzzBg
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
</style>
