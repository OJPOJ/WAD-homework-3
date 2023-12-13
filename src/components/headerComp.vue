<template>

    <div class="headerClass">
      <h1>Ax-Group</h1>
      <div class="links">
      <nav>
        <button @click = getData()>GET ALL</button> <!---DEBUG BUTTONS FOR DATABASE-->
        <button @click = del()>DEL ALL</button>
  <a href="/">Home |</a>
  <router-link to="/contacts"> Contacts</router-link>


</nav>

</div>

</div>
</template>

<script>
export default {
  name: "headerName",

  data() {
    return {
      email: "",
      password: "",
      validatePassword: "",
      errMess:"",
    };
  },
  methods: {
    getData() {
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
    del() {
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }
}
</script>