<template>
  <div class="play-list">
    <div class="list-title font-bold">
      <span>推荐歌单<span class="iconfont icon-right"></span></span>
    </div>
    <ul class="block-list">
      <li class="list-item" v-for="item in lists" :key="item.id" @click="$router.push(`/playlist/${item.id}`)">
        <div class="item-wrap">
          <img class="pic-cover" :src="item.picUrl | httpify">
          <div class="item-rdme-num"><span class="iconfont icon-earphone"></span>{{ item.playCount | fmtCnt }}</div>
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
};
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
  overflow: hidden;
  position: relative;
  height: 350px;
  border-radius: 12px;
  background: #d5d5d5;
  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent);
  }
}
.item-rdme-num {
  z-index: 2;
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 28px;
  color: white;
  .iconfont {
    margin-right: 8px;
    font-size: 30px;
  }
}
.item-title {
  margin: 10px;
}
</style>
