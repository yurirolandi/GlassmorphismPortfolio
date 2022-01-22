<template>
  <div class="header">
    <div class="container">
      <div class="row">
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
export default {
  name: "NavBar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
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
      justify-content: flex-end;
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
    }
  }
}
</style>
