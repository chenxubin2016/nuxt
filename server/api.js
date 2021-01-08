const Koa = require('koa'),
  app = new Koa(),
  bodyparser = require('koa-bodyparser'),
  router = require('koa-router')({ prefix: '/api' })
app.keys = ['some secret', 'another']
const goods = [
  { id: 1, text: "Web全栈架构师", price: 1000 },
  { id: 2, text: "Python架构师", price: 1000 }
];
// 测试路由
router.get('/',ctx=>{
  ctx.body={
    name:'success'
  }
})
// 配置路由
// 获取产品列表
router.get("/goods", ctx => {
  ctx.body = {
    ok: 1,
    goods
  };
});

// 产品详情
router.get("/detail", ctx => {
  ctx.body = {
    ok: 1,
    data: goods.find(good => good.id == ctx.query.id)
  };
});

// 登录
router.post("/login", ctx => {
  const user = ctx.request.body;
  if (user.username === "jerry" && user.password === "123") {
    // 将token存入cookie
    const token = 'a mock token';
    ctx.cookies.set('token', token);
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
});
// 解析post数据并注册路由
app.use(bodyparser());
// 注册路由
app.use(router.routes());

app.listen(8080, () => {
  console.log('http://localhost:8080')
})