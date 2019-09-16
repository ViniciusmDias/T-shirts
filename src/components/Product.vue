<template>
  <div>
    <div class="productsAdd form-group needs-validation" novalidate>
    <h3>Adicionar Produto</h3>
    <label for="nome" class="col-form-label">Nome</label><input id="nome" class="form-control  form-group" type="text" v-model="nome">
    <div class="invalid-feedback">
      Adicione um nome ao produto.
    </div>
    <label for="preco" class="col-form-label">Preço</label><input id="preco" class="form-control  form-group" type="text" v-model="preco">
    <div class="invalid-feedback">
      Adicione um preço ao produto.
    </div>
    <label for="tamanho" class="col-form-label">Tamanho</label><input id="tamanho" class="form-control  form-group" type="text" v-model="tamanho">
    <div class="invalid-feedback">
      Coloque um tamanho.
    </div>
    <label for="descricao" class="col-form-label">Descrição</label><input id="descricao" class="form-control  form-group" type="text" v-model="descricao">
    <div class="invalid-feedback">
      Faça uma breve descrição do seu produto.
    </div>
    <label for="imagem" class="col-form-label">Imagem</label><input id="imagem" class="form-control  form-group" type="imagem" v-model="imagem">
    <div class="invalid-feedback">
      Coloque uma url da imagem do seu produto.
    </div>
    <div class="buttons">
      <button class="btn btn-primary form-group" @click="createProduct()" type="submit">Adicionar produto</button>
      <button class="btn btn-primary form-group" @click="voltar()">Voltar</button>
    </div>
    {{ error }}
  </div>

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
    voltar() {
      this.$router.push('/');
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
    margin: 0 auto;
    width: 35%;
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
  }
  .productsAdd h3 {
    width: 100%;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
