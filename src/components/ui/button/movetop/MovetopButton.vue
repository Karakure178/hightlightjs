<script setup>
import MoveTo from "moveto";
import { onMounted } from "vue";

const classList = defineProps({
  href: {
    type: String,
    default: "",
  },
});

const movetoClick = () => {
  const moveTo = new MoveTo();
  const target = document.querySelector(classList.href);
  moveTo.move(target);
};

onMounted(() => {
  // intersection observerを使ってボタンの表示を切り替える
  const target = document.querySelector("#articles");
  const options = {
    rootMargin: "0px",
    threshold: 0,
  };
  const callback = (entries, observer) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting) {
      // 画面に入った時の処理
      //console.log("画面に入った");
      document.querySelector(".movetopButton").classList.add("is-active");
    } else {
      // 画面から出た時の処理
      //console.log("画面から出た");
      document.querySelector(".movetopButton").classList.remove("is-active");
    }
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
});

// @click.stop.preventでaタグのデフォルトの挙動をキャンセル
// 参考:https://dezanari.com/vue-a-click-stop/
</script>
<template>
  <a
    class="movetopButton"
    :href="classList.href"
    @click.stop.prevent="movetoClick"
  >
    <img src="@/assets/image/common/icon/arrow.svg" alt="movetop" />
  </a>
</template>

<style lang="scss" scoped>
@use "../../../../assets/scss/configs/index" as *;

.movetopButton {
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  visibility: hidden;
  background-color: $whiteColor;
  border: 2px solid $blackColor;
  border-radius: 8px;
  opacity: 0;
  transition:
    opacity 0.3s ease-out,
    visibility 0.3s ease-out 0s;

  @include L-XL {
    right: 100px;
    bottom: 150px;
  }

  @include S-M {
    right: 20px;
    bottom: 100px;
  }

  &.is-active {
    visibility: visible;
    opacity: 1;
  }

  img {
    width: 80%;
    height: auto;
  }

  @include hover-and-active {
    background-color: $blackColor;

    img {
      filter: invert(100%);
    }
  }
}
</style>
