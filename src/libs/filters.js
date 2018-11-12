// 收藏量数字
export function fmtCnt(val) {
  if (!val) {
    return "";
  }
  if (val < 10000) {
    return val.toFixed(0);
  }
  return (val / 10000).toFixed(1) + "万";
}

// 歌手名字组合
export function fmtArs(ars) {
  return ars.map(ar => ar.name).join("&");
}

// 歌曲图片
export function fmtPic(obj, key = "al") {
  if (!obj) {
    return;
  }
  return obj[key].picUrl;
}
