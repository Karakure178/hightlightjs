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
