<script setup>
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import { onMounted, ref, watch, nextTick } from "vue";
const target = ref(null);
onMounted(() => {
  nextTick(() => {
    hljs.highlightBlock(target.value);
  });
});
</script>

<template>
  <section ref="target" class="code">
    <div class="code__init">
      <div></div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
