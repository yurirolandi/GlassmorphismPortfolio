<template>
  <div class="portfolio-section">
    <ContainerSection>
      <div class="container">
        <div class="row">
          <h1 class="portfolio-title">{{ idioma.portfolio.title }}</h1>
        </div>
        <div class="row">
          <div
            class="portfolio-item"
            v-for="(portfolio, i) in idioma.portfolio.portfolioItems"
            :key="i"
          >
            <div class="portfolio-item__thumbnail">
              <img :src="portfolio.url" :alt="portfolio.alt" />
              <h3 class="portfolio-item__title">{{ portfolio.title }}</h3>
              <Btn
                :text="portfolio.btnText"
                @click.stop="viewProject(portfolio)"
              />
              <div class="portfolio-item__details">
                <div class="description">
                  <p>
                    {{ portfolio.text }}
                  </p>
                </div>
                <div class="general-info">
                  <ul>
                    <li v-for="(curso, i) in portfolio.item_course" :key="i">
                      {{ curso.item }} -
                      <span>{{ curso.stack }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerSection>
    <PopUp
      v-if="show"
      :imgSrc="imgSrc"
      :imgTitle="imgTitle"
      :descriptionText="descriptionText"
      :descriptionInfo="descriptionInfo"
      @closePopUp="show = false"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
import PopUp from "@/components/PopUp.vue";

export default {
  name: "Portfolio",
  components: {
    ContainerSection,
    Btn,
    PopUp,
  },
  data() {
    return {
      show: false,
      imgSrc: "",
      imgTitle: "",
      descriptionText: "",
      descriptionInfo: [],
    };
  },
  computed: {
    ...mapGetters({
      idioma: "getLanguageSelected",
    }),
  },
  methods: {
    viewProject(info) {
      this.imgSrc = info.url;
      this.imgTitle = info.title;
      this.descriptionText = info.text;
      this.descriptionInfo = info.item_course;
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.portfolio-section {
  .container {
    .row {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      .portfolio-title {
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
      .portfolio-item {
        width: calc((100% / 3) - 30px);
        margin: 0 15px 30px;
        min-width: 315.98px;
        h3 {
          font-size: 20px;
          text-transform: capitalize;
          margin: 20px 0;
        }
        &__thumbnail {
          padding: 10px;
          background: $white-alpha-25;
          border: 1px solid $white-alpha-40;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
        &__details {
          display: none;
        }
      }
    }
  }
}
</style>
