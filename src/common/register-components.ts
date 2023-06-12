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
  }
}
