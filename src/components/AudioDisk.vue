<template>
  <div class="audio-disk">
    <div class="disc-needle"></div>
    <div class="audio-disc">
      <div class="disc-turn">
        <div class="disc-rollwrap">
          <div class="disc-img">
            <img :src="picUrl | httpify" class="pic-cover">
          </div>
        </div>
        <div class="disc-light"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picUrl: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.audio-disk {
  position: relative;
  height: 1200px;
}
.disc-needle {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 50%;
  width: 280px;
  height: 410px;
  margin-left: -48px;
  background: url("../assets/needle.png") no-repeat;
  background-size: contain;
}
.audio-disc {
  position: relative;
  top: 200px;
  width: 890px;
  height: 890px;
  margin: 0 auto;
}
.disc-turn {
  width: 100%;
  height: 100%;
  background: url("../assets/disc.png") no-repeat;
  background-size: contain;
}
.disc-rollwrap {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 554px;
  height: 554px;
  margin: -277px 0 0 -277px;
}
.disc-img {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
