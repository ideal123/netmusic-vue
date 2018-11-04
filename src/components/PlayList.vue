<template>
  <div class="play-list">
    <div class="list-title font-bold">
      <span>推荐歌单<span class="iconfont icon-right"></span></span>
    </div>
    <ul class="block-list">
      <li class="list-item" v-for="item in lists" :key="item.id" @click="$router.push(`/playlist/${item.id}`)">
        <div class="item-wrap">
          <img class="pic-cover" :src="item.picUrl">
        </div>
        <div class="item-title">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pl: {
      type: Array
    },
    limit: {
      default: 100,
      type: Number
    }
  },
  computed: {
    lists() {
      if (!this.pl) {
        return null;
      }
      return this.pl.slice(0, this.limit);
    }
  }
}
</script>


<style lang="less" scoped>
.list-title {
  margin: 50px 18px 38px;
  .iconfont {
    font-size: 36px;
  }
}
.block-list {
  overflow: hidden;
  width: 1050px;
  margin: 0 auto;
  font-size: 32px;
}
.list-item {
  float: left;
  width: 350px;
  height: 486px;
  padding: 0 4px;
}
.item-wrap {
  background: #d5d5d5;
  height: 350px;
  border-radius: 12px;
}
.item-title {
  margin: 10px;
}
</style>
