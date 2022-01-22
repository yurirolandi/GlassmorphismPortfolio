<template>
  <div class="timeline">
    <div class="timeline__item" v-for="(time, i) in timeLineItems" :key="i">
      <span class="date">{{ time.line_date }}</span>
      <h4>
        {{ time.line_title }} - <span>{{ time.line_subtitle }}</span>
      </h4>
      <p>
        {{ time.line_text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  props: {
    timeLineItems: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.timeline {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 0;
    width: 1px;
    height: 100%;
    background: $primary;
    opacity: 1;
  }

  &__item {
    margin-bottom: 30px;
    position: relative;
    padding: 10px 0 0 40px;
    opacity: 1;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 16px;
      width: 11px;
      height: 11px;
      background: $primary;
      opacity: 1;
      border-radius: 50%;
    }
    &:last-child {
      margin-bottom: 0px;
    }
    .date {
      display: block;
      color: $primary;
      font-weight: 400;
      margin: 0 0 10px;
    }
    h4 {
      font-size: 18px;
      text-transform: capitalize;
      margin: 0 0 10px;
      span {
        font-weight: 400;
      }
    }
  }
}
</style>
