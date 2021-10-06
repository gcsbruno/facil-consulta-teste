<template>
  <button :style="{background, color}">
      Próximo
  </button>
</template>

<script>
export default {
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
    button {
        background-color: #483698;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(125%)
    }
</style>