import hljsVuePlugin from "@highlightjs/vue-plugin";
import { createPinia } from "pinia";
import { createApp } from "vue";

import router from "./router";

import App from "@/App.vue";

import "../node_modules/destyle.css/destyle.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(hljsVuePlugin);

app.mount("#app");
