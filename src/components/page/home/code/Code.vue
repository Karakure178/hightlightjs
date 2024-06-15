<script setup>
import { ref } from "vue";

import Tab from "./test/Tab.vue";
</script>

<template>
  <section ref="target" class="code">
    <div class="code__inner">
      <div class="code__container">
        <h2 class="code__headline">Code</h2>
        <Tab />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.code {
  min-height: 600px;

  @include L-XL {
    padding-top: 86px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @include S-M {
    padding-top: 48px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.code__inner {
  @include L-XL {
    padding-top: 30px;
    max-width: 1080px;
  }

  @include S-M {
    padding-top: 15px;
  }
}

.code__container {
}

.code__headline {
  font-weight: 700;
  @include L-XL {
    font-size: 40px;
  }

  @include S-M {
    font-size: 24px;
  }
}
</style>
