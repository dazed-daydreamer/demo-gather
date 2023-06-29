import { defineStore } from 'pinia'

interface MapState {
  [key: string]: any[]
}

export const useMapStore = defineStore('map', {
  state: (): MapState => ({
    usbale: [
      {
        itemName: '是',
        itemValue: '1'
      },
      {
        itemName: '否',
        itemValue: '0'
      }
    ],
    way: [
      {
        itemName: '样式一',
        itemValue: '1'
      },
      {
        itemName: '样式二',
        itemValue: '0'
      }
    ]
  })
})
