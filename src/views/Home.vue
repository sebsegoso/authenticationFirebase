<template>
  <div class="home">
    <h1>Bienvenido al sitio</h1>
    <h3>{{ usuarioActual }}</h3>
    <hr />
    <p>Si ves esto es porque ya has iniciado sesión</p>
    <button @click="logOut">Cerrar sesión</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Home",
  methods: {
    logOut() {
      firebase .auth().signOut()
        .then(() => {
          alert("Sesión cerrada")
          this.$router.push("Login")
          })
        // .then(()=> location.reload())
        // .then(this.$router.push("Login"));
    },
  },
  computed: {
    usuarioActual() {
      return firebase.auth().currentUser.email;
    },
  },
  created() {
    console.log(`Home, usuario: ${this.usuarioActual}`);
  },
};
</script>

<style lang="scss">
.btn-to-login {
  border-radius: 25px;
  padding: 20px;
  font-size: 30px;
}
</style>
