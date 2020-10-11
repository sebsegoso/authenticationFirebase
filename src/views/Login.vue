<template>
  <div>
    <p>Para navegar en el sitio debes iniciar sesión</p>
    <h1>Inicia sesión:</h1>
    <form class="form">
      <label>Correo electrónico</label>
      <input
        name="email"
        type="text"
        v-model="email"
        placeholder="ejemplo@mail.com"
        autocomplete="on"
      />
      <label>Contraseña</label>
      <input type="password" v-model="password" placeholder="contraseña" />
    </form>
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "sseguraosorio@gmail.com",
      password: "123456",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          acept => {
          console.log('Yeah bitch!',acept.user)
          this.$router.push('/')
        })
        .then(this.$store.dispatch("setUser"))
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(`${errorCode}: ${errorMessage}`);
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