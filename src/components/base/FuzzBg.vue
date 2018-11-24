<template>
  <div class="fuzz-bg">
    <div class="fuzz-bg-img" :style="styleObj"></div>
    <div class="fuzz-bg-cover"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  computed: {
    styleObj() {
      if (!this.src) {
        return null;
      }
      return { "background-image": `url('${this.src}')` };
    }
  }
};
</script>

<style lang="less" scoped>
.fuzz-bg {
  overflow: hidden;
  width: 100%;
  height: 100%;
  &-img {
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50%;
    background-size: cover;
    transform: scale(1.5, 1.5);
    filter: blur(40px);
  }
  &-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    background: black;
  }
}
</style>
