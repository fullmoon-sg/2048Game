<template>
  <div id="app">

<!-- <div class="container"> -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">2048</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
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
<!-- </div> -->

    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
    </nav> -->
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
/* .navbar {
  background-color: #6e6e6e !important;
  font-size : 16px;
  color : black;
} */


.bg-light {
    border-bottom: 4px solid #dddede;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
.btn-outline-success {
  border-bottom:5px solid #035403!important;
}

.navbar + nav{
  margin-top:25px;
  margin-bottom:5px;
}
</style>
