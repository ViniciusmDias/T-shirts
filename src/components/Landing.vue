/* eslint-disable */
<template>
  <div>
    <h1>Olá {{ name }}</h1>
    <h2>Seu usuário é: {{ email }}</h2>
    <div class="buttons">
      <button class="btn btn-primary form-group" @click="createProduct">Adicionar produto</button>
      <button class="btn btn-primary form-group" @click="logout">Logout</button>
    </div>
    <ul class="lista-produtos">
      <li class="lista-produtos-item" v-for="product of products">
        <p class="painel-titulo" >{{ product.titulo }}</p>
        <p class="painel-descricao" >{{ product.descricao }}</p>
        <p class="painel-preco" >R$ {{ product.preco }}</p>
        <p class="painel-tamanho" >Tamanho em estoque: {{ product.tamanho }}</p>
        <button class="btn btn-primary form-group" @click="deleteProduct">Deletar produto</button>

      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Landing',
  data() {
    return {
      name: '',
      email: '',
      error: '',

      products: [], 

      nome: '',
      preco: '',
      descricao: '',
      tamanho: '',
      imagem: ''
    }
  },
  created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      }),
    axios.get('http://localhost:5000/products', {})
    .then(res => {
      this.products = res.data.products;
    })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
    createProduct() {
      this.$router.push('/product');
    },
    deleteProduct() {
      axios.delete('http://localhost:5000/products/:id', {})
      .then(res => {
        this.products = res.data.products;
      })
    },
  }
}
</script>

<style scoped>
  .btn {
    margin-right: 1%;
  }
  .lista-produtos {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 1rem;
  }
  .lista-produtos-item {
    width: 50%;
    margin-bottom: 1%;
  }
  .lista-produtos-item p {
    margin: 0;
  }
</style>
