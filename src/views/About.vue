<template>
  <div class="about-section">
    <ContainerSection>
      <h1 class="about-title">{{ idioma.about.title }}</h1>
      <div class="about-img">
        <div class="about-box">
          <img src="../assets/perfil-sem-fundo.png" alt="Yuri Rolandi" />
        </div>
      </div>
      <div class="about-text">
        <p>
          {{ idioma.about.text }}
        </p>
        <h3>{{ idioma.about.skills }}</h3>
        <Skills :skillItems="skillItems" />
        <div class="about-tabs">
          <button
            class="about-tabs__item"
            :class="education ? 'active' : ''"
            @click.stop="tab('education')"
          >
            {{ idioma.about.tab_education }}
          </button>
          <button
            class="about-tabs__item"
            :class="experience ? 'active' : ''"
            @click.stop="tab('experience')"
          >
            {{ idioma.about.tab_experience }}
          </button>
        </div>
        <transition name="fade">
          <div
            class="tab-content"
            :class="education ? 'active' : ''"
            id="education"
            v-show="education"
          >
            <TimeLine :timeLineItems="timeLineItems[0].education" />
          </div>
        </transition>
        <transition name="fade">
          <div
            class="tab-content"
            :class="experience ? 'active' : ''"
            id="experience"
            v-show="experience"
          >
            <TimeLine :timeLineItems="timeLineItems[1].experience" />
          </div>
        </transition>
        <Btn text="download cv" />
        <Btn text="contact me" @click.stop="$router.push('/contact')" />
      </div>
    </ContainerSection>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
import Skills from "@/components/Skills.vue";
import TimeLine from "../components/TimeLine.vue";

export default {
  name: "About",
  components: {
    ContainerSection,
    Btn,
    Skills,
    TimeLine,
  },
  data() {
    return {
      education: true,
      experience: false,
      skillItems: [
        "Html 5",
        "Css 3",
        "Javascript",
        "React js",
        "Vue Js",
        "Typescript",
        "Vuetify",
        "Node js",
      ],
      timeLineItems: [
        {
          education: [
            {
              line_date: "2021 - 2018",
              line_title: "Bacharel de tecnologia - <span>Estácio de sá",
              line_subtitle: "Estácio de sá",
              line_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
            },
          ],
        },
        {
          experience: [
            {
              line_date: "2021 - 2018",
              line_title: "MEDGRUPO",
              line_subtitle: "Estácio de sá",
              line_text:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio libero dolores eveniet ducimus qui sequi, veritatis tempore nisi blanditiis quos, iste enim sunt. Voluptatem, recusandae saepe! Perferendis fugiat ipsum vel!",
            },
          ],
        },
      ],
    };
  },
  methods: {
    tab(tab) {
      if (tab === "experience") {
        this.education = false;
        this.experience = true;
      } else {
        this.education = true;
        this.experience = false;
      }
    },
  },
  computed: {
    ...mapGetters({
      idioma: "getLanguageSelected",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.about-section {
  .about-title {
    width: 100%;
    text-align: center;
    margin: 50px 0;
  }
  .about-img {
    width: 40%;
    padding: 0 15px;
    min-width: 415.19px;
    margin-bottom: 30px;
    .about-box {
      background: $white-alpha-25;
      max-width: 380px;
      border: 1px solid $white-alpha-40;
      margin: auto;
      border-radius: 10px;
      img {
        width: 100%;
      }
    }
  }
  .about-text {
    width: 60%;
    padding: 0 15px;
    min-width: 415.19px;
    padding-bottom: 50px;
    h3 {
      text-transform: capitalize;
      font-size: 20px;
      margin: 20px 0;
    }
    .about-tabs {
      margin-top: 20px;
      &__item {
        padding: 2px 0;
        background: transparent;
        border: none;
        display: inline-block;
        color: $secondary-dark;
        font-size: 20px;
        cursor: pointer;
        font-weight: 500;
        font-family: inherit;
        margin: 0 30px 0 0;
        position: relative;
        opacity: 0.8;
        transition: all 0.3s ease;
        &:last-child {
          margin-right: 0;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          top: initial;
          width: 0%;
          height: 3px;
          background: $secondary-dark;
          transition: width 0.3s ease;
        }
        &:hover::before {
          width: 100%;
        }
        &.active {
          color: $primary;
          opacity: 1;
          cursor: auto;
        }

        &.active::before {
          width: 100%;
          background: $primary;
          opacity: 1;
        }
      }
    }
    .tab-content {
      padding: 40px 0;
      display: none;
      &.active {
        display: block;
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.3s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }
}
</style>
