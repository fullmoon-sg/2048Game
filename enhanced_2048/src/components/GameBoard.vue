<template>
  <div class="box">
    <div class="gif">
      <div v-if="score < 50">
        <img src="../components/images/no_audience.gif" />
      </div>
      <div v-else-if="score >= 50 && score < 100">
        <img src="../components/images/little_audience.gif" />
      </div>
      <div v-else-if="score >= 100 && score < 150">
        <img src="../components/images/moderate_audience.gif" />
      </div>
      <div v-else-if="score >= 150 && score < 200">
        <img src="../components/images/crowded.gif" />
      </div>
      <div v-else-if="score >= 200 && score < 250">
        <img src="../components/images/huge_crowd.gif" />
      </div>
      <div v-else-if="score >= 250 && score < 300">
        <img src="../components/images/huge1_crowd.gif" />
      </div>
      <div v-else-if="score >= 300">
        <img src="../components/images/huge2_crowd.gif" />
      </div>
    </div>
    <div class="data">
      <div class="name">2048</div>
      <div id="name">{{ sharedData.name }}</div>
      <div class="game-score">
        <h3>Game Score</h3>
        <h2>{{ score }}</h2>
      </div><!-- end of Game Score div -->
      <div class="game-score">
        <h3>Best Score</h3>
        <h2>{{ sharedData.bestScore }}</h2>
      
      </div><!-- end of Best Score div -->
      <div>
        <div class="control" v-if="control">
          <div
            class="top btn btn-info btn-lg btn3d"
            @click="up"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-up-square"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </div>
          <div class="left-right">
            <div
              class="left btn btn-info btn-lg btn3d"
              @click="left"
              style="cursor: pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-arrow-left-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </div>
            <div
              class="right btn btn-info btn-lg btn3d"
              @click="right"
              style="cursor: pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-arrow-right-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"
                />
              </svg>
            </div>
          </div>
          <div
            class="down btn btn-info btn-lg "
            @click="down"
            style="cursor: pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-down-square"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </div>
        </div>
        <div class="control" v-else>
          <p>Click "Restart" to begin a new Game</p>
        </div>
      </div><!-- end of control div -->
      <div class="menu">
        <div class="reset" @click="restart">
          <button class="btn btn-danger btn-lg btn3d">Restart</button>
        </div>
        <div>
          <div class="power" @click="power" v-if="powerUse">
            <button class="btn btn-magick btn-lg btn3d">Power 2048</button>
          </div>
          <div class="power" v-else>
            <button class="btn btn-magick btn-lg btn3d">Deactived</button>
          </div>
        </div>
      </div>
      <!-- end of reset div -->
    </div>
    <!-- end of data div -->
    <div class="draw-broad">
      <div>
        <table>
          <tr v-for="(row, rindex) in board" :key="rindex">
            <td v-for="(col, cindex) in row" :key="cindex">
              <span class="row-col-text"> {{ col }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- end of draw broad div -->
  </div>
  <!-- end of container div -->
</template>
<script> 
import axios from "axios";
export default {
  props: ["sharedData"],
  data: function () {
    return {
      board: [],
      control: true,
      powerUse: true,
    };
  },
  methods: {
    up: function () {
      let x = false;
      if (this.endGame()) {
        for (let i = 0; i < 4; i++) {
          for (let j = 1; j <= 3; j++) {
            for (let k = 0; k < j; k++) {
              if (this.board[k][i] === "" && this.board[j][i] !== "") {
                x = true;
                this.$set(this.board[k], [i], this.board[j][i]);
                this.$set(this.board[j], [i], "");
              } else if (
                this.board[k][i] !== "" &&
                this.board[k][i] === this.board[j][i]
              ) {
                x = true;
                this.$set(
                  this.board[k],
                  [i],
                  this.board[k][i] + this.board[j][i]
                );
                this.$set(this.board[j], [i], "");
              }
            }
          }
        }
        this.generate_2_or_4();
      } else {
        this.control = false;
        alert("You are out of move !!! Restart the game and try again");
         if ( this.name !== "John Doe")
         {this.updateScore();
         }
      }
      return x;
    },
    left: function () {
      let x = false;
      if (this.endGame()) {
        for (let i = 0; i < 4; i++) {
          for (let j = 1; j <= 3; j++) {
            for (let k = 0; k < j; k++) {
              if (this.board[i][k] === "" && this.board[i][j] !== "") {
                x = true;
                this.$set(this.board[i], [k], this.board[i][j]);
                this.$set(this.board[i], [j], "");
              } else if (
                this.board[i][k] !== "" &&
                this.board[i][k] === this.board[i][j]
              ) {
                x = true;
                this.$set(
                  this.board[i],
                  [k],
                  this.board[i][k] + this.board[i][j]
                );
                this.$set(this.board[i], [j], "");
              }
            }
          }
        }
        this.generate_2_or_4();
      } else {
        this.control = false;
        alert("You are out of move !!! Restart the game and try again");
        if ( this.name !== "John Doe")
         {this.updateScore();
         }
      }
      return x;
    },
    right: function () {
      let x = false;
      if (this.endGame()) {
        for (let i = 0; i < 4; i++) {
          for (let j = 2; j >= 0; j--) {
            for (let k = 3; k > j; k--) {
              if (this.board[i][k] === "" && this.board[i][j] !== "") {
                x = true;
                this.$set(this.board[i], [k], this.board[i][j]);
                this.$set(this.board[i], [j], "");
              } else if (
                this.board[i][k] !== "" &&
                this.board[i][k] === this.board[i][j]
              ) {
                x = true;
                this.$set(
                  this.board[i],
                  [k],
                  this.board[i][k] + this.board[i][j]
                );
                this.$set(this.board[i], [j], "");
              }
            }
          }
        }
        this.generate_2_or_4();
      } else {
        this.control = false;
        alert("You are out of move !!! Restart the game and try again");
        if ( this.name !== "John Doe")
         {this.updateScore();
         }
      }
      return x;
    },
    down: function () {
      let x = false;
      if (this.endGame()) {
        for (let i = 0; i < 4; i++) {
          for (let j = 2; j >= 0; j--) {
            for (let k = 3; k > j; k--) {
              if (this.board[k][i] === "" && this.board[j][i] !== "") {
                x = true;
                this.$set(this.board[k], [i], this.board[j][i]);
                this.$set(this.board[j], [i], "");
              } else if (
                this.board[k][i] !== "" &&
                this.board[k][i] === this.board[j][i]
              ) {
                x = true;
                this.$set(
                  this.board[k],
                  [i],
                  parseInt(this.board[k][i] + this.board[j][i])
                );
                this.$set(this.board[j], [i], "");
              }
            }
          }
        }
        this.generate_2_or_4();
      } else {
        this.control = false;
        alert("You are out of move !!! Restart the game and try again");
        if ( this.name !== "John Doe")
         {this.updateScore();
         }
      }
      return x;
    },
    generate_2_or_4: function () {
      let r = Math.floor(Math.random() * 4);
      let c = Math.floor(Math.random() * 4);
      let random_2_4 = Math.floor(Math.random() > 0.6 ? 2 : 4);
      if (this.board[r][c] === "") {
        this.$set(this.board[r], [c], parseInt(random_2_4));
      } else {
        this.generate_2_or_4();
      }
    },
    endGame: function () {
      let end = false;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.board[i][j] === "") {
            end = true;
          }
        }
      }
      return end;
    },
    restart: function () {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          this.board[i][j] = "";
        }
      }
      this.score;
      this.generate_2_or_4();
      this.control = true;
      this.powerUse = true;
    },
    power: function () {
      for (let i = 0; i < 3; i++) {
        let r = Math.floor(Math.random() * 4);
        let c = Math.floor(Math.random() * 4);
        this.$set(this.board[r], [c], "");
      }
      this.powerUse = false;
    },
    updateScore: async function () {
      await axios.post(
        "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/",
        {
          name: this.sharedData.name,
          score: this.score,
        }
      );
      this.name = "";
      this.score = "";
    },
  }, // end of methods
  computed: {
    score: function () {
      let scores = 0;
      if (this.board.length > 0) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            if (this.board[i][j] !== "") {
              scores += this.board[i][j];
            }
          }
        }
        return scores;
      } else {
        return 0;
      }
    },
  },
  created: function () {
    let gameBoard = [];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 4; j++) {
        row.push("");
      }
      gameBoard.push(row);
    }
    this.board = gameBoard;

    this.$set(
      this.board[Math.floor(Math.random() * 4)],
      Math.floor(Math.random() * 4),
      Math.random() > 0.2 ? 2 : 4
    );
  }, // end of created
}; // end of export default
</script>

