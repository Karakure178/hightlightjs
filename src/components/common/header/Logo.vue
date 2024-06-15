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
