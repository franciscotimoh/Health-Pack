<template>
  <div style="margin:10px">
    <br>
    <h1>Log-In</h1>
    <card>
      <form @submit.prevent>
        <base-input
          label="Email Address"
          placeholder="sample@email.com"
          type="email"
          v-model="email"></base-input>
        <small slot="helperText" id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        <base-input
          label="Password"
          placeholder="Password"
          type="password"
          v-model="password"
        ></base-input>
        <base-button block type="primary" v-on:click="loginUser">Log-In</base-button>

      </form>
    </card>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data(){
    return{
      email: '',
      password:''
    }
  },
  computed:{
    auth(){
      return getAuth();
    }

  },
  methods: {
    loginUser(){
      const auth = this.auth;
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Handle success
          const user = userCredential.user;
          console.log("User logged in:");
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
}
// export default{
//
// }
// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
</script>

<style scoped>
h1 {
  padding-left: 10px;
}
</style>
