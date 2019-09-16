<template>
<form class="needs-validation productsAdd" novalidate>
  <div class="form-row">
      <label for="nome">Nome do produto</label>
      <input type="text" v-model="nome" class="form-control form-group" id="nome" required>
      <div class="invalid-feedback form-group">
      Adicione um nome ao produto.
      </div>
  </div>
  <div class="form-row">
    <label for="descricao">Descrição</label>
    <input type="text" v-model="descricao" class="form-control form-group" id="descricao" required>
    <div class="invalid-feedback form-group">
    Faça uma breve descrição do seu produto.
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-5">
      <label for="preco">Preço</label>
      <input type="number" v-model="preco" class="form-control form-group" id="nome" required>
      <div class="invalid-feedback form-group">
      Adicione um preço ao produto.
      </div>
    </div>
    <div class="col-md-5">
      <label for="tamanho">Tamanho</label>
      <select v-model="tamanho" class="custom-select mr-sm-2 form-group" id="tamanho">
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
      </select>
      <div class="invalid-feedback form-group">
      Coloque um tamanho.
      </div>
    </div>
  </div>
  <div class="form-row">
    <label for="imagem">Imagem</label>
    <input type="text" v-model="imagem" class="form-control form-group" id="imagem" required>
    <div class="invalid-feedback form-group">
      Coloque uma url da imagem do seu produto.
    </div>
  </div>
  <div class="buttons">
    <button class="btn btn-primary form-group" @click="createProduct()" type="submit">Adicionar produto</button>
    <button class="btn btn-primary form-group" @click="voltar()">Voltar</button>
  </div>
</form>

  <!-- <form class="productsAdd form-group needs-validation" novalidate>
    <h3>Adicionar Produto</h3>
    <label for="validationCustom01" class="col-form-label">Nome</label><input id="validationCustom01" class="form-group form-control" type="text" v-model="nome">
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
  </form> -->
</template>
<script>

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

import axios from 'axios';

export default {
  name: 'Product',
  data() {
    return {
      nome: '',
      preco: '',
      descricao: '',
      tamanho: 'P',
      imagem: '',
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
        if (res.status === 200) {
          this.error = '';
          this.$router.push('/');
        }
      }, err => {
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
  .form-row {
    width: 100%;
    justify-content: space-between;
    margin-right: 0; 
    margin-left: 0;
  }
  .form-row .col-md-5{
    padding: 0;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>
