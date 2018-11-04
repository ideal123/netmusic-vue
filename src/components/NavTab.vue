<template>
  <div class="footer-nav">
    <ul class="tab-list">
      <li class="list-item item-active">
        <div class="icon-wrap">
          <span class="iconfont icon-local"></span>
        </div>
        <div class="tab-title">发现</div>
      </li>
      <li class="list-item">
        <div class="icon-wrap">
          <span class="iconfont icon-video"></span>
        </div>
        <div class="tab-title">视频</div>
      </li>
      <li class="list-item">
        <div class="icon-wrap">
          <span class="iconfont icon-me"></span>
        </div>
        <div class="tab-title">我的</div>
      </li>
      <li class="list-item">
        <div class="icon-wrap">
          <span class="iconfont icon-friends"></span>
        </div>
        <div class="tab-title">朋友</div>
      </li>
      <li class="list-item">
        <div class="icon-wrap">
          <span class="iconfont icon-account"></span>
        </div>
        <div class="tab-title">账号</div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.footer-nav {
  z-index: 1011;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 128px;
  background: #ebebeb;
}
.tab-list {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
  text-align: center;
  font-size: 28px;
  color: #8b8b8b;
}
.list-item {
  flex: 1;
}
.item-active {
  color: #d15947;
}
.icon-wrap {
  height: 70px;
  .iconfont {
    font-size: 54px;
  }
}
.tab-title {
  margin-top: 4px;
}
</style>
