<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">2048</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item type="dark" href="#"
              ><router-link to="/HallFame"
                >Hall Of Fame</router-link
              ></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/Login">Login</router-link></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/GameBoard">GameBoard</router-link></b-nav-item
            >
            <b-nav-item href="#"
              ><router-link to="/ManageRecord"
                >Manage Record (For admin only)</router-link
              ></b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <router-view
      v-on:loginName="storeName"
      :sharedData="sharedData"
      v-on:bestScore="storeTopScore"
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
        bestScore: "",
      },
    };
  },
  methods: {
    storeName: function (name) {
      this.sharedData.name = name;
    },
    storeTopScore: function (bestScore) {
      this.sharedData.bestScore = bestScore;
    },
  },
};
</script>

<style>
.bg-light {
  border-bottom: 4px solid #dddede;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.btn-outline-success {
  border-bottom: 5px solid #035403 !important;
}

.navbar + nav {
  margin-top: 25px;
  margin-bottom: 5px;
}
</style>
