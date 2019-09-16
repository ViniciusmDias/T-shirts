<template>
  <div class="signup form-group">
    <h3>Para criar sua conta, cadastre-se abaixo!</h3>
    <label for="name" class="col-form-label">Nome:</label><input id="name" class="form-control  form-group" type="text" v-model="name">
    <label for="email" class="col-form-label">Email:</label><input id="name" class="form-control  form-group" type="text" v-model="email">
    <label for="password" class="col-form-label">Password:</label><input id="password" class="form-control  form-group" type="password" v-model="password">
    <button class="btn btn-primary form-group" @click="signup">Criar conta</button>
    {{ error }}
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',

      error: '',
    }
  },
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      axios.post('http://localhost:5000/signup', newUser)
        .then(res => {
          if (res.status === 200) {
            this.error = '';
            this.$router.push('/login');
          }
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>
<style scoped>
  .signup {
    width: 30%;
    display: flex;
    margin-bottom: 1rem;
    flex-direction: column;
    margin: 0 auto;

  }
</style>


