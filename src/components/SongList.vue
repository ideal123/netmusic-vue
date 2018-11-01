<template>
  <div class="song-list">
    <div class="list-hd">
      <div class="hd-fl">
        <span class="iconfont icon-play-circle"></span>
        <span style="margin-top: -3px;">播放全部</span>
        <span class="sub-title">(共39首)</span>
      </div>
      <div class="hd-fr">
        <span class="iconfont icon-add"></span>收藏(32423)
      </div>
    </div>
    <ul class="music-list">
      <li class="list-item hairlines" v-for="n in 10" :key="n">
        <div class="item-left">{{ n }}</div>
        <div class="item-center">
          <div class="item-title">现在不跳舞要干嘛</div>
          <div class="item-meta">徐佳莹 - 心里学</div>
        </div>
        <div class="item-right">
          <span class="iconfont icon-video"></span>
          <span class="iconfont icon-more"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "../styles/mixins";

.song-list {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: white;
}
.list-hd {
  display: flex;
  height: 130px;
  line-height: 130px;
  padding-left: 26px;
  .hd-fl {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 44px;
  }
  .sub-title {
    margin-left: 10px;
    font-size: 36px;
    color: #9c9c9c;
  }
  .hd-fr {
    width: 315px;
    padding-left: 24px;
    font-size: 34px;
    color: white;
    background: #e95042;
  }
  .icon-play-circle {
    margin-right: 26px;
    font-size: 54px;
  }
  .icon-add {
    margin-right: 8px;
  }
}
.music-list {
  margin-left: 110px;
  font-size: 40px;
  .hairlines {
    .border-1px;
    &:first-child {
      .border-1px(top);
    }
  }
}
.list-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 145px;
}
.item-left {
  position: absolute;
  left: -110px;
  top: 0;
  width: 110px;
  height: 145px;
  line-height: 145px;
  text-align: center;
  color: #bebebe;
}
.item-center {
  flex: 1;
  .item-meta {
    margin-top: 4px;
    font-size: 30px;
    color: #8b8b8b;
  }
}
.item-right {
  width: 190px;
  padding-right: 30px;
  text-align: right;
  color: #bfbfbf;
  .icon-video {
    margin-right: 35px;
    font-size: 48px;
  }
}
</style>
