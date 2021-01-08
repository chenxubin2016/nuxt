export default function ({ route, redirect, store }) {
  // 上下文中通过store访问vuex中的全局状态
  // 通过vuex中的令牌存在与否判断是否登录
  if (!store.getters['user/isLogin']) {
    redirect('/login?redirect=' + route.path)
  }
}