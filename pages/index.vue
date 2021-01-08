<template>
  <div class="container">
    <div>
      <logo />
      <h2>商品列表</h2>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <nuxt-link :to="`/detail/${good.id}`">
            <span>{{ good.text }}</span>
            <span>{{ good.price }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      goods: [
        {
          id: 1,
          text: "java",
          price: "9088"
        },
        {
          id: 2,
          text: "js",
          price: "9800"
        }
      ]
    };
  },
  async asyncData({ $axios, error }) {
    // console.log(await $axios.get("/api/"));
    // console.log(await $axios.$get("/api/goods"));
    const { ok, goods } = await $axios.$get("/api/goods");
    if (ok) {
      return {
        goods
      };
    }
    error({ statusCode: 400, message: "数据查询失败请重试~" });
  }
};
</script>

<style>


.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
