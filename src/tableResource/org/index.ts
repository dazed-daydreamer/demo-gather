export default {
  url: '/myx/ccs-common-web/system/common/query/org/page',
  method: 'POST',
  modelProp: {
    key: 'orgId',
    label: 'name'
  },
  requestParam: {
    usable: 2
  },
  queryItems: [
    {
      key: 'code',
      label: '机构编码'
    },
    {
      key: 'name',
      label: '机构名称'
    }
  ],
  tableColumns: [
    {
      label: '机构编码',
      prop: 'code',
      width: 100
    },
    {
      label: '机构名称',
      prop: 'name'
    },
    {
      label: '备注',
      prop: 'note'
    }
  ]
}
