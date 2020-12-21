<template>
  <div id="app">
      <ul>
          <li><router-link to="/GameBroad">GameBoard</router-link></li>
          <li><router-link to="/Login">Login</router-link></li>
          <li><router-link to="/opening">opening</router-link></li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
// opening

  }
}
</script>

<style>

</style>
