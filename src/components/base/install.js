import Vue from "vue";
import loading from "./loading";

export default function() {
  Vue.prototype.$loading = loading;
}
