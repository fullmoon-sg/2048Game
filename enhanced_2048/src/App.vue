<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 class="navbar-brand" href="#">2048</h1>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/Home">Home</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/Login">Login</router-link></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/GameBoard">GameBoard</router-link></a
            >
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/ManageRecord">Manage Record (For admin only)</router-link></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-view
      v-on:loginName="storeName" :sharedData="sharedData"
      v-on:bestScore = "storeTopScore" 
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      sharedData: {
        name: "John Doe",
        bestScore:""
      },
    };
  },
  methods: {
    storeName: function (name) {
      this.sharedData.name = name;
    },
    storeTopScore : function(bestScore){
        this.sharedData.bestScore = bestScore;
    }
  },
};
</script>

<style>
.navbar {
  background-color: #6e6e6e !important;
}
</style>
