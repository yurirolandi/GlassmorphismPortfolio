<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="switch">
          <input
            id="language-toggle"
            class="check-toggle check-toggle-round-flat"
            type="checkbox"
            v-model="language"
          />
          <label for="language-toggle"></label>
          <span class="on">EN</span>
          <span class="off">BR</span>
        </div>
        <button class="nav-toggle" @click.stop="this.show = !this.show">
          <span></span>
        </button>
        <transition name="fade">
          <nav class="nav" v-show="show">
            <div class="nav-inner">
              <ul class="nav-links">
                <li class="nav-item">
                  <router-link class="nav-item" @click.stop="closeModal" to="/"
                    >Home</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-item"
                    to="/about"
                    @click.stop="closeModal"
                    >About</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-item"
                    to="/portfolio"
                    @click.stop="closeModal"
                    >Portfolio</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-item"
                    to="/contact"
                    @click.stop="closeModal"
                    >Contact</router-link
                  >
                </li>
              </ul>
            </div>
          </nav>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      show: false,
      language: false,
    };
  },
  methods: {
    ...mapActions(["LanguageSelected"]),
    closeModal() {
      this.show = false;
    },
  },
  watch: {
    language: function () {
      this.LanguageSelected(this.language);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

.header {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 20px 0 0 0;
  .container {
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-toggle {
        width: 50px;
        height: 50px;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        background: $white-alpha-25;
        border: 1px solid $white-alpha-40;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
        z-index: 1;

        span {
          height: 2px;
          width: 24px;
          background: $primary;
          position: relative;
          opacity: 1;
          &::before,
          &::after {
            content: "";
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            background: $primary;
            transition: all 0.3s ease;
          }

          &::before {
            left: 0;
            transform: translateY(-8px);
          }
          &::after {
            right: 0;
            transform: translateY(8px);
          }
        }

        &:hover span::before,
        &:hover span::after {
          width: 50%;
        }
      }
      .nav {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 35px 15px;
        &-inner {
          min-height: calc(100vh - 70px);
          max-width: 1200px;
          margin: auto;
          background: $white-alpha-25;
          border: 1px solid $white-alpha-40;
          backdrop-filter: $backdrop-filter-blur;
          padding: 50px 0;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;

          .nav-links {
            list-style: none;
            .nav-item {
              text-align: center;
              font-size: 40px;
              text-transform: capitalize;
              display: block;
              font-weight: 500;
              padding: 8px 15px;
              transition: color 0.3s ease;
              cursor: pointer;
              &:hover {
                color: $primary;
              }
              a {
                text-decoration: none;
                color: inherit;
                &.router-link-exact-active {
                  color: $primary;
                }
              }
            }
          }
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

      .switch {
        position: relative;
        display: inline-block;
        margin: 0 15px;
        > span {
          position: absolute;
          top: 10px;
          pointer-events: none;
          font-family: inherit;
          font-weight: bold;
          font-size: 12px;
          text-transform: uppercase;
          text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
          width: 50%;
          text-align: center;
        }
        input.check-toggle-round-flat:checked ~ .off {
          color: $primary;
        }
        input.check-toggle-round-flat:checked ~ .on {
          color: #fff;
        }
        > span.on {
          left: 0;
          padding-left: 2px;
          color: $primary;
        }
        > span.off {
          right: 0;
          padding-right: 4px;
          color: #fff;
        }
        .check-toggle {
          position: absolute;
          margin-left: -9999px;
          visibility: hidden;
          + label {
            display: block;
            position: relative;
            cursor: pointer;
            outline: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        }
        input.check-toggle-round-flat + label {
          padding: 2px;
          width: 97px;
          height: 35px;
          background-color: $primary;
          -webkit-border-radius: 60px;
          -moz-border-radius: 60px;
          -ms-border-radius: 60px;
          -o-border-radius: 60px;
          border-radius: 60px;
        }
        input.check-toggle-round-flat + label:before,
        input.check-toggle-round-flat + label:after {
          display: block;
          position: absolute;
          content: "";
        }
        input.check-toggle-round-flat + label:before {
          top: 2px;
          left: 2px;
          bottom: 2px;
          right: 2px;
          background-color: $primary;
          border-radius: 60px;
        }
        input.check-toggle-round-flat + label:after {
          top: 4px;
          left: 4px;
          bottom: 4px;
          width: 48px;
          background-color: #fff;
          -webkit-border-radius: 52px;
          -moz-border-radius: 52px;
          -ms-border-radius: 52px;
          -o-border-radius: 52px;
          border-radius: 52px;
          -webkit-transition: margin 0.2s;
          -moz-transition: margin 0.2s;
          -o-transition: margin 0.2s;
          transition: margin 0.2s;
        }
        input.check-toggle-round-flat:checked + label:after {
          margin-left: 44px;
        }
      }
    }
  }
}
</style>
