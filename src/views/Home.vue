<template>
  <div class="home">
    <div class="header-bg"></div>
    <div class="header-bar">
      <SearchBar/>
    </div>
    <SwitchTab/>
    <SwiperSlide/>
    <QuickEntry/>
    <SongList/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SwitchTab from "@/components/SwitchTab";
import SwiperSlide from "@/components/SwiperSlide";
import QuickEntry from "@/components/QuickEntry";
import SongList from "@/components/SongList";

export default {
  name: "home",
  components: {
    SearchBar,
    SwitchTab,
    SwiperSlide,
    QuickEntry,
    SongList
  }
};
</script>

<style lang="less" scoped>
@base: #d6463b;
.home {
  position: relative;
}
.header-bg {
  height: 602px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: @base;
}
.header-bar {
  padding-top: 70px;
  padding-bottom: 10px;
  text-align: center;
}
.swiper-slide {
  margin-top: 30px;
}
</style>
