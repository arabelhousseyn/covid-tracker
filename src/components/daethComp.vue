<template>
    <div class="confirmed rightItem boxColor borderBox">
        <load class="center" style="margin-top:50%;" v-if="tog" :loading="loading" :color="color" :size="size"></load>
        <div v-else>
            <p class="text">
            <span class="bold">{{confirmed}}</span>
            <span class="_24 red">{{valueConfirmed | formatNumber}}</span>
            <span class="bold">{{newConfirmed}}</span>
            <span class="_24 red">+ {{valuenewConfirmed | formatNumber}}</span>
        </p>
        <div class="boxRight">
            <input type="text" placeholder="Country" v-model="write" @keydown="remove" class="specialInput" @keypress.enter="handle">
            <div v-if="tog2">
                <p v-for="(casee,index) in cases" :key="index" class="bold center _btm">
                <span class="country">{{casee.Country}}</span> <span class="red value">{{casee.TotalDeaths | formatNumber}} / + {{casee.NewDeaths | formatNumber}}</span> </p>
            </div>
            <div v-else>
                <p v-for="(casee,index) in cases2" :key="index" class="bold center _btm">
                <span class="country">{{casee.Country}}</span> <span class="red value">{{casee.TotalDeaths | formatNumber}} / + {{casee.NewDeaths | formatNumber}}</span> </p> 
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import load from 'vue-spinner/src/PulseLoader.vue'
import numeral from 'numeral'
Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0,0");
  });
export default {
    data : ()=>{
       return{
           confirmed : '',
           valueConfirmed : 0,
           newConfirmed : '',
           valuenewConfirmed : 0,
           cases : [],
           color : 'red',
           loading : 'loading',
           size : '20px',
           tog : true,
           placeHolder : '',
           write : '',
           tog2 : true,
           cases2 : []
       }
    },
    components : {
        load
    },
    methods : {
        handle()
        {
           this.tog2 = false 
            for (const casee of this.cases) {
                if(casee.Country.toLowerCase() === this.write.toLowerCase())
                {
                    this.cases2 = [casee]
                }
            }
        },
        remove(e)
        {
            if (e.key === "Backspace" || e.key === "Delete") {
            this.tog2 = true
            this.cases2 = []
      }
        }
    },
    created()
    {
        setInterval(() => {
            if(this.$store.state.allData !=  undefined)
            {
        this.tog = false
        this.cases = this.$store.state.allData
        this.confirmed = this.$store.state.en.three
        this.newConfirmed = this.$store.state.en.six
        this.valueConfirmed = this.$store.state.deaths
        this.valuenewConfirmed = this.$store.state.newDeaths
        this.placeHolder = this.$store.state.en.seven
            }else{
                this.tog = true
            }
        }, 1000);
    }
}
</script>