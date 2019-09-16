<template>
    <nav class="header">
      <h1 class="centralizado">{{ titulo }}</h1>

      <ul class="menu-superior">       
          <li v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">
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
    padding: 10px 15px;
    margin: 0 10px; 
  }

</style>