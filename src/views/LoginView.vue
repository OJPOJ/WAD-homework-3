<template>
  <div>
    <form @submit.prevent="(this.email.length === 0 || this.password.lenght === 0)">
      <h2>Login</h2>
      <p class="error">{{ error }}</p> 

      <div class="formBod">
      <input type="email" required v-model="email" placeholder="Email" />
      <input type="password" required v-model="password" placeholder="Password" />
      </div> 

      <div class="submit">
        <button @click='this.$router.push("/signup")'>Signup</button>
        <button @click="LogIn()">Login</button>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "loginView",

  data() {
    return {
      email: "",
      password: "",
      validatePassword: "",
      error:"",
    };
  },
  methods: {
    LogIn() {
      var data = {
        email: this.email,
        password: this.password,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      if(!data.error){
        this.$router.push("/");
      //location.assign("/");
      }else{
        this.error = data.error
      }
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    }
  }
};
</script>

<style scoped>
form {
  max-width: 320px;
  margin: 30px auto;
  background: #eadfc8;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
h2{
  text-align: center;
}
input {
  margin-top: 1em;
  border: none;
  margin-bottom: 5px;
  display:inline-block;
  vertical-align:middle;
  padding: 10px 6px;
  border-radius: 10px;
}
p{
  margin: 0px;
}
.submit {
  display: flex;
  justify-content: space-between;
}
button {
  background: #6b84e5;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: #ffffff;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
}
.formBod{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.error {
  color: #ff0000;
}
</style>
