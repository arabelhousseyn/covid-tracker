<template>
    <div class="404">
        <p class="center text">
            <span class="_24">No ! </span>
            <a href="/">Back</a>
            <img style="margin:20px;" :src="img" alt="death">
        </p>
    </div>
</template>

<script>
export default {
    data : ()=>{
        return{
            img : null,
        }
    },
    created()
    {
        this.img = this.$store.state.image
    }
}
</script>