<template>
  <div class="main">
    <div class="left">
      <div>
        <h1>Hall of Fame (TOP 10)</h1>
      </div>
      <div>
        <table class="table">
          <thead class="table-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Points</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(hf,index) in sortScore.slice(0,10)" v-bind:key="hf._id">
              <td>{{ hf._id }}</td>
              <td>{{ hf.name }}</td>
              <td>{{ hf.score }}</td>
              <button
                type="button"
                class="btn btn-danger btn-lg btn3d"
                @click="toDelete(hf._id,index)"
              >
                Delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="right">
      <div>
        <h1>Player Record</h1>
      </div>
      <div>
        <table class="table">
          <thead class="table-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pc in player_record.slice(0,10)" v-bind:key="pc._id">
              <td>{{ pc._id }}</td>
              <td>{{ pc.name }}</td>
              <td>{{ pc.password }}</td>
              <button
                type="button"
                class="btn btn-danger btn-lg btn3d"
                @click="deleteRecord(pc._id)"
              >
                Delete
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      hall_fame: [],
      player_record: [],
    };
  },
  created: async function () {
    let response_hf = await axios.get(
      "https://fmb-game-2048.herokuapp.com/"
    );
    this.hall_fame = response_hf.data;

    let response_pc = await axios.get(
      "https://fmb-game-2048.herokuapp.com/add"
    );
    this.player_record = response_pc.data;
  },
  methods: {
    toDelete: async function (id,index) {
      await axios.delete(
        "https://fmb-game-2048.herokuapp.com/" +
          id
      );
      this.hall_fame.splice(index,1);
      alert("This item has been deleted");
   
    },
    deleteRecord: async function (id,index) {
      await axios.delete(
        "https://fmb-game-2048.herokuapp.com/" +
          id
      );
      this.player_record.splice(index, 1);
      alert("This item has been deleted");   
    },
  },
  computed: {
    sortScore: function () {
      let sortScore = this.hall_fame.slice(0);
      sortScore.sort(function (a, b) {
        return b.score - a.score;
      });
      return sortScore;
    },
  },
};
</script>

<style scoped>
.main {
  display: inline-flex;
}

.left {
  margin: 25px;
  padding: 10px;
  width: 900px;
  height: 800px;
  border: 2px solid Red;
  font-family: "Fredoka One", cursive;
}

.right {
  margin: 25px;
  padding: 10px;
  width: 900px;
  height: 800px;
  border: 2px solid Red;
  font-family: "Fredoka One", cursive;
}

.btn3d {
  position: relative;
  top: -6px;
  border: 0;
  transition: all 40ms linear;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 2px;
  margin-right: 2px;
}

.btn3d.btn-danger {
  box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #aa0000, 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  background-color: #d73814;
}

.btn3d.btn-danger:active,
.btn3d.btn-danger.active {
  box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset,
    0 1px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: #d73814;
}
</style>