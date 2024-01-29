import type { Theme } from 'vitepress'
import DefaultTheme from "vitepress/theme-without-fonts";
import "./custom.css"
import MyLayout from './Layout.vue'

import Badge from "@/components/Badge/index.vue";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Badge", Badge);
  },
  Layout: MyLayout,
} satisfies Theme;
