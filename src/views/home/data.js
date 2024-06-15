export const headData = {
  title: "Karakure178 | Test",
  description: "highlight.jsのテスト用サイト",
  keywords: "highlight.js, ハイライト, テスト, サンプル, サイト",
  font: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Noto+Sans+JP:wght@400;500;700&family=Roboto+Mono:wght@500&display=swap",
};

export const mainData = {
  code: {
    headline: "コードのハイライト",
    tabs: [
      {
        value: "tab1",
        category: "vue",
        file: "Header.vue",
        code: `
<script setup>
import Hamburger from "./Hamburger.vue";
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
</script>

<template>
  <header id="header" class="header">
    <div class="header__inner">
      <Logo />
      <Hamburger />
      <Navigation />
    </div>
  </header>
</template>

<style lang="scss" scoped>
// ===========================================
// header 全体設定
// ===========================================
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  background-color: $blackColor;

  @include L-XL {
    height: 86px;
  }

  @include S-M {
    height: 48px;
  }
}

.header__inner {
  position: relative;
  height: 100%;

  @include L-XL {
    max-width: 1280px;
    padding-right: 90px;
    padding-left: 90px;
    margin-right: auto;
    margin-left: auto;
  }

  @include S-M {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
        `,
      },
      {
        category: "vue",
        file: "Hamburger.vue",
        code: `
<script setup>
import { useMediaQuery } from "@vueuse/core";
import { ref, watch } from "vue";

import { useHamburgerStore } from "../../../stores/isOpen";

let isOpen = ref(false);
const store = useHamburgerStore();

// resize処理
const mediaQuery = useMediaQuery("(min-width: 769px)");
watch(
  () => mediaQuery.value,
  () => {
    store.toggleOff();
    // console.log("値が変わった!!!");
  }
);
</script>

<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--active': store.isOpen }"
    @click="store.toggleIsOpen"
  ></button>
</template>

<style lang="scss" scoped>
// ===========================================
// ハンバーガーボタン設定
// ===========================================

.hamburger {
  @include L-XL {
    display: none;
  }

  @include S-M {
    position: absolute;
    right: 10px;
    z-index: 100;
    display: flex;
    justify-content: center;
    width: 50px;
    height: 100%;

    &::before,
    &::after {
      position: absolute;
      display: block;
      width: 30px;
      height: 4px;
      content: "";
      background-color: white;
      transition:
        top 0.3s $ease-out,
        transform 0.3s $ease-out;
    }

    &::before {
      top: 30%;
    }

    &::after {
      bottom: 30%;
    }
  }

  &.hamburger--active {
    &::before {
      top: 50%;
      transform: rotate(45deg);
    }

    &::after {
      top: 50%;
      transform: rotate(-45deg);
    }
  }
}
</style>
        `,
      },
      {
        category: "vue",
        file: "Logo.vue",
        code: `
<script>
import { ref, defineComponent } from "vue";

import { headerData } from "./data.js";

const items = ref(headerData.navigationList);
//https://zenn.dev/misaka/articles/e64617b671edf6

export default defineComponent({
  setup() {},
  data() {
    return {
      items: headerData,
    };
  },
});
</script>

<template>
  <div class="header__logo">
    <img :src="items.logoUrl" alt="178 logo" />
  </div>
</template>

<style lang="scss" scoped>
// ===========================================
// ロゴ設定
// ===========================================
.header__logo {
  position: absolute;
  top: 50%;
  border: 1px solid #fff;
  border-radius: 5px;
  transform: translateY(-50%);

  @include L-XL {
    width: 60px;
  }

  @include S-M {
    width: 29px;
  }

  img {
    width: 100%;
  }
}
</style>
        `,
      },
      {
        category: "vue",
        file: "Navigation.vue",
        code: `
<script setup>
import { ref } from "vue";

import { useHamburgerStore } from "../../../stores/isOpen";

import { headerData } from "./data.js";

const items = ref(headerData.navigationList);
const store = useHamburgerStore();
</script>

<template>
  <nav
    class="headerNavigation"
    :class="{
      'headerNavigation--active': store.isOpen,
      animation__opacity: store.isOpen,
    }"
  >
    <ul class="headerNavigation__list">
      <li v-for="item in items" :key="item.id" class="headerNavigation__item">
        <a class="headerNavigation__link" :href="item.link">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
// ===========================================
// nav 全体設定
// ===========================================
.headerNavigation {
  @include L-XL {
    height: 100%;
  }

  @include S-M {
    position: absolute;
    top: 48px; // header height
    left: 0;
    z-index: 10;
    display: none;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    visibility: hidden;
    background-color: $baseColor;
    opacity: 0;
  }

  &.headerNavigation--active {
    overflow: scroll; // アンカーリンク多かった時にスクロールできるよう対策

    @include S-M {
      position: fixed;
      display: block;
      visibility: visible;
      opacity: 1;
    }
  }
}

.headerNavigation__list {
  @include L-XL {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }

  @include S-M {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-right: map(100vw, 375, 769, 40, 180);
    margin-left: map(100vw, 375, 769, 40, 180);
  }
}

.headerNavigation__item {
  &:not(:first-child) {
    @include L-XL {
      padding-left: map(100vw, 769, 1920, 30, 45);
    }

    @include S-M {
      padding-top: 20px;
    }
  }

  &:first-child {
    @include S-M {
      padding-top: 40px; //
      border-top: 1px $whiteColor solid;
    }
  }

  // TODO ランドスケープか否かで処理を分けたい。隠れる。
  &:last-child {
    @include S-M {
      padding-bottom: 40px;
      border-bottom: 1px $whiteColor solid;
    }
  }
}

.headerNavigation__link {
  display: block;
  font-family: $roboto;
  color: white;

  @include L-XL {
    letter-spacing: 0.1em;
  }

  @include MQ-BETWEEN(769, 1174) {
    font-size: 24px;
  }

  @include MQ-UP(1175) {
    font-size: 30px;
  }

  @include S-M {
    font-size: 48px;
    line-height: 1;
    text-align: center;
    text-shadow: 0 5px 10px #000;
  }

  &::before {
    position: relative;
    display: block;
    content: "";
    background-color: white;
    opacity: 0;
    transition: opacity $ease-out 0.5s;

    @include L-XL {
      bottom: -35px;
      width: 100%;
      height: 3px;
    }

    @include S-M {
      bottom: -55px;
      left: 50%;
      width: 60%;
      height: 1px;
      transform: translateX(-50%);
    }
  }

  @include hover-and-active {
    &::before {
      opacity: 1;
    }
  }
}
</style>
        `,
      },
      {
        category: "javascript",
        file: "controlHamburger.js",
        code: `
let nowScrollY = 0; // スクロール位置を保持する変数

// ===========================================
// ハンバーガーボタン開閉用 class add
// ===========================================
export const addHamburger = () => {
  const fixedBody = document.querySelector("body");
  const fixedHTML = document.querySelector("html");
  stopScroll();
  fixedBody.classList.add("fixed__body");
  fixedHTML.classList.add("fixed__html");
};

// ===========================================
// ハンバーガーボタン開閉用 class remove
// ===========================================
export const removeHamburger = (type) => {
  const navigation = document.querySelector(".headerNavigation");
  const fixedBody = document.querySelector("body");
  const fixedHTML = document.querySelector("html");

  fixedBody.classList.remove("fixed__body");
  fixedHTML.classList.remove("fixed__html");
  restartScroll();

  if (type === "resize") {
    navigation.classList.remove("animation__opacity");
  }
};

// スクロール対策
// スクロールを止める
const stopScroll = () => {
  const fixedBody = document.querySelector("body");
  nowScrollY = window.pageYOffset;
  //console.log(nowScrollY, window.scrollY);
  fixedBody.style.top = "-" + nowScrollY + "px";
};

// スクロールを再開する
const restartScroll = () => {
  const fixedBody = document.querySelector("body");
  fixedBody.style.top = "0px";
  window.scrollTo(0, nowScrollY);
};
        `,
      },
      {
        category: "javascript",
        file: "isOpen.js",
        code: `
import { defineStore } from "pinia";
import { ref } from "vue";

import {
  addHamburger,
  removeHamburger,
} from "../components/common/header/controlHamburger";

export const useHamburgerStore = defineStore("hamburger", () => {
  const isOpen = ref(false);

  /**
   * @function toggleIsOpen
   * @protected
   * @description
   * ハンバーガーボタンクリック用関数<br>
   * ボタンが押されるとトグルのようにfalseになったりtrueになったりする<br>
   * クラスの付け替えが発生する
   */
  function toggleIsOpen() {
    if (isOpen.value) {
      removeHamburger();
      isOpen.value = false;
    } else {
      //console.log("addHamburger");
      addHamburger();
      isOpen.value = true;
    }
  }

  /**
   * @function toggleOff
   * @protected
   * @description
   * マッチメディア用関数<br>
   * 強制的にメニューをオフにする<br>
   */
  function toggleOff() {
    removeHamburger("resize");
    isOpen.value = false;
  }

  return { isOpen, toggleIsOpen, toggleOff };
});

        `,
      },
    ],
  },
};
