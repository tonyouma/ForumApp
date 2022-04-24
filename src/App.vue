<template>
  <AppHead>
    <title>Forum App</title>
    <Meta name="description" content="Vue.js 3 powered Forum App" />

    <!-- Social -->
    <meta property="og:title" content="Vue.js 3 Master Class Forum" />
    <meta
      property="og:description"
      content="An Awesome Vue.js 3 powered forum!"
    />
    <meta
      property="og:image"
      content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg"
    />

    <!-- Twitter -->
    <meta name="twitter:title" content="Vue.js 3 Master Class Forum" />
    <meta
      name="twitter:description"
      content="An Awesome Vue.js 3 powered forum!"
    />
    <meta
      name="twitter:image"
      content="https://vueschool.io/media/f007f6057444d9a7f567163391d2b366/vuejs-3-master-class-not-transparent.jpg"
    />
    <meta name="twitter:card" content="summary_large_image" />
  </AppHead>
  <the-navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
export default {
  name: "App",
  components: {
    TheNavbar,
  },
};
</script>

<style>
@import "assets/styles.css";
</style>
