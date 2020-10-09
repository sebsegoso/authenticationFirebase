<template>
  <div class="home">
    <h1>Bienvenido al sitio</h1>
    <router-link to="/login"><button class="btn-to-login">Iniciar sesión</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style lang="scss">
  .btn-to-login{
    border-radius: 25px;
    padding: 20px;
    font-size: 30px;
    
  }
  
</style>
