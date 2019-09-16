<template>
  <div>
    <div class="productsAdd">
      <p>Nome:  <input type="text" v-model="nome" /> </p> 
      <p>Preço: <input type="number" v-model="preco" /> </p> 
      <p>Descrição: <input type="text" v-model="descricao" /> </p>
      <p>Tamanho: <input type="text" v-model="tamanho" /> </p> 
      <p>Imagem: <input type="text" v-model="imagem" /> </p> 
      <button class="" @click="createProduct">Criar Produto</button>
    </div>
    {{ error }}

  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Product',
  data() {
    return {
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
      })
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    },
    createProduct() {
      let newProduct = {
        nome: this.nome,
        preco: this.preco,
        descricao: this.descricao,
        tamanho: this.tamanho,
        imagem: this.imagem
      }
    axios.post('http://localhost:5000/', newProduct)
      .then(res => {
        this.error = '';
        this.$router.push('/');
      }, err => {
        console.log(err.response)
        this.error = err.response.data.error
    })
    }
  }
}
</script>

<style scoped>
  .productsAdd {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
