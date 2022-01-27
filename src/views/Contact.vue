<template>
  <div class="contact-section">
    <ContainerSection>
      <div class="row">
        <h1 class="contact-title">{{ idioma.contact.title }}</h1>
      </div>
      <div class="row">
        <div class="contact-info">
          <div class="contact-info__item">
            <h3>Email</h3>
            <p>sd.rolandi@gmail.com</p>
          </div>
          <div class="contact-info__item">
            <h3>Phone</h3>
            <p>+55 (21) - 97362-9318</p>
          </div>
        </div>
        <div class="contact-form">
          <form @submit.prevent="send">
            <div class="input-group">
              <input
                type="text"
                v-model="Name"
                class="input-control"
                :placeholder="idioma.contact.name"
              />
            </div>
            <div class="input-group">
              <input
                type="text"
                v-model="Email"
                class="input-control"
                placeholder="Email"
              />
              <span v-if="validEmail" class="errorEmail">{{ validEmail }}</span>
            </div>
            <div class="input-group">
              <input
                type="text"
                v-model="Subject"
                class="input-control"
                :placeholder="idioma.contact.subject"
              />
            </div>
            <div class="input-group">
              <textarea
                :placeholder="idioma.contact.message"
                v-model="Message"
                class="input-control"
              ></textarea>
            </div>
            <div class="submit">
              <Btn :text="idioma.contact.btnText" />
            </div>
          </form>
        </div>
      </div>
    </ContainerSection>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import ContainerSection from "@/components/ContainerSection.vue";
import Btn from "@/components/Button.vue";
export default {
  name: "Contact",
  components: {
    ContainerSection,
    Btn,
  },
  data() {
    return {
      Name: "",
      Email: "",
      Subject: "",
      Message: "",
      validEmail: "",
    };
  },
  methods: {
    send() {
      if (!this.Email.includes("@")) {
        this.validEmail = "Insira um email válido";
        return;
      }
      if (
        this.Name !== "" &&
        this.Email !== "" &&
        this.Subject !== "" &&
        this.Message !== ""
      ) {
        let info = {
          nome: this.Name,
          email: this.Email,
          subject: this.Subject,
          mensagem: this.Message,
        };
        axios.post("https://sendemail-yuri.herokuapp.com/send", info);

        this.Name = "";
        this.Email = "";
        this.Subject = "";
        this.Message = "";
      } else {
        console.log("Ops.. ocorreu um erro ao enviar!");
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
.contact-section {
  .container {
    .row {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      .contact-title {
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
      .contact-form,
      .contact-info {
        width: 50%;
        padding: 0 15px;
        min-width: 519px;
      }
      .contact-form {
        .input-group {
          width: 100%;
          margin-bottom: 30px;
          .errorEmail {
            color: $primary;
            font-size: 13px;
            margin: 15px 10px;
          }
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
