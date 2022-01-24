<template>
  <div class="portfolio-section">
    <ContainerSection>
      <div class="container">
        <div class="row">
          <h1 class="portfolio-title">{{ idioma.br.portfolio.title }}</h1>
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
              <Btn :text="portfolio.btnText" />
              <div class="portfolio-item__details">
                <div class="description">
                  <p>
                    {{ portfolio.text }}
                  </p>
                </div>
                <div class="general-info">
                  <ul>
                    <li>
                      {{ portfolio.item_course_date.item }} -
                      <span>{{ portfolio.item_course_date.date }}</span>
                    </li>
                    <li>
                      {{ portfolio.item_course_tec.item }} -
                      <span> {{ portfolio.item_course_tec.item }}</span>
                    </li>
                    <li>
                      {{ portfolio.item_course_role.item }} -
                      <span> {{ portfolio.item_course_role.item }}</span>
                    </li>
                    <li>
                      {{ portfolio.item_course_view.item }} -
                      <span> {{ portfolio.item_course_view.item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerSection>
    <div class="portfolio-popup">
      <div class="pp-inner">
        <div class="pp-content">
          <div class="pp-header">
            <Btn class="close" text="X" />
            <div class="pp-thumbnail">
              <img src="../../guia/img/portfolio/3.jpg" alt="portfolio" />
              <h3>App landing page</h3>
            </div>
          </div>
          <div class="pp-body">
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                incidunt veniam voluptate repellat tempora rerum maiores
                veritatis, odit ipsum officiis provident voluptatibus hic natus
                distinctio eos pariatur ducimus quod consequuntur!
              </p>
            </div>
            <div class="general-info">
              <ul>
                <li>created - <span>4 dec 2020</span></li>
                <li>technologies used - <span>Html, css</span></li>
                <li>Role - <span>Frontend</span></li>
                <li>View Online - <span>www.domain.com.br</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
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
  },
  data() {
    return {
      portfolioItems: [
        {
          url: image1,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
        {
          url: image2,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
        {
          url: image3,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
        {
          url: image4,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
        {
          url: image5,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
        {
          url: image6,
          alt: "portfolio item thumb",
          title: "education course website",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius incidunt veniam voluptate repellat tempora rerum",
          btnText: "View project",
          item_course_date: {
            item: "created",
            date: "4 dec 2020",
          },
          item_course_tec: {
            item: "technologies used",
            stack: "Html, css",
          },
          item_course_role: {
            item: "Role",
            stack: "Frontend",
          },
          item_course_view: {
            item: "View Online",
            stack: "www.domain.com.br",
          },
        },
      ],
    };
  },
  computed: {
    ...mapState({
      idioma: (state) => state,
    }),
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
      .portfolio-title {
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
      .portfolio-item {
        width: calc((100% / 3) - 30px);
        margin: 0 15px 30px;
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
}
</style>
