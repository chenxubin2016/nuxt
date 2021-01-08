// 插件参数
// 参数1上下文context
// 参数2注入函数
export default ({ $axios }, inject) => {
  // 将来在nuxt中会存在this.$login这个函数
  inject('login', user => {
    return $axios.$post('/api/login', user)
  })
}