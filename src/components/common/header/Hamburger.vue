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
