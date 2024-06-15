<script setup>
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";
</script>

<template>
  <TabsRoot class="tab" default-value="tab1">
    <TabsList class="tab__list" aria-label="vueとreactの説明">
      <TabsTrigger class="tab__trigger" value="tab1"> Vue </TabsTrigger>
      <TabsTrigger class="tab__trigger" value="tab2"> React </TabsTrigger>
    </TabsList>
    <TabsContent class="tab__content" value="tab1">
      <h3 class="tabContent__headline">Vueってな～に？</h3>
      <p class="tabContent__text">
        Vue.jsは、JavaScriptのフロントエンドフレームワークの一つで、ユーザーインターフェースを構築するために使われます。リアクティブなデータバインディングやコンポーネントベースのアーキテクチャを提供し、シンプルで柔軟な使い方が特徴です。
      </p>
    </TabsContent>
    <TabsContent class="tab__content" value="tab2">
      <h3 class="tabContent__headline">Reactってな～に？</h3>
      <p class="tabContent__text">
        Reactは、JavaScriptのライブラリであり、ユーザーインターフェースを構築するために使われます。コンポーネントベースのアーキテクチャを採用し、仮想DOMを利用して効率的にUIを更新します。SPA（Single
        Page Application）の開発や、複雑なUIの管理に向いています。
      </p>
    </TabsContent>
  </TabsRoot>
</template>

<style lang="scss" scoped>
.tab {
  max-width: 600px;
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

.tabContent__headline {
  font-size: 24px;
  font-weight: 700;
}

.tabContent__text {
  padding-top: 10px;
  font-size: 16px;
}
</style>
