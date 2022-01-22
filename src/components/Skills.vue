<template>
  <div class="skills">
    <div class="skills-item" v-for="(skill, i) in skillItems" :key="i">
      {{ skill }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    skillItems: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.skills {
  display: flex;
  flex-wrap: wrap;
  &-item {
    background: $white-alpha-25;
    border: 1px solid $white-alpha-40;
    padding: 5px 15px;
    text-transform: capitalize;
    margin: 0 10px 10px 0;
    border-radius: 20px;
  }
}
</style>
