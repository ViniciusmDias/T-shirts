<template>
  <div class="login form-group">
    <h3>Bem vindo! Digite seu e-mail e senha para efetuar o login</h3>
    <label for="email" class="col-form-label">Email</label><input id="email" class="form-control  form-group" type="email" v-model="email">
    <label for="inputPassword" class="col-form-label">Password</label><input class="form-control  form-group" id="inputPassword" type="password" v-model="password">
    <button class="btn btn-primary form-group" @click="login">Login</button>
    <!-- <button class="signup" @click="signup">Criar conta</button> -->
    {{ error }}
    <br/>  
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',

      error: '',
    }
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          }
        }, err => {
          console.log(err.response);
          this.error = err.response.data.error
        })
    }
  },
  mounted() {
    axios.get('http://localhost:5000/product', {})
      .then(res => {
        this.nome = res.data.product.nome;
        this.descricao = res.data.product.descricao;
      })
  },
}
</script>

<style scoped>
  .login {
    width: 30%;
    display: flex;
    margin-bottom: 1rem;
    flex-direction: column;
    margin: 0 auto;

  }
</style>

