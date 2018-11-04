export function fmtCnt(val) {
  if (val < 10000) {
    return val.toFixed(0);
  }
  return (val / 10000).toFixed(1) + "万";
}
