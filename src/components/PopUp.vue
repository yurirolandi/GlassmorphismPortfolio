<template>
  <div class="portfolio-popup">
    <div class="pp-inner">
      <div class="pp-content">
        <div class="pp-header">
          <Btn class="close" text="X" />
          <div class="pp-thumbnail">
            <img :src="imgSrc" alt="portfolio" />
            <h3>{{ imgTitle }}</h3>
          </div>
        </div>
        <div class="pp-body">
          <div class="description">
            <p>
              {{ descriptionText }}
            </p>
          </div>
          <div class="general-info">
            <ul>
              <li v-for="(info, i) in descriptionInfo" :key="i">
                info.title - <span>info.subtitle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    imgSrc: String,
    imgTitle: String,
    descriptionText: String,
    descriptionInfo: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.portfolio-popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  z-index: 10;
  opacity: 1;
  visibility: hidden;
  .pp-inner {
    background: red;
    min-height: 100vh;
    padding: 40px 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    .pp-content {
      background: $white-alpha-25;
      padding: 30px;
      border-radius: 30px;
      max-width: 900px;
      width: 100%;
      border: 1px solid $white-alpha-40;
      backdrop-filter: $backdrop-filter-blur;

      .pp-header {
        position: relative;
        .close {
          position: absolute;
          height: 40px;
          width: 40px;
          padding: 0;
          right: -40px;
          top: -40px;
        }

        .pp-thumbnail {
          img {
            border-radius: 10px;
          }
          h3 {
            font-size: 25px;
            text-transform: capitalize;
            margin: 20px 0;
          }
        }
      }
      .pp-body {
        .description {
          margin-bottom: 20px;
          ul {
            list-style: none;
          }
        }
        .general-info {
          ul {
            list-style: none;
            li {
              margin-bottom: 10px;
              font-weight: 500;
              text-transform: capitalize;
              span {
                font-weight: 300;
              }
            }
          }
        }
      }
    }
  }
}
</style>
