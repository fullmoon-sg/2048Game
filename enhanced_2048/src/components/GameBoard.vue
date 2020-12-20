<template>
        
    <div class="container">
        <div class="control">
            <h1>Control</h1>
        </div>
        <div class="broad">
            <div class="i-box" id="i-box-00">
                <div class="i-box-inner" v-if="g00">{{g00}}</div>
            </div>
             <div class="i-box" id="i-box-01">
                <div class="i-box-inner" v-if="g01">{{g01}}</div>
            </div>
             <div class="i-box" id="i-box-02">
                <div class="i-box-inner" v-if="g02">{{g02}}</div>
            </div>
             <div class="i-box" id="i-box-03">
                <div class="i-box-inner" v-if="g03">{{g03}}</div>
            </div>
             <div class="i-box" id="i-box-10">
                <div class="i-box-inner" v-if="g10">{{g10}}</div>
            </div>
             <div class="i-box" id="i-box-11">
                <div class="i-box-inner" v-if="g11">{{g11}}</div>
            </div>
             <div class="i-box" id="i-box-12">
                <div class="i-box-inner" v-if="g12">{{g12}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g13">{{g13}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g20">{{g20}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g21">{{g21}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g22">{{g22}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g23">{{g23}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g30">{{g30}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g31">{{g31}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g32">{{g32}}</div>
            </div>
             <div class="i-box" id="i-box-13">
                <div class="i-box-inner" v-if="g33">{{g33}}</div>
            </div> 
        </div><!-- end of broad div -->  
    
    </div><!-- end of container div -->
</template>

<script>
export default {
    data : function(){
        return{
            "g00" : "","g01" : "","g02" : "","g03" : "",
            "g10" : "","g11" : "","g12" : "","g13" : "",
            "g20" : "","g21" : "","g22" : "","g23" : "",
            "g30" : "","g31" : "","g32" : "","g33" : "",    
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

.control{
    background-color: cyan;
    margin-top: 100px;
    width: 250px;
    height: 450px;
}

.broad{
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

</style>