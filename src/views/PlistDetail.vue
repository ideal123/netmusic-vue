<template>
  <div class="plist-detail">
    <div class="pl-bg">
      <div class="pl-bg-img"></div>
      <div class="pl-bg-cover"></div>
    </div>
    <div class="pl-block">
      <TitleBar title="歌单"/>
      <div class="pl-info">
        <div class="pl-hd">
          <div class="pl-hd-fl"></div>
          <div class="pl-hd-fr">
            <div class="pl-title font-bold">我等的人 TA在多远的未来</div>
            <div class="pl-author">
              <div class="author-avatar"></div>安Vivienne <span class="iconfont icon-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SongList/>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import SongList from "@/components/SongList";

export default {
  components: {
    TitleBar,
    SongList
  }
}
</script>

<style lang="less" scoped>
.pl-bg {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 860px;
}
.pl-bg-img {
  width: 100%;
  height: 100%;
  filter: blur(40px);
  background: no-repeat 50% 50%;
  background-image: url("https://music.163.com/api/img/blur/109951163456925077?param=170y170");
  background-size: cover;
  transform: scale(1.5, 1.5);
}
.pl-bg-cover {
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
}
.pl-block {
  color: white;
}
.pl-hd {
  display: flex;
  height: 365px;
  margin: 38px;
}
.pl-hd-fl {
  overflow: hidden;
  width: 365px;
  background: gray;
  border-radius: 8px;
}
.pl-hd-fr {
  flex: 1;
  padding-left: 40px;
  .pl-title {
    margin-top: 36px;
    font-size: 46px;
  }
  .pl-author {
    margin-top: 55px;
    font-size: 36px;
    color: #ccc;
  }
  .iconfont {
    font-size: 32px;
  }
}
</style>
