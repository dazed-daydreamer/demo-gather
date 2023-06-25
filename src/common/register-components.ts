import CustomForm from '../components/form/CustomForm.vue'
import CustomFormItem from '../components/form/CustomFormItem.vue'
import CustomInput from '../components/form/CustomInput.vue'
import CustomInputNumber from '../components/form/CustomInputNumber.vue'
import CustomSelect from '../components/form/CustomSelect.vue'
import CustomDatePicker from '../components/form/CustomDatePicker.vue'
import BillText from '../components/basic/BillText.vue'
import CustomQueryHeader from '../components/basic/CustomQueryHeader.vue'
import CustomTable from '../components/basic/CustomTable.vue'
import CustomPagination from '@/components/basic/CustomPagination.vue'
import CustomQueryPage from '@/components/basic/CustomQueryPage.vue'
import CustomToolbar from '@/components/basic/CustomToolbar.vue'
import CustomAddPage from '@/components/basic/CustomAddPage.vue'

export default {
  install(app: any) {
    app.component('CForm', CustomForm)
    app.component('CFormItem', CustomFormItem)
    app.component('CInput', CustomInput)
    app.component('CSelect', CustomSelect)
    app.component('CDatePicker', CustomDatePicker)
    app.component('BillText', BillText)
    app.component('CInputNumber', CustomInputNumber)
    app.component('CQueryHeader', CustomQueryHeader)
    app.component('CTable', CustomTable)
    app.component('CPagination', CustomPagination)
    app.component('CQueryPage', CustomQueryPage)
    app.component('CToolbar', CustomToolbar)
    app.component('CAddPage', CustomAddPage)
  }
}
