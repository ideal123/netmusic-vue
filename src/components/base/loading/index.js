import Vue from "vue/dist/vue.common.js";
import loadingModal from "./loading";

function newInstance() {
  const div = document.createElement("div");
  div.innerHTML = "<loading-modal></loading-modal>";
  document.body.appendChild(div);

  const loading = new Vue({
    el: div,
    components: { loadingModal }
  }).$children[0];

  return {
    update(visible) {
      loading.visible = visible;
    }
  };
}

let instance = undefined;

export default {
  show() {
    instance = newInstance();
    instance.update(true);
  },
  hide() {
    instance = instance || newInstance();
    instance.update(false);
  }
};
