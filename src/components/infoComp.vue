<template>
    <div class="info">
       <p class="white" v-html="info"></p>
    </div>
</template>


<script>
export default {
    data : ()=>{
        return{
            info : '&copy 2021 Created by <a target="_blank" title="click me" href="https://www.linkedin.com/in/elhousseyn-arab-b40b0817b/"> elhousseyn arab</a>'
        }
    }
}
</script>