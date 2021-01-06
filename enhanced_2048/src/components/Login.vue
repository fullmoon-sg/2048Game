<template>
  <div>
    <div class="login-instruction">
      <div class="instruction">
       <div v-if="page === 1">
       <h2>The Enhanced 2048</h2>
        <p>What is original 2048 ? <br>The original 2048 is a game where you combine numbered tiles in order to gain a 
            higher numbered tile. You start with one random number of 2 or 4 on a piece of tile. Your goal in the game is to
            gain scoring through combining the tiles so that it will add up the score to achieve the number 2048. </p>
        <p>What is enhanced 2048 <br>In "Enhanced 2048", we re-invented the game to make it simple to play. In the original
        2048, you cannot combine two tiles when there is a different numbering tile in-between it. However, in "Enhanced 2048", you
        can. Simple right? In addition, we created a "Power 2048" button that can use it once per game. So, you may wondering what 
        is "Power 2048" ? By using "Power 2048", the game master will randomly removing up to 3 numbering tiles instantly. This
        features is extremly useful when you are left with one or two empty tiles before you are running out of tile to play.
        So what is the down-side? Well, while the game mastering randomly remove the numbering tiles, the system will deduct the 
        numbering tile score as well. So, use it wisely gamer.</p>
        <p>How to control ? <br> The game is controlled by using the arrow button located at the left side of the game board.<br><br>
        <img src="../components/images/control.gif" width="550px" height= "300px"></p>
        <button class = "btn btn-info btn-lg btn3d" disabled>Previous Page</button>
        <button class = "btn btn-info btn-lg btn3d" @click="nextPage">Next Page</button> 
        </div>
         <div v-else-if="page === 2">
        <p>Power 2048 button <br>During the game, you can use the <img src="../components/images/power_btn.jpg" height="50" width="110"> button once. Once the button is pressed, the system<br>
        will randoming removing up to 3 numbering tiles. <br><img src="../components/images/power.gif" width="550px" height= "275px"></p>
        <p> Reset button <br> The <img src="../components/images/reset_btn.jpg" height="50" width="110">  is a useful feature for player who wants to reset and start a new game. However, player<br>
        needs to aware that the current scoring will not be saved into the database. <br><img src="../components/images/reset.gif" width="550px" height= "275px"></p>

        <button class = "btn btn-info btn-lg btn3d" @click="previousPage">Previous Page</button>
        <button class = "btn btn-info btn-lg btn3d" disabled>Next Page</button> 
        </div>
      </div>
      <div class="instruction-text-left">
          <h2>Login Instructions</h2>
        
          <p>Please procee to login or register for a new account to play</p>
          <p>
            You can also choose to play without login or registering for<br /> a
            new account. However, your score will not be enrolled in <br />hall of fame. 
          </p>
        
      </div>
      <div class="modal-container" id="modal">
        <div v-if="register">
          <span class="modal-heading">ENTER YOUR DETAILS</span>
          <input
            type="text"
            name="name"
            placeholder="Your champion name"
            v-model="name"
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Your password...Shhhh...."
            v-model="password"
          /><br />
          <input
            type="submit"
            class="btnRegister"
            value="Register"
            @click="addPlayer"
          />
          <button @click="register = !register" class="signIn">
            Have an account already?
          </button>
        </div>
        <div v-else>
          <span class="modal-heading">ENTER YOUR DETAILS</span>
          <input
            type="text"
            name="name"
            placeholder="Your champion name"
            v-model="name"
          /><br />
          <input
            type="password"
            name="password"
            placeholder="Your password...Shhhh...."
            v-model="password"
          /><br />
          <input
            type="submit"
            class="btnRegister"
            value="Login"
            @click="logInPlayer"
          />
          <p class="message">Welcome Back Champion!</p>
        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
 
  data: function () {
    return {
      name: "",
      password: "",
      register: true,
      page : 1
    };
  },
  methods: {
    addPlayer: async function () {
      this.$emit("loginName", this.name);
      await axios.post(
        "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/add",
        {
          name: this.name,
          password: this.password,
          playersRecord: [],
        }
      );
      this.name = "";
      this.password = "";
      alert("A new champion has been registered");
      this.$router.push("GameBoard");
    },
    logInPlayer: async function () {
      let response = await axios.get(
        "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/add"
      );
      this.playersRecord = response.data;

      for (let record of this.playersRecord) {
        if (this.name === record.name && this.password === record.password) {
          this.$emit("loginName", this.name);
          alert("You have successfully login.");
          this.$router.push("GameBoard");
          return true;
        }
      }
      alert("Your record cannot be found");
    },
    previousPage : function(){
        this.page = 1;
    },
     nextPage : function(){
      this.page = 2;
  }
  },
};
</script>

<style scoped>
.login-instruction {
  display: inline-block;
}

.instruction {
  margin: 25px;
  position: absolute;
  left: 600px;
  height: 800px;
  width: 1250px;
  font-size : 18px;
   font-family: "Fredoka One", cursive;
}

.instruction-text-left {
  margin: 20px 0px 100px 50px;
  font-size: 18px;
  text-align: left;
  font-family: "Fredoka One", cursive;
}

#modal {
  position: absolute;
  top: 200px;
  left: 25px;
}
.modal-container {
  width: 450px;
  height: 400px;
  margin: 75px 100px 0px 25px;
  position: absolute;
  background-color: rgba(218, 200, 190, 1);
  border: 2px solid rgba(128, 100, 100, 1);
  padding: 20px;
  box-shadow: 0px 0px 50px 5px black;
}

.modal-heading {
  width: 100%;
  display: block;
  height: 60px;
  margin-bottom: 25px;
  color: yellow;
  padding: 10px;
  text-align: center;
  font-size: 28px;
  font-family: "Fredoka One", cursive;
  border-bottom: 2px solid white;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  height: 50px;
  border: 2px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  text-align: center;
}

.btnRegister {
  color: black;
  font-size: 19px;
  margin-top: 10px;
}

.signIn {
  background-color: rgba(218, 200, 190, 1);
  color: black;
  border: 2px;
  margin-top: 10px;
  text-align: left;
  font-size: 13pt;
  cursor: pointer;
}

.message {
  margin-top: 20px;
  font-size: 24px;
  text-align: center;
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

.btn3d.btn-info {
  box-shadow: 0 0 0 1px rgba(180,180,190) inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 rgba(200,200,190,1), 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  background-color:rgba(218, 200, 190);
}

.btn3d.btn-info:active,
.btn3d.btn-info.active {
  box-shadow: 0 0 0 1px #ead3fa inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset,
    0 1px 3px 1px rgba(0, 0, 0, 0.3);
  background-color: rgba(218, 200, 190);
}

</style>