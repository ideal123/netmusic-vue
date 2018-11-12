<template>
  <div class="plist-detail">
    <FuzzBg :src="detail.coverImgUrl"/>
    <div class="pl-block">
      <TitleBar>歌单</TitleBar>
      <div class="pl-info">
        <div class="pl-hd">
          <div class="pl-hd-fl">
            <img class="pic-cover" :src="detail.coverImgUrl">
            <div class="pl-rdme-num"><span class="iconfont icon-earphone"></span>{{ detail.playCount | fmtCnt }}</div>
          </div>
          <div class="pl-hd-fr">
            <div class="pl-title font-bold">{{ detail.name }}</div>
            <div class="pl-author" v-show="creator.nickname">
              <div class="author-avatar"><img class="pic-cover" :src="creator.avatarUrl"></div>
              <div class="author-name">{{ creator.nickname }}</div>
              <span class="iconfont icon-right"></span>
            </div>
          </div>
        </div>
        <ul class="pl-social-list">
          <li class="list-item">
            <div><span class="iconfont icon-comment"></span></div>
            <div class="item-content">{{ detail.commentCount }}</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-share"></span></div>
            <div class="item-content">{{ detail.shareCount }}</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-download2"></span></div>
            <div class="item-content">下载</div>
          </li>
          <li class="list-item">
            <div><span class="iconfont icon-checkbox"></span></div>
            <div class="item-content">多选</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="song-block">
      <div class="list-hd">
        <div class="hd-fl">
          <span class="iconfont icon-play-circle"></span>
          <span style="margin-top: -3px;">播放全部</span>
          <span class="sub-title">(共{{ detail.trackCount }}首)</span>
        </div>
        <div class="hd-fr">
          <span class="iconfont icon-add"></span>收藏({{ detail.subscribedCount }})
        </div>
      </div>
      <SongList :list="detail.tracks"/>
    </div>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import FuzzBg from "@/components/base/FuzzBg";
import SongList from "@/components/SongList";

export default {
  data() {
    return {
      detail: {},
      creator: {}
    };
  },
  components: {
    TitleBar,
    FuzzBg,
    SongList
  },
  async created() {
    const id = this.$route.params.id;
    this.$loading.show();
    let result = await this.$axios.get(`/playlist/detail?id=${id}`);
    this.$loading.hide();

    if (result.code === 200) {
      this.detail = result.playlist;
      this.creator = this.detail.creator;
    }
  }
};
</script>

<style lang="less" scoped>
.fuzz-bg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 760px;
}
.pl-block {
  color: white;
}
.pl-hd {
  display: flex;
  height: 365px;
  margin: 38px;
}
.pl-hd-fl {
  overflow: hidden;
  position: relative;
  width: 365px;
  background: gray;
  border-radius: 8px;
}
.pl-rdme-num {
  position: absolute;
  top: 8px;
  right: 20px;
  font-size: 30px;
  color: white;
  .iconfont {
    margin-right: 8px;
    font-size: 30px;
  }
}
.pl-hd-fr {
  flex: 1;
  padding-left: 40px;
  .pl-title {
    margin-top: 36px;
    font-size: 46px;
  }
  .pl-author {
    display: flex;
    align-items: center;
    margin-top: 55px;
    font-size: 36px;
    color: #ccc;
  }
  .author-avatar {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: gray;
  }
  .author-name {
    margin: 0 20px 0 16px;
  }
  .iconfont {
    margin-top: 2px;
    font-size: 32px;
  }
}
.pl-social-list {
  display: flex;
  justify-content: space-around;
  padding-bottom: 48px;
  text-align: center;
  font-size: 30px;
  .iconfont {
    font-size: 60px;
  }
}
.list-item {
  flex: 1;
}
.song-block {
  overflow: hidden;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background: white;
}
.list-hd {
  display: flex;
  height: 130px;
  line-height: 130px;
  padding-left: 26px;
  .hd-fl {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 44px;
  }
  .sub-title {
    margin-left: 10px;
    font-size: 36px;
    color: #9c9c9c;
  }
  .hd-fr {
    width: 315px;
    padding-left: 24px;
    font-size: 34px;
    color: white;
    background: #e95042;
  }
  .icon-play-circle {
    margin-right: 26px;
    font-size: 54px;
  }
  .icon-add {
    margin-right: 8px;
  }
}
</style>
