
<template>
    <div class="painel">
        <slot></slot>
        <div class="conteudo">
            <h1 class="painel-titulo" >{{ titulo }}</h1>
            <p class="painel-descricao" >{{ descricao }}</p>
            <h2 class="painel-preco" >R$ {{ preco }}</h2>
            <p class="painel-tamanho" >Tamanho em estoque: {{ tamanho }}</p>
        </div>
    </div>
</template>

<script>
export default {

    props: ['titulo', 'preco' , 'descricao', 'tamanho'],
}

</script>

<style scoped>
   .conteudo {
    padding: 0 9%;
    }
  .painel {
    display: flex;
    margin: 5px;
    width: 280px;
    height: 100%;
    vertical-align: top;
    flex-direction: column;
  }
  .painel h1 {
    text-align: center;
    font-size: 1.5rem;
  }



</style>