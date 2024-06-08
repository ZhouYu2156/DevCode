// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
// import 'bootstrap/dist/css/bootstrap.min.css'
import DefaultTheme from "vitepress/theme";
import "./style.scss";
import MusicPlayer from "../theme/components/MusicPlayer.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'nav-bar-title-before': () => h(MusicPlayer),
      "nav-bar-content-after": () => h(MusicPlayer),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
