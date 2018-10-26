<template>
  <div class="quick-entry">
    <ul class="entry-list">
      <li class="list-item" v-for="n in 4" :key="n">
        <div class="item-circle">
          <div class="entry-icon"></div>
        </div>
        <div class="item-title">私人FM</div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.entry-list {
  display: flex;
  justify-content: space-around;
  padding: 45px 0;
  border-bottom: 2px solid #e5e5e5;
  text-align: center;
}
.list-item {
  flex: 1;
}
.item-circle {
  width: 145px;
  height: 145px;
  margin: 0 auto;
  border-radius: 50%;
  background: #eb4a38;
}
// .entry-icon {
//   display: block;
// }
.item-title {
  margin-top: 14px;
  font-size: 34px;
}
</style>
