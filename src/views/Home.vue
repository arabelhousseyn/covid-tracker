<template>
    <div class="home">
        <div class="container">
            <map-comp />
            <confirmed-comp />
            <death-comp />
            <recovred-comp />
        </div>
    </div>
</template>

<script>
import mapComp from '../components/mapComp.vue'
import confirmedComp from '../components/confirmedComp.vue'
import deathComp from '../components/daethComp.vue'
import recovredComp from '../components/recoverdComp.vue'
export default {
    components : {
        mapComp,
        confirmedComp,
        deathComp,
        recovredComp
    }
}
</script>