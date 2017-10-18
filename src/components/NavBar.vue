<template>
  <div class="navbar" id="nav">
    <h1 class="navbar-brand">
      <router-link to="/">
      Home
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 a {
    font-weight: bold;
    font-size: 2.5em;
    padding: 1vh 3vw;
    color: black;
    text-decoration: none;
  }

    h1 a:hover {
    background-color: grey;
  }

  #nav {
    background-color: #d6d6d6;
  }

</style>
