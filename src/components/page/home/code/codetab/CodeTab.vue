<script setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";

const props = defineProps({
  tabs: { type: Array, required: true },
});
console.log(props.tabs[0].category);
</script>

<template>
  <TabsRoot class="tab" default-value="tab1">
    <TabsList class="tab__list" aria-label="コンポーネントにおけるコードの紹介">
      <template v-for="(item, index) of props.tabs" :key="`tab${index + 1}`">
        <TabsTrigger class="tab__trigger" :value="`tab${index + 1}`">
          {{ item.file }}
        </TabsTrigger>
      </template>
    </TabsList>
    <template v-for="(item, index) of props.tabs" :key="`tab${index + 1}`">
      <TabsContent class="tab__content" :value="`tab${index + 1}`">
        <!-- <highlightjs :language="props.category" :code="item.code" /> -->
        <highlightjs language="javascript" :code="item.code" />
      </TabsContent>
    </template>
  </TabsRoot>
</template>

<style lang="scss" scoped>
.tab {
  max-width: 1080px;
  border-radius: 5px;
}

.tab__list {
  display: flex;
}

.tab__trigger {
  padding: 10px 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  background-color: #f8f8f8;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f0f0f0;
  }

  &[data-state="active"] {
    background-color: #e8e8e8;
  }
}

.tab__content {
  padding: 20px;
  background-color: #e8e8e8;
  min-height: 400px;
}
</style>
