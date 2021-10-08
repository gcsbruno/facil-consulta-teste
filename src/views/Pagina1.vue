<template>
  <b-container class="container">
    <b-row>
      <b-col cols="8">
        <h1 class="title">Sobre o profissional</h1>
        <p>Dados do Profissional</p>
        <div class="col-xs-6">
          <b-form-group
            id="fieldset-1"
            label="Nome Completo"
            v-model="name"
            label-for="input-1"
            valid-feedback="Nome Válido"
            :invalid-feedback="invalidFeedbackName"
            :state="stateName"
          >
            <b-form-input
              id="input-1"
              v-model="name"
              :state="stateName"
              trim
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-2"
            label="CPF"
            v-model="CPF"
            v-mask="'###.###.###-##'"
            label-for="input-2"
            valid-feedback="CPF Válido"
            :invalid-feedback="invalidFeedbackCPF"
            :state="stateCPF"
          >
            <b-form-input
              id="input-1"
              v-model="CPF"
              :state="stateCPF"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="fieldset-3"
            label="Celular"
            label-for="input-3"
            v-model="CEL"
            v-mask="'(##)# ####-####'"
            valid-feedback="Celular Válido"
            :invalid-feedback="invalidFeedbackCelular"
            :state="stateCelular"
          >
            <b-form-input
              id="input-3"
              v-model="CEL"
              :state="stateCelular"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="div-locale">
          <div class="div-estado">
            <label class="label-form" for="estado">Estado</label>
            <select v-model="selected" class="form-control" :state="stateEstado">
              <option
                v-for="option in options"
                v-bind:value="option.value"
                v-bind:key="option.text"
              >
                {{ option.text }}
              </option>
            </select>
          </div>

          <div class="div-cidade">
            <label class="label-form" for="cidade">Cidade</label>
            <select name="" id="" class="form-control" :state="stateCidade">
              <option v-if="selected == 1" value="">Londrina</option>
              <option v-if="selected == 1" value="">Maringá</option>

              <option v-if="selected == 2" value="">Pelotas</option>
              <option v-if="selected == 2" value="">Porto Alegre</option>

              <option v-if="selected == 3" value="">Florianópolis</option>
              <option v-if="selected == 3" value="">Joinville</option>
            </select>
          </div>
          <b-progress class="mt-2" :max="max">
            <b-progress-bar :value="50"></b-progress-bar>
          </b-progress>
          <br />
          <router-link to="/Pagina2">
            <Botao />
          </router-link>
        </div>
      </b-col>
      <b-col cols="4">
        <div class="imagem">
          <b-img
            class="imagem"
            right
            src="../assets/images/desktop-pagina-1.png"
            fluid
            alt="Imagem doutores"
          ></b-img>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Botao from "../components/Botao.vue";
export default {
  components: {
    Botao,
  },
  computed: {
    stateName() {
      return this.name.length >= 4;
    },
    invalidFeedbackName() {
      if (this.name.length > 1) {
        return "Nome precisa ter pelo menos 4 caracteres.";
      } else {
        return "";
      }
    },
    stateCPF() {
      return this.name.length >= 11;
    },
    invalidFeedbackCPF() {
      if (this.name.length >= 1) {
        return "CPF Inválido";
      } else {
        return "";
      }
    },
    stateCelular() {
      return this.name.length >= 13;
    },
    invalidFeedbackCelular() {
      if (this.name.length >= 1) {
        return "Telefone Inválido";
      } else {
        return "";
      }
    },
  },
  data() {
    return {
      errors: [],
      name: "",
      CPF: "",
      CEL: "",
      selected: null,
      options: [
        { value: 1, text: "Paraná" },
        { value: 2, text: "Rio Grande do Sul" },
        { value: 3, text: "Santa Catarina" },
      ],
    };
  },
};
</script>

<style>
.container {
  display: grid;
}
.nextButton {
  background-color: #483698;
}
.imagem {
  margin-top: 6vh;
  padding: 14px;
  width: max-content;
}
.title {
  font-family: "Comfortaa";
  src: local("Comfortaa"), url(../assets/fonts/Comfortaa-VariableFont_wght.ttf);
  color: #483698;
}
</style>