<script setup>
// テキスト量が多くなると形が崩れるアンチパターンリンクコンポーネント

const props = defineProps({
  href: { type: String, required: true, default: "" },
  text: { type: String, required: true, default: "" },
});
</script>

<template>
  <a class="link" :href="props.href">
    <span>{{ props.text }}</span>
  </a>
</template>

<style lang="scss" scoped>
.link {
  border-bottom: 1px solid #000;
  opacity: 1;
  transition: opacity 0.2s;
  display: inline-flex;
  align-items: center;

  &::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #000;
    mask-image: url("/assets/image/common/icon/arrow_outward.svg");
    mask-size: contain;
    mask-repeat: no-repeat;
  }

  @include hover-and-active {
    opacity: 0.6;
  }
}
</style>
