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
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const inputValue = ref('')

const clickClean = () => {
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('change', '')
}
</script>

<template>
  <el-input v-bind="$attrs" :disabled="disabled" readonly>
    <template #suffix>
      <el-icon :size="14" class="cursor-pointer" @click.stop="clickClean" v-if="inputValue">
        <i-ep-circle-close></i-ep-circle-close>
      </el-icon>
    </template>
  </el-input>
</template>

<style lang="scss" scoped></style>
