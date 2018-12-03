<template>
  <div class="title-bar">
    <span class="iconfont icon-left" @click="$router.go(-1)"></span>
    <span class="title-content"><slot></slot></span>
    <span class="iconfont icon-audio"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "标题",
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.title-bar {
  display: flex;
  align-items: center;
  height: 120px;
  padding: 0 45px;
  text-align: center;
  color: white;
  .title-content {
    flex: 1;
    font-size: 46px;
  }
  .iconfont {
    font-size: 68px;
  }
  .icon-left {
    font-size: 64px;
  }
}
</style>
