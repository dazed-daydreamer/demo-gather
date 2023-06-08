export default function useCommon() {
  // 获取全局属性
  function getGlobalProperties(key: string) {
    return getCurrentInstance()?.appContext.config.globalProperties[key]
  }

  return {
    getGlobalProperties
  }
}
