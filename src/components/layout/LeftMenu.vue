<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const defaultActive = ref('')
const router = useRouter()

const menuList = [
  {
    path: '/',
    icon: 'ep-mostly-cloudy'
  },
  {
    path: '/monitoring',
    icon: 'ep-monitor'
  },
  {
    path: '/query',
    icon: 'ep-coin'
  }
]

watch(
  () => router.currentRoute.value.path,
  (path) => {
    const matchItem = menuList.find((item) => item.path === path)
    if (matchItem) {
      defaultActive.value = matchItem.path
    }
    console.log(matchItem)
  },
  {
    immediate: true
  }
)
</script>

<template>
  <el-menu router :default-active="defaultActive">
    <el-menu-item :index="item.path" v-for="item in menuList" :key="item.path">
      <template #title>
        <el-icon>
          <icon :icon="item.icon"></icon>
        </el-icon>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
  .el-menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
