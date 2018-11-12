<template>
  <ul class="song-list">
    <li class="list-item hairlines" v-for="(item, index) in list" :key="item.id" @click="$router.push(`/song/${item.id}`)">
      <div class="item-left">{{ index + 1 }}</div>
      <div class="item-center">
        <div class="item-title">{{ item.name }}</div>
        <div class="item-meta">{{ item.ar | fmtArs }} - {{ item.al.name }}</div>
      </div>
      <div class="item-right">
        <span class="iconfont icon-video1" v-if="item.mv"></span>
        <span class="iconfont icon-more"></span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  }
};
</script>

<style lang="less" scoped>
@import "../styles/mixins";

.song-list {
  margin-left: 110px;
  font-size: 40px;
  .hairlines {
    .border-1px(top);
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
  color: #b1b1b1;
  .icon-video1 {
    margin-right: 35px;
    font-size: 48px;
  }
}
</style>
