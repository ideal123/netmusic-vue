<template>
  <div class="switch-tab">
    <div class="tab-item active-item">个性推荐</div>
    <div class="tab-item">主播电台</div>
  </div>
</template>

<style lang="less" scoped>
.switch-tab {
  display: flex;
  margin: 0 100px;
  text-align: center;
  font-family: pingfangsc-medium;
  font-size: 38px;
  color: #ffefe1;
}
.tab-item {
  flex: 1;
  padding: 22px 0;
}
.active-item {
  position: relative;
  color: #feffff;
  &:after {
    width: 2em;
    height: 6px;
    left: 50%;
    bottom: 0;
    content: "";
    margin-left: -1em;
    border-radius: 4px;
    position: absolute;
    background: #fff;
  }
}
</style>
