<template>
<div class="main">
    <div class="left">
        <h1>Hello World</h1>
    </div>
    <div class="right">
    <h1>Welcome</h1>
     </div>

</div>
    
</template>

<script>
export default {
    data : function(){
        return{
            
        }
    }
    
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