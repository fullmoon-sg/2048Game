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
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hf, index) in hall_fame" v-bind:key="hf._id">
            <td>{{ index + 1 }}</td>
            <td>{{ hf.name }}</td>
            <td>{{ hf.score }}</td>
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
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pc, index) in player_record" v-bind:key="pc._id">
            <td>{{ index + 1 }}</td>
            <td>{{ pc.name }}</td>
            <td>{{ pc.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
     </div>
</div>
    
</template>

<script>
import axios from 'axios';
export default {
    data : function(){
        return{
            'hall_fame' : [],
            'player_record' : []
        }
    },
    created: async function () {
    let response_hf = await axios.get(
      "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/"
    );
    this.hall_fame = response_hf.data;
    let response_pc = await axios.get(
      "https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/add"
    );
    this.player_record = response_pc.data;
  },
    
}
</script>

<style scoped>

.main{
    display : inline-flex;
}

.left{
    margin : 25px;
    padding : 10px;
    width: 800px;
    height: 800px;
    border : 2px solid Red;
}

.right{
    margin : 25px;
    padding : 10px;
    width: 800px;
    height: 800px;
    border : 2px solid Red;
}
</style>