<template>
  <div class="song-list">
    <div class="list-hd">
      <div class="hd-fl">
        <span class="iconfont icon-play"></span>播放全部(共39首)
      </div>
      <div class="hd-fr">
        +收藏(32423)
      </div>
    </div>
    <ul class="music-list">
      <li class="list-item hairlines" v-for="n in 10" :key="n">
        <div class="item-center">
          <div class="item-title">现在不跳舞要干嘛</div>
          <div class="item-meta">徐佳莹 - 心理学</div>
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
.music-list {
  .hairlines {
    .border-1px;
    &:first-child {
      .border-1px(top);
    }
  }
}
.list-item {
  height: 145px;
}
</style>
