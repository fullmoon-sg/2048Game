<template>
<div>
     <h1>Hall of Fame</h1>
    <div v-for="hf in hall_fame" v-bind:key="hf._id">
        <div>
            <!-- {{rearrange(hall_fame)}} -->
        <ul>
            <li>Player Name : {{hf.player_name}}</li>
            <li>Score : {{hf.score}}</li> 
            <li>Date : {{hf.date}}</li>     
        </ul>
        </div>
    </div>
</div>   
</template>

<script>
import axios from 'axios';
export default {
    created : async function(){
        let response = await axios.get('https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/');
        this.hall_fame = response.data;
    },
    data : function(){
        return{ 
            'hall_fame' : {},
            // 'rearrange' : {}
        }
    },
    // methods : {
    //     rearrange : function(hall_fame){
    //         let temp = "";
    //         for (let i=0; i < hall_fame.length; i++)
    //         {
    //             for(let j=1; j <hall_fame.length;i++)
    //             {
    //                 if (hall_fame.fund[j] > hall_fame.fund[i])
    //                 {
    //                     temp = hall_fame.fund[i];
    //                     hall_fame.fund[i] = hall_fame.fund[j];
    //                     hall_fame.fund[j] = temp;         
    //                 }
    //             }
    //         }
    //         return hall_fame;
    //     }
    // }
    
}
</script>

<style scoped>
h1{
    text-align: center;
}

ul{
      text-align: center;
}

</style>