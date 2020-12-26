<template>
  <div id="app">
      
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 class="navbar-brand" href="#" style="color: red bold">2048</h1>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"><router-link to="/opening">Home</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/Login">Login</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/GameBoard">GameBoard</router-link></a>
      </li>
    </ul>
  </div>
</nav>
      
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
        

  }
}
</script>

<style>

</style>
