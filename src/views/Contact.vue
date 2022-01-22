<template>
  <div class="contact-section">
    <ContainerSection>
      <div class="row">
        <h1 class="contact-title">Contact Me</h1>
      </div>
      <div class="row">
        <div class="contact-form">
          <form>
            <div class="input-group">
              <input type="text" class="input-control" placeholder="Name" />
            </div>
            <div class="input-group">
              <input type="text" class="input-control" placeholder="Email" />
            </div>
            <div class="input-group">
              <input type="text" class="input-control" placeholder="Subject" />
            </div>
            <div class="input-group">
              <textarea placeholder="Message" class="input-control"></textarea>
            </div>
            <div class="submit">
              <Btn text="Send Message" />
            </div>
          </form>
        </div>
        <div class="contact-info">
          <div class="contact-info__item">
            <h3>Email</h3>
            <p>exempla@email.com</p>
          </div>
          <div class="contact-info__item">
            <h3>Phone</h3>
            <p>+55 (xx) - *****-*****</p>
          </div>
        </div>
      </div>
    </ContainerSection>
  </div>
</template>

<script>
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
export default {
  name: "Contact",
  components: {
    ContainerSection,
    Btn,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
.contact-section {
  .container {
    .row {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .contact-title {
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
      .contact-form,
      .contact-info {
        width: 50%;
        padding: 0 15px;
      }
      .contact-form {
        .input-group {
          width: 100%;
          margin-bottom: 30px;
          .input-control {
            display: block;
            width: 100%;
            height: 50px;
            border-radius: 25px;
            font-family: inherit;
            font-size: 16px;
            background-color: $white-alpha-25;
            padding: 0 20px;
            color: $secondary-dark;
            border: 1px solid transparent;
            transition: border-color 0.3s ease-in;
            &::placeholder {
              color: $secondary-dark;
              opacity: 0.8;
              font-weight: 300;
            }
          }
          .input-control:focus {
            border-color: $white-alpha-25;
            opacity: 0.8;
          }
          textarea.input-control {
            height: 120px;
            resize: none;
            padding-top: 15px;
          }
        }
      }
      .contact-info {
        &__item {
          margin: 0 0 30px;
          padding: 0 0 0 20px;
          h3 {
            text-transform: capitalize;
            margin: 0 0 5px;
          }
        }
      }
    }
  }
}
</style>
