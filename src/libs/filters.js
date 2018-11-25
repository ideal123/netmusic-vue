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
  if (!ars) {
    return;
  }
  return ars.map(ar => ar.name).join("&");
}

// 歌曲图片
export function fmtPic(obj) {
  if (!obj) {
    return;
  }
  return obj.picUrl;
}

// 歌曲图片背景
export function fmtBgPic(src) {
  if (!src) {
    return null;
  }
  return { "background-image": `url('${src.replace(/^http:/, "https:")}')` };
}

// 资源https化
export function httpify(str) {
  if (!str) {
    return "";
  }
  return str.replace(/^http:/, "https:");
}
