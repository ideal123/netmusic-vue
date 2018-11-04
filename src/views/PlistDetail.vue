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
          <div class="pl-hd-fl">
            <div class="pl-rdme-num"><span class="iconfont icon-earphone"></span>212.2万</div>
          </div>
          <div class="pl-hd-fr">
            <div class="pl-title font-bold">我等的人 TA在多远的未来</div>
            <div class="pl-author">
              <div class="author-avatar"></div>
              <div class="author-name">我等的人</div>
              <span class="iconfont icon-right"></span>
            </div>
          </div>
        </div>
        <ul class="pl-social-list">
          <li class="list-item">
            <div><span class="iconfont icon-comment"></span></div>
            <div class="item-content">274</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-share"></span></div>
            <div class="item-content">242</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-download2"></span></div>
            <div class="item-content">下载</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-checkbox"></span></div>
            <div class="item-content">多选</div>
          </li>
        </ul>
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
  position: relative;
  width: 365px;
  background: gray;
  border-radius: 8px;
}
.pl-rdme-num {
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 30px;
  color: white;
  .iconfont {
    margin-right: 8px;
    font-size: 30px;
  }
}
.pl-hd-fr {
  flex: 1;
  padding-left: 40px;
  .pl-title {
    margin-top: 36px;
    font-size: 46px;
  }
  .pl-author {
    display: flex;
    align-items: center;
    margin-top: 55px;
    font-size: 36px;
    color: #ccc;
  }
  .author-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: gray;
  }
  .author-name {
    margin: 0 20px 0 16px;
  }
  .iconfont {
    margin-top: 2px;
    font-size: 32px;
  }
}
.pl-social-list {
  display: flex;
  justify-content: space-around;
  padding-bottom: 48px;
  text-align: center;
  font-size: 30px;
  .iconfont {
    font-size: 60px;
  }
}
.list-item {
  flex: 1;
}
</style>
