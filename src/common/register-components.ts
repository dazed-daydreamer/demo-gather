export default {
  install(app: any) {
    app.component(
      'CForm',
      defineAsyncComponent(() => import('../components/form/CustomForm.vue'))
    )
    app.component(
      'CFormItem',
      defineAsyncComponent(() => import('../components/form/CustomFormItem.vue'))
    )
    app.component(
      'CInput',
      defineAsyncComponent(() => import('../components/form/CustomInput.vue'))
    )
    app.component(
      'CSelect',
      defineAsyncComponent(() => import('../components/form/CustomSelect.vue'))
    )
    app.component(
      'CDatePicker',
      defineAsyncComponent(() => import('../components/form/CustomDatePicker.vue'))
    )
    app.component(
      'BillText',
      defineAsyncComponent(() => import('../components/basic/BillText.vue'))
    )
    app.component(
      'CInputNumber',
      defineAsyncComponent(() => import('../components/form/CustomInputNumber.vue'))
    )
  }
}
