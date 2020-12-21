<template>    
    <div class="container">
        <div class="data">
            <div class="game-score">
               <h1>Game Score</h1>
               <h2>10000000</h2>
            </div> <!-- end of Game Score div -->
            <div class="control">
           <div class="top">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
           </div>
           <div class="left-right">
               <div class="left">
                   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
               </div>
               <div class="right">
                   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"/>
                    </svg>
               </div>
           </div>
           <div class="down">
               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                </svg>
           </div>
           </div> <!-- end of control div --> 
           <div class="menu">
               <div class= "reset">
               <button class="btn btn-primary">Reset</button>
               </div>
               <div class="back">
                   <button class="btn btn-primary">Back Menu</button>
             </div>
           </div> <!-- end of reset div --> 
        </div><!-- end of data div --> 
        <div class="draw-broad">
            <div class="i-box" id="row-col-00">
                <div class="row-col" v-if="rc00">{{rc00}}</div>
            </div>
             <div class="i-box" id="row-col-01">
                <div class="row-col" v-if="rc01">{{rc01}}</div>
            </div>
             <div class="i-box" id="row-col-02">
                <div class="row-col" v-if="rc02">{{rc02}}</div>
            </div>
             <div class="i-box" id="row-col-03">
                <div class="row-col" v-if="rc03">{{rc03}}</div>
            </div>
             <div class="i-box" id="row-col-10">
                <div class="row-col" v-if="rc10">{{rc10}}</div>
            </div>
             <div class="i-box" id="row-col-11">
                <div class="row-col" v-if="rc11">{{rc11}}</div>
            </div>
             <div class="i-box" id="row-col-12">
                <div class="row-col" v-if="rc12">{{rc12}}</div>
            </div>
             <div class="i-box" id="row-col-13">
                <div class="row-col" v-if="rc13">{{rc13}}</div>
            </div>
              <div class="i-box" id="row-col-20">
                <div class="row-col" v-if="rc20">{{rc20}}</div>
            </div>
             <div class="i-box" id="row-col-21">
                <div class="row-col" v-if="rc21">{{rc21}}</div>
            </div>
             <div class="i-box" id="row-col-22">
                <div class="row-col" v-if="rc22">{{rc22}}</div>
            </div>
             <div class="i-box" id="row-col-23">
                <div class="row-col" v-if="rc23">{{rc23}}</div>
            </div>
             <div class="i-box" id="i-box-30">
                <div class="row-col" v-if="rc30">{{rc30}}</div>
            </div>
             <div class="i-box" id="i-box-31">
                <div class="row-col" v-if="rc31">{{rc31}}</div>
            </div>
             <div class="i-box" id="row-col-32">
                <div class="row-col" v-if="rc32">{{rc32}}</div>
            </div>
             <div class="i-box" id="row-col-33">
                <div class="row-col" v-if="rc33">{{rc33}}</div>
            </div> 
        </div><!-- end of broad div -->  
    </div><!-- end of container div -->
</template>

<script>
export default {
    data : function(){
        return{
            "rc30" : "","rc31" : "","rc32" : "","rc33" : "",   
            "rc20" : "","rc21" : "","rc22" : "","rc23" : "",
            "rc10" : "","rc11" : "","rc12" : "","rc13" : "",
            "rc00" : "","rc01" : "","rc02" : "","rc03" : "",
        }
    }  
}
</script>

<style scoped>
.container {
    background-color : white;
    margin-top: 50px;
    display : flex
}

.data{
    background-color: cyan;
    margin-top: 100px;
    width: 250px;
    height: 650px;
    border-radius : 15px;
}

.control{
 margin : 25px;
}

.game-score{
    top : 50px;
    padding : 0px 0px 25px 0px;
    margin-bottom: 125px;
    text-align: center;
}


.top{
    margin : 5px;
    text-align : center;
   
}

.left-right{
    display : inline-flex;
    left: 0;
}

.left{
    position: relative;
    left: 0px;
    margin: 5px;
}

.right{
    position: relative;
    left : 75px;
    margin: 5px;
}

.down{
    text-align : center;
    margin: 5px;
}

.draw-broad{
    background-color : rgba(255,100,0,1);
    width: 750px;
    height: 750px;
    margin : 50px;
    padding: 10px;
    border-radius: 10px;
}

.i-box{
    width: 160px;
    height : 160px;
    background-color : rgba(255,240,200,1);
    border-radius : 15px;
    float: left;
    padding: 11px;
    margin : 11px;
}

.menu{
    display : flex;
    margin : 150px 0px 0px 0px;
    padding : 5px;
}

.reset{
    position : relative;
    left : 10px;
}

.back{
    position : relative;
    left : 65px;
}
</style>