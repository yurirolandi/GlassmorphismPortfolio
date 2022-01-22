<template>
  <div class="home-section">
    <ContainerSection>
      <div class="home-text">
        <p>Hello, I'm</p>
        <h1>Yuri Rolandi</h1>
        <h2>Frontend developer</h2>
        <Btn text="More about me" />
        <Btn text="portfolio" />
      </div>
      <div class="home-img">
        <div class="home-box">
          <img src="../assets/perfil-sem-fundo.png" alt="Yuri Rolandi" />
        </div>
      </div>
    </ContainerSection>
  </div>
</template>

<script>
// @ is an alias to /src
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
export default {
  name: "Home",
  components: {
    ContainerSection,
    Btn,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/variables.scss";

.home-section {
  display: flex;
  align-items: center;
  justify-content: center;

  .home-text {
    > p {
      font-size: 18px;
    }
    > h1 {
      font-size: 50px;
      text-transform: capitalize;
    }
    > h2 {
      font-size: 20px;
      text-transform: capitalize;
      font-weight: 300;
      margin-bottom: 30px;
    }
  }
  .home-img {
    .home-box {
      max-width: 360px;
      background-color: $white-alpha-25;
      border-radius: 50%;
      border: 8px solid $white-alpha-25;
      margin: auto;
      overflow: hidden;
      height: 355px;
      img {
        width: 100%;
        margin: auto;
      }
    }
  }
  .home-img,
  .home-text {
    width: 50%;
    padding: 15px;
  }
}
</style>
