import CustomInput from '../components/form/CustomInput.vue'
import CustomInputNumber from '../components/form/CustomInputNumber.vue'
import CustomSelect from '../components/form/CustomSelect.vue'
import CustomDatePicker from '../components/form/CustomDatePicker.vue'
import CustomInputPopover from '@/components/form/CustomInputPopover.vue'

export const components = [
  {
    name: 'CustomInput',
    component: CustomInput
  },
  {
    name: 'CustomInputNumber',
    component: CustomInputNumber
  },
  {
    name: 'CustomSelect',
    component: CustomSelect
  },
  {
    name: 'CustomDatePicker',
    component: CustomDatePicker
  },
  {
    name: 'CustomInputPopover',
    component: CustomInputPopover
  }
]

// component is 对于 unplugin-vue-components 按需加载没效果，需要重新注册全局组件
export default {
  install(app: any) {
    components.forEach((item) => {
      app.component(item.name, item.component)
    })
  }
}
