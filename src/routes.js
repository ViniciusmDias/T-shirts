import Home from './components/Home.vue';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';

export const routes = [
    { path: '/home', component: Home, titulo: 'Home' },
    { path: '/', component: Landing, titulo: 'Minha Conta' },
    { path: '/login', component: Login, titulo: 'Login' },
    { path: '/signup', component: Signup, titulo: 'Signup' },
  
  ];