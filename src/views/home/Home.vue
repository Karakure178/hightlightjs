<script setup>
import { useHead } from "unhead";
import { ref } from "vue";

import { headData, mainData } from "./data.js";

import AnkerTransition from "@/components/common/animation/ankerTransition/AnkerTransition.vue";
import Footer from "@/components/common/footer/Footer.vue";
import Header from "@/components/common/header/Header.vue";
import Code from "@/components/page/home/code/Code.vue";
import Exp from "@/components/page/home/exp/Exp.vue";

useHead({
  title: headData.title,
  meta: [{ property: "og:title", content: headData.title }],
  link: [{ rel: "stylesheet", href: headData.font }],
});

const tabs = ref(mainData.code.tabs);
console.log(tabs.value, "tabs");
</script>

<template>
  <Header />
  <main>
    <AnkerTransition />
    <Code :tabs="tabs" />
    <Exp />
  </main>
  <Footer />
</template>

<style lang="scss" scoped></style>
