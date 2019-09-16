<template>
    <nav class="header">
      <h1 class="centralizado">{{ titulo }}</h1>

      <ul class="menu-superior">       
          <li v-for="rota in rotas">
            <router-link v-if="rota.path != '/product'" :to="rota.path ? rota.path : '/'">
              {{ rota.titulo }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {
  data() {

      return {

        titulo: 'T-Shirts', 
      }
  },
  computed: {
    hide () {
      return this.$route.path === '/login' || this.$route.path === '/register'; 
    }
  },
  props: {

      rotas: {
          type: Array,
          required: true
      }
  }
}

</script>

<style>
  .header {
    height: 120px;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
  .menu-superior {
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  .menu-superior li{
    width: 96px;
    display: none;
    flex-wrap: nowrap;
    padding: 0%;
    margin: 0 0%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-superior li:nth-child(5){
    display: none;
  }

</style>