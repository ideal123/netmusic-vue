<template>
  <div class="playlist">
    <TitleBar title="歌单"/>
    playlist
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";

export default {
  components: {
    TitleBar
  }
}
</script>

<style lang="less" scoped>
.playlist {
  background: rgba(0, 0, 0, 0.5);
}
</style>
