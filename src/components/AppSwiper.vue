<template>
  <div class="app-swiper">
    <swiper :options="options" v-if="banners">
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <div class="slide-item">
          <img class="pic-cover" :src="banner.imageUrl">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  props: {
    banners: {
      type: Array
    }
  },
  data() {
    return {
      options: {
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="less" scoped>
.app-swiper {
  height: 410px;
}
.slide-item {
  overflow: hidden;
  margin: 0 18px;
  height: 410px;
  border-radius: 12px;
  background: #fdfeff;
}
</style>

<style lang="less">
.app-swiper {
  .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      margin: 0 6px;
      background: white;
      opacity: 0.8;
    }
    .swiper-pagination-bullet-active {
      background: #d0422e;
    }
  }
}
</style>
