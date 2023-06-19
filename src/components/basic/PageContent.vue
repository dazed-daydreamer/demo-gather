<script lang="ts" setup></script>

<template>
  <div class="page-content flex flex-col">
    <slot name="header"></slot>
    <slot name="toolbar"></slot>
    <div class="flex-1 flex flex-col">
      <slot name="main"></slot>
    </div>
    <slot name="dialog"></slot>
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  padding: 20px;
  height: calc(100vh - 60px);
}
</style>
