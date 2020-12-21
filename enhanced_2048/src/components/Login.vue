<template>
    <div>
       <h1>Create A New and Promising Top Scorer</h1>
    <div>
        <label class="form-lable">Champion, enter your name</label>
        <input type="text" class="form-control" v-model="name"/>
    </div>
     <div>
        <label class="form-lable">Champion, enter your password</label>
        <input type="text" class="form-control" v-model="password"/>
    </div>
    <button class="btn btn-primary" @click="addPlayer">A new star is born</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data : function(){
        return {
            'name' : "",
            'password': ""
        }
    },
    methods :{
        addPlayer : async function(){
            await axios.post('https://3000-fa64be6f-4931-4818-98d6-1cd8524de106.ws-us03.gitpod.io/', {
                'name' : this.name,
                'password' : this.password,
                'date' : new Date()
            })

            this.name = "";
            this.password = "";
            alert("A new champion has been registered")

        }
    }
}
</script>

<style scoped>

</style>