<template>
  <div>
    <div id="icon">
      <b-icon icon="arrow-left" @click="$router.go(-1)"></b-icon>
    </div>
    <b-card class="content">
      <b-container class="container">
        <b-row>
          <b-col cols="8">
            <h1>Sobre o atendimento</h1>
            <h4>Detalhes do atendimento</h4>
            <br />
            <div class="div-locale">
              <div class="div-especialidade">
                <label class="label-form" for="especialidade"
                  >Selecione a especialidade</label
                >
                <select
                  v-model="selectedEspecialidade"
                  class="form-control"
                  :state="stateEspecialidade"
                >
                  <option
                    v-for="option in options"
                    v-bind:value="option.value"
                    v-bind:key="option.text"
                  >
                    {{ option.text }}
                  </option>
                </select>
              </div>
              <b-form-group
                id="fieldset-1"
                label="Informe o preço da consulta"
                v-model="preco"
                label-for="input-1"
                valid-feedback="preço"
                :invalid-feedback="invalidFeedbackPreco"
                :state="statePreco"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  min="30"
                  max="350"
                  v-model="preco"
                  :state="statePreco"
                ></b-form-input>
              </b-form-group>

              <p>Formas de pagamento da consulta*</p>
              <b-card class="card">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="statusDinheiro"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="statePagamento"
                >
                  Em dinheiro
                </b-form-checkbox>
              </b-card>
              <b-card class="card">
                <b-form-checkbox
                  id="checkbox-2"
                  v-model="statusPix"
                  name="checkbox-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="statePagamento"
                >
                  Pix
                </b-form-checkbox>
              </b-card>
              <b-card class="card">
                <b-form-checkbox
                  id="checkbox-3"
                  v-model="checked"
                  name="checkbox-3"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="statePagamento"
                >
                  Cartão de crédito
                </b-form-checkbox>

                <p v-if="checked">Parcelamento em</p>
                <b-form-checkbox
                  id="checkbox-3-1"
                  v-model="statusParcelamento1"
                  v-if="checked"
                  name="checkbox-3-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="stateParcela"
                >
                  1x, sem juros
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-3-2"
                  v-model="statusParcelamento2"
                  v-if="checked"
                  name="checkbox-3-2"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="stateParcela"
                >
                  2x, sem juros
                </b-form-checkbox>
                <b-form-checkbox
                  id="checkbox-3-3"
                  v-model="statusParcelamento2"
                  v-if="checked"
                  name="checkbox-3-3"
                  value="accepted"
                  unchecked-value="not_accepted"
                  :state="stateParcela"
                >
                  3x, sem juros
                </b-form-checkbox>
              </b-card>
              <br />
              <b-progress class="mt-2" :max="max">
                <b-progress-bar :value="100"></b-progress-bar>
              </b-progress>
              <br />
              <router-link to="/Pagina3">
                <Botao />
              </router-link>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="imagem">
              <b-img
                class="imagem"
                right
                src="../assets/images/desktop-pagina-2.png"
                fluid
                alt="Imagem doutores"
              ></b-img>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import Botao from "../components/Botao.vue";

export default {
  components: {
    Botao,
  },

  data() {
    return {
      selectedEspecialidade: '',
      checked: false,
      options: [
        { value: 1, text: "Cardiologia" },
        { value: 2, text: "Dermatologia" },
        { value: 3, text: "Neurologia" },
        { value: 4, text: "Oftalmologia" },
        { value: 5, text: "Psiquiatria" },
        { value: 6, text: "Urologia" },
      ],
    };
  },
};
</script>

<style>
.card {
  text-align: initial;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #999;
}
.imagem {
  margin-top: 6vh;
  padding: 14px;
  width: max-content;
}
#icon {
  padding-right: 195vh;
  float: initial;
}
</style>