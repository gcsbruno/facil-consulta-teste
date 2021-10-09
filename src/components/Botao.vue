<template>
  <button type="submit" class="button">
      Próximo
  </button>
</template>

<script>
export default {
    data() {
        return {
            tituloBotao: ''
        }
    },
    props: {
        colors: {
            type: String
        },
    },
    background: {
        type: String
    },
    disabled: {
        type: Boolean
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

    button {
        font-family: 'Comfortaa', cursive;
        background-color: #483698;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        width: 300px
    }

    button:hover {
        filter: brightness(125%)
    }
</style>