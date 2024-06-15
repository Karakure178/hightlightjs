<script setup>
import { ref } from "vue";

import Link from "@/components/ui/link/Link.vue";

const props = defineProps({
  href: { type: String, required: true, default: "" },
  text: { type: String, required: true, default: "" },
});
</script>

<template>
  <section ref="target" class="explanation">
    <div class="explanation__inner">
      <h2 class="explanation__headline">コードで詰まった所など</h2>
      <p class="explanation__text">{{ props.text }}</p>
      <Link href="/" text="参考サイトはこちら" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.explanation {
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

.explanation__inner {
  @include L-XL {
    padding-top: 30px;
    max-width: 1080px;
  }

  @include S-M {
    padding-top: 15px;
  }
}

.explanation__headline {
  font-weight: 700;
  @include L-XL {
    font-size: 40px;
  }

  @include S-M {
    font-size: 24px;
  }
}

.explanation__text {
  padding-top: 20px;
  font-family: $notoSans;

  @include L-XL {
    font-size: 20px;
  }

  @include S-M {
    font-size: 16px;
  }
}
</style>
