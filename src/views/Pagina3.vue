<template>
  <div>
    <b-container class="container">
      <b-row>
        <b-col class="coluna">
          <h1 class="strong">Revisão do cadastro</h1>

          <strong class="strong">Nome completo</strong>
          <p>{{ stateName }}</p>

          <strong class="strong">CPF</strong>
          <p>{{ stateCPF }}</p>

          <strong class="strong">Número de celular ou telefone</strong>
          <p>{{ stateCelular }}</p>

          <strong class="strong">Estado/Cidade</strong>
          <p>{{ stateEstado }} - {{ stateCidade }}</p>

          <strong class="strong">Especialidade principal</strong>
          <p>{{ stateEspecialidade }}</p>

          <strong class="strong">Preço da consulta</strong>
          <p>{{ statePreco }}</p>

          <strong class="strong">Formas de pagamento da consulta</strong>
          <p>{{ statePagamento }} - {{ stateParcela }}</p>
          <br />
          <router-link to="/Pagina4">
            <button class="cadastrar">CADASTRAR PROFISSIONAL</button>
          </router-link>
          <br />
          <router-link to="/">
            <h3 class="voltar">Editar Cadastro</h3>
          </router-link>
        </b-col>
        <b-col cols="4">
          <div class="imagem">
            <b-img
              class="imagem"
              right
              src="../assets/images/desktop-pagina-3.png"
              fluid
              alt="Imagem doutores"
            ></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

.coluna {
  text-align: initial;
}
.strong {
  text-align: initial;
  margin: 20px;
}
.imagem {
  margin-top: 6vh;
  padding: 14px;
  width: max-content;
}

.cadastrar {
  font-family: "Comfortaa", cursive;
  background-color: #fbde40 !important;
  color: #483698 !important;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  width: 300px;
}
.cadastrar:hover {
  filter: brightness(105%);
}

.voltar {
    text-align: initial;
    font-size: 1.4rem;
    margin: 20px 50px;
}
</style>