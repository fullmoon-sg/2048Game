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
                    <tr v-for="hf in hall_fame" v-bind:key="hf._id" v-bind:bestScore="hf.score">
                        <td>Rank</td>
                        <td>{{hf.name}}</td>
                        <td>{{hf.score}}</td>
                        <td>{{hf.date}}</td>
                     </tr>                         
                </tbody>
            </table>
              
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
      hall_fame: {},
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.table {
  position: absolute;
  left: 300px;
  width: 800px;
  height: 500px;
}

.table-header {
  margin-top: 20px;
  padding: 10px;
  background-color: rgba(250, 200, 200);
  font-weight: bold;
}

td{
    font-size: 14px;
}
</style>