<style scoped>
.box {
  margin: 0px;
  display: flex;
  font-family: "Fredoka One", cursive;
  width: 1500px;
  height: 800px;
}

.gif {
  position: absolute;
  top: 350px;
  left: 35px;
  width: 450px;
  height: 250px;
}

.data {
  position: absolute;
  left: 625px;
  background-color: #6e6e6e;
  margin-top: 100px;
  width: 325px;
  height: 650px;
  border-radius: 15px;
}

#name {
  text-align: center;
  font-size: 32px;
  color:white;
}

.name {
  text-align: center;
  font-size: 48px;
  color: white;
}

.control {
  height: 225px;
  width: 250px;
  position: absolute;
  top: 315px;
  left: 40px;
}

.game-score {
  background-color: #adadad;
  top: 50px;
  /* padding: 0px 0px 15px 0px; */
  margin: 10px;
  text-align: center;
  border-radius: 10px;
  color: white;
}

.top {
  left: 80px;
}

.left-right {
  position: absolute;
  top: 75px;
  left: 0px;
  display: inline-flex;
}

.left {
  position: relative;
  left: 0px;
  margin: 5px;
}

.right {
  position: relative;
  left: 75px;
  margin: 5px;
}

.down {
  position: absolute;
  bottom:0px;
  margin: 0px;
  width: 80px;
  left: 85px;
  height: 70px;
}

