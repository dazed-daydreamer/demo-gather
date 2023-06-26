<script lang="ts" setup></script>

<template>
  <div class="custom-add-page">
    <slot name="header-bar"></slot>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer"></slot>
    <slot name="dialog"></slot>
  </div>
</template>

<style lang="scss" scoped>
.custom-add-page {
  padding: 20px;
}
</style>
