<template>
    <div class="headerClass">
    <div class="links">
        <p><a href="index.html">Home</a></p>
        <p> | </p>
        <p><a href="addPost.html"> addPost</a></p>
    </div>


<div class="dropdown">
    <img src="res/images/me.png" v-on:click="myFunction()" class="dropbtn" alt="LA">
    <div id="myDropdown" class="dropdown-content">
      <a href="">John Doe</a>
      <a href="">john.doe@ut.ee</a>
      <a href="login.html">Logout</a>
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