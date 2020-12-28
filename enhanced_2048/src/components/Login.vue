<template>
  <div>
    <div class="modal-container" id="modal">
      <span class="modal-heading">ENTER YOUR DETAILS</span>
      <form class="form">
        <input type="text" name="name" placeholder="Your champion name"  v-model="name"><br />
        <input type="password" name="password" placeholder="Your password...Shhhh...." v-model="password"/><br />
        <input type="submit" class="btnRegister" value="Register" />
      </form>
      <button @click="addPlayer" class="signIn">Have an account already?</button>
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
    };
  },
  methods: {
    addPlayer: async function () {
      await axios.post(
        "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/",
        {
          name: this.name,
          password: this.password,
          date: new Date(),
        }
      );

      this.name = "";
      this.password = "";
      alert("A new champion has been registered");
    },
  },
};
</script>

<style scoped>
#modal {
  position: absolute;
  top: 200px;
  left: 450px;
}
.modal-container {
  width: 450px;
  height: 400px;
  margin: auto;
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
  margin-top: 15px;
  text-align: left;
  font-size: 13pt;
  cursor: pointer;
}
</style>