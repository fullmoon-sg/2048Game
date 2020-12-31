<template>
  <div>
       <h1>Hall of Fame</h1>
    <div>
      <table class="table">
        <thead class="table-header">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hf,index) in sortScore.slice(0,10)" v-bind:key="hf._id">
            <td>{{index+1}}</td>
            <td>{{ hf.name }}</td>
            <td>{{ hf.score }}</td>
            <td>{{ hf.date }}</td>
          </tr>
        </tbody>
      </table>
      <css-doodle>
        :doodle { @grid: 15 / 100vmax; background: #fff; cursor: pointer; }
        :doodle(:hover) { --s: 1 ; } :after { content: @pick(2,0,4,8);
        font-size: 4vmax; color: #E6E4DB; transform: scale(@rand(.2, .9)); }
        transition: .5s cubic-bezier(.175, .885, .32, 1.275); transition-delay:
        @rand(550ms); transform: translateY(calc(var(--s) * 100%))
        rotate(calc(var(--s) * 360deg));
      </css-doodle>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created: async function () {
    let response = await axios.get(
      "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/"
    );
    this.hall_fame = response.data;
  },
  data: function () {
    return {
      hall_fame: [],
    };
  },
  computed: {
    sortScore: function () {
      let sortScore = this.hall_fame.slice(0);
      sortScore.sort(function (a, b) {
        return b.score - a.score;
      });
      this.$emit('bestScore', sortScore.score); 
      return sortScore;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-family: "Fredoka One", cursive;
}

.table {
  position: absolute;
  left: 550px;
  width: 800px;
  height: 500px;
  font-family: "Fredoka One", cursive;
}

.table-header {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(250, 200, 200);
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

td {
  text-align: center;
  font-size: 24px;
  color: grey;
}

body {
  font: 900 100px/0.65 system-ui;
  margin: 0;
  overflow: hidden;
  width: 110%;
}
span {
  display: inline-block;
  text-indent: -2rem;
  position: relative;
}
</style>

