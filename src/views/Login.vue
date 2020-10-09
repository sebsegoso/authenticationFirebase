<template>
  <div>
    <h1>Inicia sesión:</h1>
    <form class="form">
      <label>Correo electrónico</label>
      <input name="email" type="text" v-model="email" placeholder="ejemplo@mail.com" autocomplete="on"/>
      <label>Contraseña</label>
      <input type="password" v-model="password" placeholder="contraseña" />
    </form>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => console.log(res))
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>