import CustomInput from '../components/form/CustomInput.vue'
import CustomInputNumber from '../components/form/CustomInputNumber.vue'
import CustomSelect from '../components/form/CustomSelect.vue'
import CustomDatePicker from '../components/form/CustomDatePicker.vue'

// component is 对于 unplugin-vue-components 按需加载没效果，需要重新注册全局组件
export default {
  install(app: any) {
    app.component('CustomInput', CustomInput)
    app.component('CustomSelect', CustomSelect)
    app.component('CustomDatePicker', CustomDatePicker)
    app.component('CustomInputNumber', CustomInputNumber)
  }
}
