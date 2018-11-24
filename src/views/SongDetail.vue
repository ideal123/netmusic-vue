<template>
  <div class="song-detail">
    <FuzzBg :src="detail.al | fmtPic" />
    <TitleBar>
      <div class="song-name">{{ detail.name }}</div>
      <div class="song-auth">{{ detail.ar | fmtArs }}<span class="iconfont icon-right"></span></div>
    </TitleBar>
    <AudioDisk :picUrl="detail.al | fmtPic"/>
    <AudioPlayer></AudioPlayer>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import FuzzBg from "@/components/base/FuzzBg";
import AudioDisk from "@/components/AudioDisk";
import AudioPlayer from "@/components/AudioPlayer";

export default {
  data() {
    return {
      detail: {}
    };
  },
  components: {
    TitleBar,
    FuzzBg,
    AudioDisk,
    AudioPlayer
  },
  async created() {
    const id = this.$route.params.id;
    this.$loading.show();
    let result = await this.$axios.get(`/song/detail?ids=${id}`);
    this.$loading.hide();

    if (result.code === 200) {
      this.detail = result.songs[0];
      // this.creator = this.detail.creator;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/mixins";

.song-detail {
  z-index: 1012;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
.song-name {
  font-size: 40px;
}
.song-auth {
  margin-right: -26px;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.6);
  .iconfont {
    font-size: 26px;
  }
}
.fuzz-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.audio-disk {
  .border-1px(top, #ccc);
}
</style>
