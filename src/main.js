import hljsVuePlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import scss from "highlight.js/lib/languages/scss";
import xml from "highlight.js/lib/languages/xml";
import { createPinia } from "pinia";
import "highlight.js/styles/a11y-dark.css";
import { createApp } from "vue";

import router from "./router";

import App from "@/App.vue";

import "../node_modules/destyle.css/destyle.css";

const app = createApp(App);

hljs.registerLanguage("vue", window.hljsDefineVue); // cdnで実行下記にjs,scss,xmlを登録することで正しくハイライトされる
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("xml", xml);
hljs.initHighlightingOnLoad();

app.use(createPinia());
app.use(router);
app.use(hljsVuePlugin);

app.mount("#app");
