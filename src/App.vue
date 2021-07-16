<template>
  <div id="app">
    <header-comp />
    <router-view />
  </div>
</template>

<script>
import headerComp from './components/headerComp.vue'
import axios from 'axios'
export default {
  components : {
    headerComp
  },
  data : ()=>{
    return{
    }
  },
      
   created()
  {
    document.title = 'covid tracker'
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    this.$store.commit('setCoor',{lat : lat,long : long})
 
});

    setInterval(() => {
      var run  = axios.get('https://api.covid19api.com/summary')
     run.then(e=>{
      this.$store.commit('setData',e.data.Countries)
      this.$store.commit('setInfo',e.data.Global)
    })
    run.catch(e=>{
      console.log('errr')
    })
    }, 1000);
  }
}
</script>