<template>
  <div class="fuzz-bg">
    <div class="fuzz-bg-img" :style="{ 'background-image': `url('${src}')` }"></div>
    <div class="fuzz-bg-cover"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.fuzz-bg {
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
