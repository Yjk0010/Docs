import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.css"
import MyLayout from './Layout.vue'

import Badge from "@/components/Badge/index.vue";
import TypeText from "@/components/TypeText/index.vue";
import PicViewer from "@/components/PicViewer/index.vue";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Badge", Badge);
    app.component("TText", TypeText);
    app.component("PicViewer", PicViewer);
  },
  Layout: MyLayout,
} satisfies Theme;
