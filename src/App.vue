<template>
  <div class="main">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Header.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
