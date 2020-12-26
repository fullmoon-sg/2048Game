<template>
  <div class="container">
    <div class="data">
      <div class="game-score">
        <h1>Game Score</h1>
        <h2>{{ score }}</h2>
      </div>
      <!-- end of Game Score div -->
      <div class="control">
        <div class="top">
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
          <div class="left">
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
          <div class="right">
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
        <div class="down" @click="down">
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
      <!-- end of control div -->
      <div class="menu">
        <div class="reset" @click="restart">
          <button class="btn btn-primary">Reset</button>
        </div>
        <div class="back">
          <button class="btn btn-primary">Back Menu</button>
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
    </div><!-- end of draw broad div -->
  </div><!-- end of container div -->
</template>

<script>
export default {
  data: function () {
    return {
      board: [], 
    };
  },
  methods: {
      down : function(){ 
          for(let i = 2; i >=0; i--){
              for(let j=0; j < 4; j++)
              {
                  if ((this.board[i+1][j] === "") && (this.board[i][j] !== ''))
                  {
                      this.$set(this.board[i+1],[j], this.board[i][j]);
                      this.$set(this.board[i],[j], "");       
                  }
              }
          } 
          this.generate_2_or_4();    
         }, 
    generate_2_or_4 : function(){
        let row = Math.floor(Math.random() * 4);
        let column = Math.floor(Math.random() * 4);
        let random_2_4 = Math.floor(Math.random() > 0.6 ? 2 : 4);
        if (this.board[row][column] === ''){
         this.$set(this.board[row],column, random_2_4)
        } else{
            this.generate_2_or_4();
        }
    },
    endGame : function(){
        let end = false;
        for (let i=0; i < 4; i++){
            for(let j=0; j<4; j++){
                if(this.board[i][j] === ""){
                    end=true;
                }
            }
        }
        return end;
    },
    restart : function(){
        for (let i=0; i < 4; i++){
            for(let j=0; j<4; j++){
                this.board[i][j] = ""
                }
        }
       this.score;
       this.generate_2_or_4();
    },

    OccupiedSlot : function(){
        for (let i=0; i < 4; i++){
            for(let j=0; j<4; j++){
                if (this.board[i][j] !== ' ')
                {
                    return true;
                }
                else{
                    return false;
                }
              }
        }
    },

  }, // end of methods
  computed: {
    score: function () {
      let scores=0;
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
      gameBoard.push(row)
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
.container {
  background-color: white;
  margin-top: 50px;
  display: flex;
}

.data {
  background-color: cyan;
  margin-top: 100px;
  width: 250px;
  height: 650px;
  border-radius: 15px;
}

.control {
  margin: 25px;
}

.game-score {
  top: 50px;
  padding: 0px 0px 25px 0px;
  margin-bottom: 125px;
  text-align: center;
}

.top {
  margin: 5px;
  text-align: center;
}

.left-right {
  display: inline-flex;
  left: 0;
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
  text-align: center;
  margin: 5px;
}

.draw-broad {
  background-color: rgba(255, 100, 0, 1);
  width: 750px;
  height: 750px;
  margin: 50px;
  padding: 10px;
  border-radius: 10px;
}

td {
  width: 160px;
  height: 160px;
  background-color: rgba(255, 240, 200, 1);
  border-radius: 15px;
  float: left;
  padding: 11px;
  margin: 11px;
}

.row-col-text {
  font-size: 108px;
margin-left: 30px;
}

.menu {
  display: flex;
  margin: 150px 0px 0px 0px;
  padding: 5px;
}

.reset {
  position: relative;
  left: 10px;
}

.back {
  position: relative;
  left: 65px;
}
</style>