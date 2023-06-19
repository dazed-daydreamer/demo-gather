<script lang="ts" setup></script>

<template>
  <div class="flex justify-between items-center mb-[20px]">
    <div>
      <slot name="left-slot"></slot>
    </div>
    <div>
      <slot name="right-slot"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
