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
