<script lang="ts" setup>
defineProps({
  moduleValue: {
    type: String || Number,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: '请选择'
  },
  dialogTitle: {
    type: String,
    default: '弹窗标题'
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const inputValue = ref('')
const dialogVisible = ref(false)

const clickClean = () => {
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('change', '')
}

const clickDialogClose = () => {
  dialogVisible.value = false
}

const clickDialogOpen = () => {
  dialogVisible.value = true
}
</script>

<template>
  <el-input v-bind="$attrs" :disabled="disabled" readonly @click.stop="clickDialogOpen">
    <template #suffix>
      <el-icon :size="14" class="cursor-pointer" @click.stop="clickClean" v-if="inputValue">
        <i-ep-circle-close></i-ep-circle-close>
      </el-icon>
    </template>
  </el-input>

  <el-dialog v-model="dialogVisible" :title="dialogTitle" width="70%" :before-close="clickDialogClose" append-to-body>
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
