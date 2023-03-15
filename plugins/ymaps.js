import Vue from "vue";
import YmapPlugin from "vue-yandex-maps";

const settings = {
  apiKey:"",
  lang: "tr_TR",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
}; // plugin settings

Vue.use(YmapPlugin, settings);
