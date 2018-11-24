<template>
  <div class="home">
    <div class="header-bg"></div>
    <div class="header-bar">
      <SearchBar/>
    </div>
    <SwitchTab/>
    <AppSwiper :banners="banners"/>
    <QuickEntry/>
    <PlayList :pl="personalized" :limit="12"/>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SwitchTab from "@/components/SwitchTab";
import AppSwiper from "@/components/AppSwiper";
import QuickEntry from "@/components/QuickEntry";
import PlayList from "@/components/PlayList";

export default {
  name: "home",
  data() {
    return {
      banners: null,
      personalized: null
    };
  },
  components: {
    SearchBar,
    SwitchTab,
    AppSwiper,
    QuickEntry,
    PlayList
  },
  async created() {
    const pArr = [this.$axios.get("/banner"), this.$axios.get("/personalized")];

    this.$loading.show();
    const results = await Promise.all(pArr);
    this.$loading.hide();

    if (results[0].code === 200) {
      this.banners = results[0].banners;
    }
    if (results[1].code === 200) {
      this.personalized = results[1].result;
    }
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
.app-swiper {
  margin-top: 30px;
}
</style>
