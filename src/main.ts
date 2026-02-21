import "./assets/css/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from "vue-i18n";
import { i18nConfigs } from "./plugins/i18n";
import ui from "@nuxt/ui/vue-plugin";

import App from "./App.vue";

const i18n = createI18n(i18nConfigs);

const app = createApp(App);

app.use(
  createRouter({
    routes: [{ path: "/", component: () => import("./pages/index.vue") }],
    history: createWebHistory(),
  }),
);

app.use(i18n);
app.use(ui);

app.mount("#app");
