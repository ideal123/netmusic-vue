<template>
  <div class="song-list">
    <div class="list-title font-bold">
      <span>推荐歌单 ></span>
    </div>
    <ul class="block-list">
      <li class="list-item" v-for="n in 9" :key="n">
        <div class="item-img"></div>
        <div class="item-title">口是心非 | 请别假装你会舍不得我</div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.list-title {
  margin: 50px 18px 38px;
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
.item-img {
  background: #d5d5d5;
  height: 350px;
  border-radius: 12px;
}
.item-title {
  margin: 10px;
}
</style>
