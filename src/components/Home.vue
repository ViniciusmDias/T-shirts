<template>
    <div>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Procure um produto digitando uma parte da descrição">

    <ul class="lista-produtos">
        <li class="lista-produtos-item" v-for="product of produtosComFiltro">

        <meu-painel :titulo="product.nome" :preco="product.preco" :tamanho="product.tamanho" :descricao="product.descricao">
            

            <imagem-responsiva :url="product.imagem" :titulo="products.nome" />
            
            
        </meu-painel>

        </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
import Painel from './shared/painel/Painel.vue';
import ImagemResponsiva from './shared/imagem-responsiva/ImagemResponsiva.vue';

export default {
  name: 'Home',
  components: {
    'meu-painel' : Painel, 
    'imagem-responsiva': ImagemResponsiva,
  },
  data() {

    return {

      titulo: 'T-Shirts', 
      products: [], 
      filtro: ''
    }
  },
  computed: {

    produtosComFiltro() {

      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.products.filter(product => exp.test(product.descricao));
      } else {
        return this.products;
      }
    }
  },
  methods: {
  },
  mounted() {
    axios.get('http://localhost:5000/products', {})
      .then(res => {
        this.products = res.data.products;
      })
  },

  
}
</script>

<style scoped>

  .centralizado {
    text-align: center;
  }
  .lista-produtos {
    padding: 0;
    display: flex;
    list-style: none;
    flex-wrap: wrap;
  }

  .lista-produtos .lista-produtos-item {
    margin: 1% 0;
    display: inline-block;
  }

  .filtro {

    display: block;
    width: 100%;
  }
</style>

