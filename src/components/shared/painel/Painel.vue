
<template>
    <div class="painel">
        <slot></slot>
        <h1 class="painel-titulo" >{{ titulo }}</h1>
        <p class="painel-descricao" >{{ descricao }}</p>
        <h2 class="painel-preco" >R$ {{ preco }}</h2>
        <p class="painel-tamanho" >Tamanho em estoque: {{ tamanho }}</p>
    </div>
</template>

<script>
export default {

    props: ['titulo', 'preco' , 'descricao', 'tamanho'],
}

</script>

<style scoped>
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }



</style>