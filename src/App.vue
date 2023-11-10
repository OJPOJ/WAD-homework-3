
<template>
  <div id="headerName">
  <header-comp></header-comp>
</div>
<router-view />


</template>

<style>
  @import './header-general-styles.css';
</style>


<script>
import headerComp from './components/headerComp.vue';

export default{
  name: "app",
  components: {
    headerComp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
