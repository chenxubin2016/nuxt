// nuxtServerInit只能写在store/index.js
// 仅在服务端执行
// 初始化登录状态
export const actions = {
  nuxtServerInit ({ commit }, { app }) {
    // nuxt-universal-cookie用法
    // app是server实例 也就是koa实例
    const token = app.$cookies.get('token')
    if (token) {
      console.log('nuxtServerInit:token:' + token)
      commit('user/init', token)
    }
  }
}