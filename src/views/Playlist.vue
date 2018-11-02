<template>
  <div class="SongList">
    <div class="pl-block-bg"></div>
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
.pl-block-bg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1000px;
  // transform: scale(1.5);
  filter: blur(20px);
  background: no-repeat 50% 50%;
  background-image: url("https://p3.music.126.net/3nj-LWfggRK877XExn-6Ug==/109951163626675255.jpg?param=170y170");
  background-size: cover;
  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
  }
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
