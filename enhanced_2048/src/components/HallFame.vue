<template>
  <div>
    <h1>Hall of Fame (TOP 10)</h1>
    <div>
      <table class="table">
        <thead class="table-header">
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hf, index) in sortScore.slice(0, 10)" v-bind:key="hf._id">
            <td>{{ index + 1 }}</td>
            <td>{{ hf.name }}</td>
            <td>{{ hf.score }}</td>
          </tr>
        </tbody>
      </table>
      <css-doodle>
        :doodle { @grid: 15 / 100vmax; background: #EEEEEE; cursor: pointer; }
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
  data: function () {
    return {
      hall_fame: [],
    };
  },
  created: async function () {
    let response = await axios.get("https://fmb-game-2048.herokuapp.com/");
    this.hall_fame = response.data;
    this.extractHighScore();
  },
  methods: {
    extractHighScore: function () {
      let scores = this.sortScore;
      let highScore = scores[0].score;
      this.$emit("bestScore", highScore);
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
h1 {
  margin: 15px;
  padding: 10px;
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

@media (max-width: 768px) {
  h1 {
    margin: 5px;
    padding: 5px;
    font-size: 22px;
    text-align: center;
    font-family: "Fredoka One", cursive;
  }

  .table {
    position: absolute;
    left: 50px;
    width: 650px;
    height: 400px;
    font-family: "Fredoka One", cursive;
  }

  .table-header {
    margin-top: 5px;
    padding: 5px;
    background-color: rgba(250, 200, 200);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  td {
    text-align: center;
    font-size: 18px;
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
}
</style>