.btn3d.btn-info {
  box-shadow: 0 0 0 1px #00a5c3 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #348fd2, 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  background-color: #39b3d7;
}

.btn3d.btn-info:active,
.btn3d.btn-info.active {
  box-shadow: 0 0 0 1px #00a5c3 inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset,
    0 1px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: #39b3d7;
}

.draw-broad {
  position: absolute;
  right: 100px;
  background-color: #6e6e6e;
  width: 750px;
  height: 750px;
  margin: 50px 25px 25px;
  padding: 10px;
  border-radius: 10px;
}

td {
  width: 160px;
  height: 160px;
  background-color:#ADADAD;
  border-radius: 15px;
  float: left;
  padding: 20px;
  margin: 11px;
  text-align: center;
}

.row-col-text {
  font-size: 72px;
  color:grey;
}

.menu {
  position: absolute;
  top: 550px;
  display: flex;
  margin: 5px 0px 0px 0px;
  padding: 5px;
}

.reset {
  position: relative;
  left: 10px;
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

.power {
  position: relative;
  left: 50px;
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

.btn3d:active:focus,
.btn3d:focus:hover,
.btn3d:focus {
  outline: medium none;
}

.btn3d:active,
.btn3d.active {
  top: 2px;
}
.btn3d.btn-magick {
  color: #fff;
  box-shadow: 0 0 0 1px #9a00cd inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #9823d5, 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  background-color: #bb39d7;
}

.btn3d.btn-magick:active,
.btn3d.btn-magick.active {
  box-shadow: 0 0 0 1px #9a00cd inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset,
    0 1px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: #bb39d7;
}
</style>