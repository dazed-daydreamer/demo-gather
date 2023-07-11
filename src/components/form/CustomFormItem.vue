<script lang="ts" setup>
interface Form {
  [key: string]: any
}

const form = inject<Form>('form', () => ({}))
const formDisabled = inject<boolean>('disabled', false)

defineProps({
  span: {
    type: Number,
    default: 8
  },
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String,
    default: '80px'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  editName: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <el-col :span="span">
    <el-form-item :label="label" :label-width="labelWidth" :prop="prop">
      <component :is="editName" v-bind="$attrs" v-model="form[prop]" :disabled="disabled || formDisabled"></component>
    </el-form-item>
  </el-col>
</template>

<style lang="scss" scoped></style>
