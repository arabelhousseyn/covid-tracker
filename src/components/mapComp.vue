<template>
    <div class="map leftMap boxLeft borderBox">
      <div id="mapp"></div>
       <info-comp />
    </div>
</template>


<script>
import axios from 'axios'
import infoComp from './infoComp.vue'
export default {
    data : ()=>{
        return{
            options : {
                   disableDefaultUi: false
            },
            lat : 0,
            long : 0,
            cases : []
        }
    },
    components : {
      infoComp
    },
    methods : {
        initMap()
        {
  const map = new google.maps.Map(document.getElementById("mapp"), {
    zoom: 4,
    center: { lat: this.lat, lng: this.long },
    mapTypeId: "terrain",
    disableDefaultUI: true,
  });
  for (const casee of this.cases) {   
    var cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: { lat: casee.pos.lat, lng: casee.pos.long},
      radius: Math.sqrt(casee.TotalConfirmed) * 100,
    });
      google.maps.event.addListener(cityCircle,'click', function(e){
          console.log(e.latLng.lat)
          var infoWindow = new google.maps.InfoWindow({
        content: '<div class="red bold">Total confirmed : '+ casee.TotalConfirmed.toString() +'</div> </br>'
         + '<div class="red bold">Total deaths : ' + casee.TotalDeaths.toString() + '</div> </br>'
         + '<div class="green bold">Total recovered : ' + casee.TotalRecovered.toString() + '</div> </br>',
        maxWidth:500
    });
    infoWindow.setPosition(e.latLng);
    infoWindow.open(map);
});
  }
        }
    },
    created()
    {
      setTimeout(() => {
          this.lat = this.$store.state.latUser
          this.long = this.$store.state.longUser
          this.cases = this.$store.state.allData
          for (const cas of this.cases) {
              for (const temp of this.$store.state.countryCodes) {
               if( cas.CountryCode.toLowerCase() == temp.alpha2.toLowerCase())
               {
                   cas.pos = { lat : temp.latitude, long : temp.longitude }
               }   
              }
          }
          this.initMap()
      }, 2000);  
    }
}
</script>