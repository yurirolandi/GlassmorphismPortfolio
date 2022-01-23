<template>
  <button class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.btn {
  line-height: 1.5;
  background-color: $white-alpha-25;
  border: 1px solid $white-alpha-40;
  padding: 10px 28px;
  display: inline-block;
  border-radius: 30px;
  color: $primary;
  font-weight: 500;
  text-transform: capitalize;
  font-family: inherit;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  transition: color 0.3s ease;
  opacity: initial;
  margin: 7px 10px;
  max-width: 179.19px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background-color: $primary;
    z-index: -1;
    transition: width 0.3s ease;
    opacity: 1;
  }
  &:hover::before {
    width: 100%;
  }
  &:hover {
    color: #fff;
  }
}
</style>
