<template>
    <div class="headerClass">
      <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/signup">Signup</router-link>
</nav>


<div class="dropdown">
    <img src="@/assets/me.png" v-on:click="myFunction()" class="dropbtn" alt="LA">
    <div id="myDropdown" class="dropdown-content">
      <a href="">John Doe</a>
      <a href="">john.doe@ut.ee</a>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </div> 

</div>
</template>

<script>
export default {
  name: "headerName",
  methods: {
    myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
    }
}
</script>