<template>
  <div class="container-section">
    <div class="container">
      <div class="row">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "container-section",
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.container-section {
  background-color: $white-alpha-25;
  border: 1px solid $white-alpha-40;
  min-height: calc(100vh - 70px);
  border-radius: 30px;
  padding: 0 40px;
  width: 100%;
  align-items: center;
  display: flex;
  .container {
    padding: 0 40px;
    width: 100%;
    .row {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
    }
  }
}
</style>
