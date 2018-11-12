<template>
  <div class="audio-player">
    <div class="progress-wrap">
      <div class="current-time">00:20</div>
      <div class="progress-bar">
        <div class="progress-cur" :style="{ width: '20%' }">
          <div class="f-btn"><i></i></div>
        </div>
      </div>
      <div class="total-time">03:00</div>
    </div>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style lang="less" scoped>
.progress-wrap {
  display: flex;
  align-items: center;
  padding: 0 38px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 28px;
}
.progress-bar {
  position: relative;
  flex: 1;
  height: 6px;
  margin: 0 35px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.6);
}
.progress-cur {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  border-radius: 3px;
  background: #c2473a;
}
.f-btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 0;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-right: -25px;
  border-radius: 50%;
  background: white;
  i {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #c2473a;
  }
}
</style>
