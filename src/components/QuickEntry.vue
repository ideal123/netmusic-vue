<template>
  <div class="quick-entry hairlines">
    <ul class="entry-list">
      <li class="list-item" @click="$router.push('/fm')">
        <div class="item-circle">
          <span class="iconfont icon-radio"></span>
        </div>
        <div class="item-title">私人FM</div>
      </li>
      <li class="list-item">
        <div class="item-circle">
          <span class="iconfont icon-recommend"></span>
        </div>
        <div class="item-title">每日推荐</div>
      </li>
      <li class="list-item">
        <div class="item-circle">
          <span class="iconfont icon-songlist"></span>
        </div>
        <div class="item-title">歌单</div>
      </li>
      <li class="list-item">
        <div class="item-circle">
          <span class="iconfont icon-rank"></span>
        </div>
        <div class="item-title">排行榜</div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
@import "../styles/mixins";

.quick-entry {
  .border-1px;
}
.entry-list {
  display: flex;
  justify-content: space-around;
  padding: 45px 0;
  text-align: center;
}
.list-item {
  flex: 1;
}
.item-circle {
  width: 145px;
  height: 145px;
  margin: 0 auto;
  line-height: 145px;
  border-radius: 50%;
  background: #eb4a38;
}
.iconfont {
  font-size: 70px;
  color: #ffeefe;
}
.item-title {
  margin-top: 14px;
  font-size: 34px;
}
</style>
