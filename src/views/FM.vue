<template>
  <div class="fm">
    <FuzzBg :src="'http://p1.music.126.net/SJaaWVbYS-y7p6DjNbm6ZA==/109951163653441372.jpg'" />
    <TitleBar>私人 FM</TitleBar>
    <div class="song-block">
      <div class="img-wrap">
        <img class="pic-cover" src="http://p1.music.126.net/SJaaWVbYS-y7p6DjNbm6ZA==/109951163653441372.jpg">
      </div>
      <div class="song-name">陌上</div>
      <div class="song-auth">七夕<span class="iconfont icon-right"></span></div>
    </div>
    <AudioPlayer></AudioPlayer>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import FuzzBg from "@/components/base/FuzzBg";
import AudioPlayer from "@/components/AudioPlayer";

export default {
  components: {
    TitleBar,
    FuzzBg,
    AudioPlayer
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
.song-block {
  margin-bottom: 160px;
  text-align: center;
  color: white;
}
.img-wrap {
  overflow: hidden;
  height: 916px;
  width: 916px;
  margin: 100px auto 80px;
  border-radius: 12px;
}
.song-name {
  font-size: 54px;
}
.song-auth {
  margin-top: 28px;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
