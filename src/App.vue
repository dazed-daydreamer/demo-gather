<script lang="ts" setup>
import LeftMenu from '@/components/basic/LeftMenu.vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn" size="large">
    <el-container class="h-screen">
      <el-aside width="60px">
        <LeftMenu></LeftMenu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<style scoped></style>
