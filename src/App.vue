<script lang="ts" setup>
import LeftMenu from '@/components/basic/LeftMenu.vue'
import PageHeader from './components/basic/PageHeader.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn" size="large">
    <el-container class="h-screen">
      <el-aside width="60px">
        <left-menu></left-menu>
      </el-aside>
      <el-container>
        <el-header class="p-0">
          <page-header></page-header>
        </el-header>
        <el-main class="p-0">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped></style>
