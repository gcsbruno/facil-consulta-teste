<template>
<div>
  <div>
    <h1>Cadastro realizado com sucesso!</h1>
    <b-col>
      <b-img
        class="imagem"
        src="../assets/images/facilconsulta.png"
        fluid
        alt="Facil consulta"
      ></b-img>
    </b-col>
  </div>
  <b-col>
      <router-link to="/">
    <button type="submit" class="button">Criar outro cadastro</button>
      </router-link>
  </b-col>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

button {
  font-family: "Comfortaa", cursive;
  background-color: #483698;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  width: 300px;
}

button:hover {
  filter: brightness(125%);
}
</style>