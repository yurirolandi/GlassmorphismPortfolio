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
            v-for="(portfolio, i) in portfolioItems"
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
import image1 from "../../guia/img/portfolio/1.jpg";
import image2 from "../../guia/img/portfolio/2.jpg";
import image3 from "../../guia/img/portfolio/3.jpg";
import image4 from "../../guia/img/portfolio/4.jpg";
import image5 from "../../guia/img/portfolio/5.jpg";
import image6 from "../../guia/img/portfolio/6.jpg";
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
      portfolioItems: [
        {
          url: image1,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
        {
          url: image2,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
        {
          url: image3,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
        {
          url: image4,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
        {
          url: image5,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
        {
          url: image6,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course: [
            {
              item: "created",
              stack: "4 dec 2020",
            },
            {
              item: "technologies used",
              stack: "Html, css",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "Role",
              stack: "Frontend",
            },
            {
              item: "View Online",
              stack: "www.domain.com",
            },
          ],
        },
      ],
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
